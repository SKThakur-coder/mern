//AddEventListener

// function changeText(){
//     console.log(event);
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "Hello Sakshi";
// }

// let fpara = document.getElementById('fpara');
// fpara.addEventListener("click", changeText());

// fpara.removeEventListener('click',changeText);

//default action
// let anchorElement = document.getElementById('fanchor');

// anchorElement.addEventListener('click',function(event){
//     event.preventDefault();
//     anchorElement.textContent = '"click done bhai';
// });


//avoiding too many listener
// let paras = document.querySelectorAll('p');

function alertPara(){
    if (event.target.nodeName === 'SPAN'){
        alert("you have clicked on para:" + event.target.textContent);

    }
}

// for(let i=0; i<paras.length; i++){
//     let para = paras[i];
//     para.addEventListener('click', alertPara());
// }


let mydiv = document.getElementById('wrapper');
document.addEventListener('click',alertpara);