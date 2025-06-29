let arr=[1,2,3,4,5,5]



// do{
//     let a=prompt("Enter a number");
//     a=Number.parseInt(a);
//     arr.push(a)
    
// }while(a!=0);

// let arr2=arr.filter((value)=>{
//     return ( (value%10));
// })
// console.log(arr2)

let arr2=[1,2,3,4,5]

let a3=arr2.reduce((x1,x2)=>{
    return x1*x2;
})
console.log(a3)