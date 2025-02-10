// async function getData(){

//     setTimeout(function(){
//         console.log("i am inside set tome lock");
//     },3000);
// }
// let output = getData();


// //await

// //fetch API

//fetch request
async function getData() {

    //get request - async
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
    //parse json - async
    let data = await response.json();
    console.log(data);
}
getData();

//scenario
//prepare url/api endpoint -> sync
//await //fetch data -> network call -> async
//process data -> sync