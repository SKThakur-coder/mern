document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("search-btn");
    const usernameInput = document.getElementById("user-input");
    const statsContainer = document.getElementById("statsContainer");
    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");
    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");
    const cardStatsContainer = document.querySelector(".stats-cards");

    function validateUsername(username) {
        if (username.trim() === "") {
            alert("username should not be empty");
            return false;
        }
        const regex = /^[a-zA-Z0-9_ -]{1,15}$/;
        const isMatching = regex.test(username);
        if (!isMatching) {
            alert("Invalid Username");
        }
        return isMatching;
    }

    async function fetchUserDetail(username) {
        const url = `https://api.allorigins.win/get?url=https://leetcode.com/graphql`;
        try {
            searchButton.textContent = "searching...";
            searchButton.disabled = true;

            const userDetailElement = document.getElementById("userDetail");
            if (userDetailElement) {
                userDetailElement.innerHTML = "User details fetched successfully.";
            } else {
                console.error("Element not found.");
            }

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Unable to fetch the User detail");
            }
            const parseData = await response.json();
            console.log("Logging data:", parseData);

            displayUserData(parseData);
        } catch (error) {
            statsContainer.innerHTML = `<p>No Data found</p>`;
        } finally {
            searchButton.textContent = "search";
            searchButton.disabled = false;
        }
    }

    function updateProgress(solved, total, label, circle) {
        const progressDegree = (solved / total) * 100;
        circle.style.setProperty("--progress-degree", `${progressDegree}%`);
        label.textContent = `${solved}/${total}`;
    }

    function displayUserData(parseData) {
        const totalQues = parseData.data.allQuestionsCount[0].count;
        const totalEasy = parseData.data.allQuestionsCount[1].count;
        const totalMedium = parseData.data.allQuestionsCount[2].count;
        const totalHard = parseData.data.allQuestionsCount[3].count;

        updateProgress(solvedTotalEasyQues, totalEasy, easyProgressCircle, easyLabel);
        updateProgress(solvedTotalMediumQues, totalMedium, mediumProgressCircle, mediumLabel);
        updateProgress(solvedTotalHardQues, totalHard, hardProgressCircle, hardLabel);
    }

    searchButton.addEventListener('click', function () {
        const username = usernameInput.value;
        console.log("loggin username:", username);
        if (validateUsername(username)) {
            fetchUserDetail(username);
        }
    });
});
