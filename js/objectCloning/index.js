// let obj ={
//     age:12,
//     wt:59,
//     ht:180
// };
// console.log(obj);

// obj.color = "white";
// console.log(obj);


//spread operator for cloning

// let src ={
//     age:12,
//     wt:59,
//     ht:180
// };

// let dest = {...src};
// src.age =40;

// console.log("src: ",src);
// console.log("dest: ",dest);


//assign method

// let src ={
//     age:12,
//     wt:59,
//     ht:180
// };

// let src2 ={
//     value:479,
//     name:"sakshi"
// };

// let dest = Object.assign({},src,src2);
// src.age=45;
// // dest.age=88;

// console.log("src: ",src);
// console.log("dest: ",dest);


//object cloning
let src ={
    age:12,
    wt:59,
    ht:180
};

let dest = {};

for(let key in src){
    let newKey = key;
    let newValue = src[key];
    //inserting newkwy and value and create a clon
    dest[newKey] = newValue;
}

src.age = 77;

console.log("src: ",src);
console.log("dest: ",dest);