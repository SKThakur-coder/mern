document.addEventListener("DOMContentLoaded",function(){
    const searchButton = document.getElementById("search-btn");
    const usernameInput = document.getElementById("user-input");
    const statsContainer = document.getElementById("statsContainer");
    const easyProgressCircle = document.querySelector(".eary-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");
    const easyLabel = document.getElementById("easy-lable");
    const mediumLabel = document.getElementById("medium-lable");
    const hardLabel = document.getElementById("hard-lable");
    const cardStatsContainer = document.querySelector(".stats-cards");


    function validateUsername(username){
        if(username.trim() === ""){
            alert("username should not be empty");
            return false;
        }
        const regex = /^[a-zA-Z0-9_ -]{1,15}$/;
        const isMatching = regex.test(username);
        if(!isMatching){
            alert("Invalid Username");
        }
        return isMatching;
    }


    async function fetchUserDetail(username) {
        // const url = `https://leetcode-stats-api.herokuapp.com/${username}`;

        const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
            const targetUrl = `https://leetcode.com/graphql`;
            const myHeaders = new Headers();
            //here concation is happen
            myHeaders.append("content-type","application/json");
         
            const graphql = JSON.stringify({
            // query:"\n query usersessionProgress($username:string!) {\n allQuestionCount {\n difficulity\n  count }\n matchedUser (username:$username) {\n submitstats {\n  acSubmissionNum {\n difficulity\n   count\n   submission } \n  totalSubmissionNum {\n  difficulity\n count\n  submission\n} \n } \n}\n}\n ",

            query: `query usersessionProgress($username: String!) {
                allQuestionsCount {
                difficulty
                count
            }
            matchedUser(username: $username) {
                submitStats {
                    acSubmissionNum {
                        difficulty
                        count
                        submissions
                    }
                    totalSubmissionNum {
                        difficulty
                        count
                        submissions
                    }
                }
            }
        }`,

            
            variables:{"username":`${username}`}
            });

            const requestOptions ={
            method: "POST",
            header: myHeaders,
            body: graphql,
            redirect: "follow"
                
            };
        

    
        try{
            searchButton.textContent = "searching...";
            searchButton.disabled = true;

            // const response = await fetch(url);

            
            const response = await fetch(proxyUrl+targetUrl, requestOptions);

            
            if(!response.ok){
                throw new Error("Unable to fetch the User detail");
            }
            const parseData = await response.json();
            console.log("Logging data:", parseData);
        }

        //     displayUserData(parseData)){
        // }
        catch(error){
             statsContainer.innerHTML = `<p>No Data found</p>`;
        }
        finally{
            searchButton.textContent = "search";
            searchButton.disabled = false;
        }
        
    }



    // function updateProgress(solved, total,label,circle) {
    //     const progressDegree = (solved/total)*100;
    //     circle.style.setProperty("--progress-degree", `${progressDegree}%`);
    //     lable.textContent = `${solved}/${total}`;
        
    // }

    function  displayUserData(parseData){
        const totalQues = parseData.data.allQuestionsCount[0].count;
        const totalEasy = parseData.data.allQuestionsCount[1].count;
        const totalMedium = parseData.data.allQuestionsCount[2].count;
        const totalHard = parseData.data.allQuestionsCount[3].count;


        updateProgress(solvedTotalEasyQues, totalEasy,easyProgressCircle,easyLabel);
        updateProgress(solvedTotalMediumQues,totalMedium, mediumLabel,mediumProgressCircle);
        updateProgress(solvedTotalHardQues, totalMedium,hardLabel,hardProgressCircle);

    }

    searchButton.addEventListener('click', function(){
        const username = usernameInput.value;
        console.log("loggin username:", username);
        if(validateUsername(username)){
            fetchUserDetail(username);
        }
    });
});
