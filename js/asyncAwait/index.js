// async function getData(){

//     setTimeout(function(){
//         console.log("i am inside set tome lock");
//     },3000);
// }
// let output = getData();


// //await

// //fetch API

//fetch request
// async function getData() {

//     //get request - async
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
//     //parse json - async
//     let data = await response.json();
//     console.log(data);
// }
// getData();

//scenario
//prepare url/api endpoint -> sync
//await //fetch data -> network call -> async
//process data -> sync

const myHeader = new Headers();
myHeader.append("content-type", "application/json");

const url ="https://jsonplaceholder.typicode.com/posts";

        

    const options={
        method:"POST",
        body: JSON.stringify({username:"love world"}),
        header:myHeader,
    };

    async function getData() {

        const url ="https://jsonplaceholder.typicode.com/posts/1";

        const response = await fetch(url)
        let data = await response.json();
        console.log("get daat response:", data);
    }

async function postData() {
    const response = await fetch(url,options);
    let data = await response.json();
    console.log("my data", data);
    
}

async function processData() {
    await postData();
    await getData();
    
}
processData();
postData();
getData();
