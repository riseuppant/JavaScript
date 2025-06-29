//Q1
let age = prompt("Enter your age");
if(age>10 && age<20){
    console.log("The age lies between 10 and 20")
}
//Q2
let a = prompt("Enter an integer from 1 to 3")
a=Number.parseInt(a);
console.log(typeof a)
switch(a)
{
    case 1:{
        console.log("You have entered 1");
        break;
    }
    case 2:{
        console.log("You have entered 2");
        break;
    }
    case 3:{
        console.log("You have entered 3");
        break;
    }
    default: {
        console.log("Enter a correct choice")
        break;
    }
}
//Q3
let num1= prompt("Enter a number to check its divisibilty by 3 and 2")
num1 =Number.parseInt(a)
if(num1 % 6 ==0){
    console.log("Yes, The number is divisible by 2 and 3")
}
else{
    console.log("No, it is not divisible by 2 and 3")
}
//Q4
let Age = prompt("Enter your age")
Age=Number.parseInt(Age)
console.log(Age>18 ? "Drive" : "Cannot Drive")