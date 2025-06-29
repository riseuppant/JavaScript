let arr=[45,2,21]
//  MAP FEATURE
// let a = arr.map((value)=> {console.log(value);
//     return value+1;
// })
// console.log(a)

//Filter Method

let a2=arr.filter((a)=>{
    return a<10
})
console.log(a2)

let a3=[1,23,44,5,2,1]
a3.reduce((h1,h2)=>{
    return h1+h2;
})