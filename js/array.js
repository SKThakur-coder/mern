// let obj = {
//     name:"sakshi",
//     age :21,
//     weight :55,
//     height : "5ft 3in",
//     greet: function(){
//         console.log("hello jee jaise ho");
//     }
// };

// console.log(obj);
// console.log(typeof(obj));

// let obj2 = obj;


//creation of array
// let arr = [1,2,3,4,5]
// aarray constructor 
// let brr = new Array("sakshi",1,true);
//build in function push or pop
// brr.push('thakur');
// brr.pop('thakur');


// shift or unshift
// brr.shift();
// brr.unshift('sakshi thakur');
// brr.push(23);
// brr.push(67);
// brr.push(27);
//slice
// console.log(brr.slice(2,4));
// console.log(brr[2]);

//splice
// brr.splice(1,2,'kunal');
// console.log(brr);

// console.log(typeof(arr));



// let arr = [10,20,30]
// arr.map((number,index) => {
//     console.log(number+1);
//     console.log(index);
// })
// let ansArray = arr.map((number) =>{
//     return number*number;
// })
// console.log(ansArray);



//filter
// let arr = [10,20,30,11,21,44,51];
// let evenArray = arr.filter((number) =>{
//     return number%2 ==0;
    // if(number%2 == 0) {
    //     return true;
    // }
    // else{
    //     return false;
    // }
// });

// console.log(evenArray);

// let arr = [1,2,'sakshi','yhakur',null];
// let ans = arr.filter((value) =>{
//     if(typeof(value)=== 'number'){
//         return true;
//     }
//     else{
//         return false;
//     }
// });

// console.log(ans)


//reduce
// let arr = [10,20,30];

// let ans = arr.reduce((acc,curr) =>{
//     return acc + curr;
// },4);

// console.log(ans);


//sort
// let arr = [6,9,3,2,4,0];
// arr.sort();
// arr.reverse(); 
// console.log(arr);
// console.log(arr.indexOf(6));



//foreach method
// let arr =  [10,20,30,40];
// let length = arr.length;
// for (let index=0;index< length;index++){
//     console.log(arr[index]);
// }
// console.log("length:",length);
// arr.forEach((value,index)=>{
//     console.log("number:", value, "index:", index);
// })



//for in loop
// let obj = {
//     name: "sakshi",
//     age: 21,
//     weight: 53,
//     height: "5ft 3in",
//     greet: function(){
//         console.log("hello jii");
//     }

// };
// for(let key in obj){
//     console.log(key," ",obj[key]);
// }



//for-of loop method
// let fullName = "sakshi";

// for(let val of fullName){
//     console.log(val);
// }

// let arr = [10,20,30,40];
// for(let val of arr){
//     console.log(val);
// } 

//array with function
let arr = [10,20,30,40,50];

let getSum = (arr)=>{

    let sum = 0;
    arr.forEach((value) => {
        sum = sum + value;
    });
    return sum;
}
let totalSum = getSum(arr);
console.log(totalSum);