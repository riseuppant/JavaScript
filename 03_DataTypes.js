/*
Types of Data Types
1.Primitive
NULL Number String Symbol Boolean Bigint Undefined
can put a number in a variable type as String 
*/

let a= null;
let b=345;
let d=true;//can also be false
let e=BigInt("567");
let c=BigInt("567")+BigInt("3");
let f="Harry"
let g=Symbol("Iam a Nice symbol")
let k= undefined;

console.log(a, b, d, e, f, g, k, c)

console.log(typeof d)
//Objects in JS
const item={
    "Harry": true,//Ek harry naam ki string h jiski value true h
    "Shubh" : false,
    "Lovish": 67,
    "Rohan" : undefined
}
//item['friend']="james" && item["friend"]="james" are same 
console.log(item["Harry"])//lookup

const dictionary ={
    Coward: "fearful",
    Gum: "adhesive",
    Click: "To click",
    Jump: "To jump",
}

console.log(dictionary)//apostophe does not do any change a var cannot have space too