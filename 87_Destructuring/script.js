// let arr=[3,5,8]
// let [a1,b1]=arr

// console.log(a1,b1)

//No need to do let a= arr[0] and b=arr[1]
//You cannot assign more integers to a array with less number of integers in it
// let arr1=[3,5,6,78,35,13]
// let [a, b, c, d, ...rest]=arr1

let {a,b}={ a: 2 , b:45}

console.log(a,b)

//Spread Operator
let arr1=[3,5,8]
let obj1= { ...arr1 }
console.log(obj1)

function sum(v1,v2,v3){
    return v1+v2+v3
}

console.log(sum(...arr1))

let obj2={
    name: "Harry",
    company:"Company xyz",
    address: "XYZ"
}

console.log({...obj2 , name:"John"})//IMP