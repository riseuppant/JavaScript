//Practice 
//Q1
let a="Hardik"
console.log(a+5)//concatenation

//Q2
console.log(typeof a)

//Q3
//It is not possible to change a const later 
//Q4
//It is not possible to update a const key but can add it to some 

const b=5;
let c=35
//b=20;
console.log(b);//throws error
console.log( c + b);
// but in the question it was asked for an object

const item={
    field: "Hardik",
    section:1,
    isPrincipal:false,
}
item['friend']="james"
console.log(item)//prints all the contents
console.log(item['friend'])

item[field]= "Lovesh"//updating
console.log(item)//prints all the contents
