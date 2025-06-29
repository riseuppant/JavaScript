//Promise is said to be fulfilled for two conditions i.e, reject and resolved 
//but agar tum intezar kar rhe ho then your promise is pending

let promise = new Promise((resolve, reject)=>{
    console.log("Promise is pending")//Promise is still pending 
    setTimeout(()=>{

        // console.log("Iam in a promise and iam rejected")
        // resolve(true)
        reject(new Error("Iam an error"))
    },100)
})

let promise2 = new Promise((resolve, reject)=>{
    console.log("Promise is pending")//Promise is still pending 
    setTimeout(()=>{

        // console.log("Iam in a promise and iam fulfilled") this is usually done in .then
        resolve(true)
        // reject(new Error("Iam an error"))
    },1000)
})
console.log(promise2)
// setTimeout(function(){
//     console.log("Iam running after an error")
// })

promise2.then((value)=>{
    console.log("This is being executed after the promise is run")
    console.log(value)
})

promise.catch((error)=>{
    console.log("Some error has occured in promise function")
    // console.log("This is being executed after the promise is run")
})

//Node terminates as error but browser mai without handling bhi run karta h baaki ka code unlike node

let p=new Promise(resolve=>{
    setTimeout(()=>resolve("done"),1000);
})
p.then(alert)

promise.then((value)=>console.log(value),(error)=>console.log(error))//if you don't want to use .catch 