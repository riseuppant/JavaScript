//Q1

//Create Loadscript Function with the help of Promises

// const loadScript=async (url)=>{
//     return new Promise((resolve,reject)=>{
//         let script = document.createElement("script")
//         script.src=url
//         document.body.appendChild(script)
//         script.onload=()=>{
//             resolve("Script has been loaded successfully\n"+url)
//         }
//     })
// }

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js").then((value)=>{
//     console.log(value)
// })
//Q2
// const main2=async()=>{
//     console.log(new Date().getMilliseconds())
//     let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js")
//     console.log(a)
//     console.log(new Date().getMilliseconds())
// }

// main2()

//Q3

// let p=async()=>{
// return  new Promise ((resolve,reject)=>{
//     setTimeout(()=>{
//         reject(new Error("This code has been rejected after 3sec"))
//     },3000)
// })
// }
// let e=async()=>{
//     try{
//         let error=await p()
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// e()//call to karo function

//Q4

let p1=async () => { 
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(10);
        }, 2000);        
    })
}
let p2=async () => { 
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(20);
        }, 1000);        
    })
}
let p3  =async () => { 
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(30);
        }, 3000);        
    })
}

let run=async()=>{
    console.time("run")

    let a1=await p1()
    let a2=await p2()
    let a3=await p3()
    
    // let a1= p1()
    // let a2= p2()
    // let a3= p3()
    // let value_Array= await Promise.all([a1,a2,a3])
    // console.log(value_Array)

    console.log(a1,a2,a3)
    console.timeEnd("run")
}
    
run()
