


// //code 1
// const t1 = performance.now()
// for (let i=1; i<=100; i++){
//     let para = document.createElement('p');
//     para.textContent = 'this is para' + i;
//     document.body.appendChild(para);
// }

// const t2 = performance.now();

// console.log("total time by code1:"+ (t2-t1));



// //code 2

// const t3 = performance.now();

// let mydiv = document.createElement("div");

// for(let i=1; i<=100; i++){
//     let para = document.createElement('p');
//     para.textContent = 'this is para' + i;
//     document.body.appendChild(para);
// }
// document.body.appendChild(mydiv);

// const t4 = performance.now();
// console.log("total time by code2:"+ (t4-t3));


//reflow and repaint

//best code

let fragement = document.createDocumentFragment();

for(let i=1; i<=100; i++){
    let para = document.createElement('p');
    para.textContent = "this is para" + i + "adf";
    //no reflow and repaint for the below line
    fragement.appendChild(para);
}
//there below line take 1 reflow and 1 repaint
document.body.appendChild(fragement);