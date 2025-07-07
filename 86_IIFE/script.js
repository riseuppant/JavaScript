let promise=()=>{
    return new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        resolve(456)
    },4000)
})
}
let f= async()=>{
    
    let b= await promise()
    console.log(b)
    let c= await promise()
    console.log(c)
    let d= await promise()
    console.log(d)
    
}
console.log(d)//This will throw an error stating that d is not defined out of the scope
// f()