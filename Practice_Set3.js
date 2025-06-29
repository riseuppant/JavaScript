
let marks = {
    harry : 98,
    rohan : 70,
    Aakash : 73,
    Monika : 4,
}

//Q1
for(let i=0; i<Object.keys(marks).length;i++){
    console.log("The marks of "+ Object.keys(marks)[i] + "are" + marks[Object.keys(marks)[i]])
}

//Q2
for( let key in marks){
    console.log("The marks of "+key + " are " +marks[key])
}

//Q3
// let cn=4
// let i
// while(i != cn){
//     i=prompt("Enter a number")
// }
// console.log("You have entered a correct number")

//Q4
const mean=(a,b,c,d)=>{
    return (a+b+c+d)/4;
}
let a,b,c,d

console.log(mean(1,2,3,4))
