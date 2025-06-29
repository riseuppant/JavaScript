// let marks={
//     harry:98 ,
//     rohan:70,
//     aakash: 7,
// }
// console.log(Object.values(marks)[0])//very imp 
// console.log(marks["harry"])
// for(let i=0;i<Object.keys(marks).length;i++){
//     console.log("The marks of " + Object.keys(marks)[i]+ " are "+ marks[Object.keys(marks)[i]]);
// }
// for(let key in marks){
//     console.log("The marks of " +key+ " are "+ marks[key] )//much easy
// }
// //uses hash table internally


// let cn=5;
// let i;
// while(i!=cn){

//     i=prompt("Enter a number");
//     i=Number.parseInt(i);
// }

// console.log("You have enetered a correct")

const mean=(a,b,c,d)=>{
    return (a+b+c+d)/4;
}

console.log("mean of 4,5,6,7 is",mean(4,5,6,7))