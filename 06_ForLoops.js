let sum=0;//Program to add first n natural numbers
let n=prompt("Enter the Value of n")
n=Number.parseInt(n)
for(let b=1;b<=n;b++){
    sum+=b
    console.log(sum);
}//here we cannot get b value of block can use var to get the value of b

console.log("The sum of first" + n + "natural numbers is"+ sum)

//For-in Loops

let obj={
    harry:98,
    shubh:45,
    shivika:57,
    shiv:23,
}
for(let a in obj){
    console.log("marks of" + a + "are" + obj[a])
}
for(let b of obj){
    console.log("marks of" + a + "are" + obj[a])
}// here obj is not iterable 
//it can be a string 
for(let b of "harry"){
    console.log(b)
}
