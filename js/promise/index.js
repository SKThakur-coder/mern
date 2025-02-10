


// let firstPromise = new Promise((resolve, reject) =>{
//     console.log("sakshi");
//     // resolve(1001);
//     reject(new Error("internal server erroe"));
// });

//asynchronous code

// let firstPromise = new Promise((resolve, reject) =>{
//     function sayMyName(){
//         console.log("my name is sakshi");
//     }
//     setTimeout(sayMyName,15000);
//     resolve(1);
// });
// function sayMyName(){
//     console.log("my name is sakshi");
// }
// setTimeout(sayMyName,10000);


//then()
// let promise1 = new promise((resolve, reject)=>{
//     let success = false;
//     if(success){
//         resolve(10);
//     }
//     else{
//         reject(-1);
//     }
// });

// promise1.then((message)=>{
//     console.log("first msg:" + message);
//     return "promise fulfilled second message";
// }).then((message)=>{
//     console.log("second msg :" + message);
//     return "promis fulfilled third message";
// }).then((message)=>{
//     console.log("third msg" + message);
// }).catch((error)=>{
//     console.log(error);
// }).finally((message)=>{
//     console.log("mai toh chalu ga hi chalu ga");
// })


// promise1.then((message) => {
//     console.log("then ka message is:" + message);
// }).catch((error) =>{
//     console.log("error:" + error);
// })


let promise1 = new promise((resolve, reject)=>{
    setTimeout(resolve,1000,"first");
});
let promise2 = new promise((resolve, reject)=>{
    setTimeout(resolve,1000,"second");
});
let promise3 = new promise((resolve, reject)=>{
    setTimeout(resolve,1000,"third");
});

promise.all([promise3,promise2,promise1])
.then((value)=>{
    console.log(value);
})
.catch((error)=>{
    console.log("error" + error);
});