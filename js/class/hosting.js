//variable hosting

// console.log(age);
// var age = 25;//only variable decleration move top not value thats why its give undefineed



// sayMyName("sakshi")

// function sayMyName(finalName){
//     console.log(finalName);
//here whole function and defination of function shifted to the function call

// }


//using let and const keywards
// console.log(age);
// let age = 25;



//function  creating by using function expression(function hosting is not possible)
// sayHello();
// let sayHello= function(){   //function expression
//     console.log("hello jee,kaise ho aap");
// }


//class hosting(its is not possible)
// const object1 = new Human();
// class Human{

// }


// function greetMe(greet,fullName){
//     console.log("hello",fullName);
//     greet();
// }

// function greet(){
//     console.log("greeting for the day")
// }
// greetMe(greet,"sakshi")
// greet();

//return of function
// function solve(number){
//     return function(number){
//         return number*number;
//     }
// }
// let ans = solve(5);
// let finalAns = ans(10);
// console.log(finalAns);



//function storing in data strucyure
// const arr = [
//     function(a,b){
//         return a+b;
//     },
//     function(a,b){
//         return a-b;
//     },
//     function(a,b){
//         return a*b;
//     },
    
// ];
// let first = arr[2];
// let ans = first(5,10);
// console.log(ans);



///use funcrion as a object
// let obj = {
//     age:25,
//     wt:36,
//     ht:180,
//     greet:()=>{
//         console.log("hello jee");
//     }
// }
// console.log(obj.age);
// obj.greet();


//functin expression

console.log(greet);
let greet = function(){
    console.log("hello duniya");
}
