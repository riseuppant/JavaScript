//Q1 
//Print the following words Hello and World each after a delay of 4sec
// const a = async(text)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(text)
//         },2000)
//     })
// }

// (
//     async()=>{
//         let text=await a("Hello")
//         console.log(text)
//         let text2 =await a("world")
//         console.log(text2)
//     }
// )()

//Q2
//Find avg of number of an array using spread operation
// let arr1=[1,2,3]
// function avg (a1,a2,a3){
//     return (a1+a2+a3)/3;
// }
// console.log(avg(...arr1))

//Q3
// const a = async(text,n)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(text)
//         },2000*n)
//     })
// }

// (
//     async()=>{
//         let text=await a("Hello",4)
//         console.log(text)
//         let text2 =await a("world",1)
//         console.log(text2)
//     }
// )()

//Q4
function simple(p,r,t){
    return (p*r*t)/100
}

console.log(simple(1000,1,10))