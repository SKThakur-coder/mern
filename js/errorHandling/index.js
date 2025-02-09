//compile time error
// console.log(1;

//run time error
//reference error
// console.log(x);


//handling

// try{
//     console.log("try block start here");
//     console.log(x);
//     console.log("try block end");
// }
// catch(e){  // e is error name
//     //define krte h error ke sath kya karna chahte h
//     //retry logic
//     //fallback mechanism
//     //logging
//     //custom error
//     console.log("I am inside catch block");
//     console.log("your error is here:",e);
// }
// finally{
//     console.log("I will run everytime, as i am finally block")
// }


//throw keyword 
// let create a custom error
// try{
//     console.log(x);
// }
// catch(err){
//     throw new Error("BHAI PHELE DECLEAR KARO, FIR PRINT KARNA")
// }


let errorCode =100;
if (errorCode ==100){
    throw new Error("Invalid error");
}

