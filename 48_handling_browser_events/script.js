let x=function(e){
    console.log(e.target);
    console.log("hello world")
}
let y=function(e){
    console.log("hello world2")
}
btn.addEventListener('click',x)
// btn.addEventListener('click',y)

let a=prompt("What is your favorite number?");

if(a=="2"){
    btn.removeEventListener('click',x)
}

//CAUTION:There needs to be functions created separately and passed else every function in each block would be treated as a new function 