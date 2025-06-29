
// alert("Hello")
// let a= setTimeout(function(){
//     document.write("this is executed after 2sec")
// },7000)

// let b=prompt("Do you want to run the timeout again?")
// if(b=='n'){
//     clearTimeout(a)
// }
// console.log(a)

let sum=(a,b)=>{
    console.log("Yes Iam running "+(a+b))
    
}

// setTimeout(sum,5000,1,2)

// setInterval(function timer(){
//     alert("setinterval")
// },3000)

setInterval(sum,2000,1,2)