let name = "manisha";
function outer(){
    // {
    //     let name = sushant;//it does not print because this is under this block of code
    // }
    // let name = "sakshi";//ley -> block scoped
    //created by init
    function innerFunction(){
        //displayName() is the inner function , that form a clouser
        // let name = "love";
        console.log(name);//use variable declear in the parent function
    }
    innerFunction();
}
outer();  