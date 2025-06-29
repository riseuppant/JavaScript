let p1= new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Resolved after 2sec")
        resolve(56)
    },2000)
})

p1.then((value)=>{
    console.log(value)
    let p2= new Promise((resolve, reject)=>{
        resolve("promise 2")
    })
    return p2; //or directly can reutrn p2 in the first line itself
}).then((value)=>{
    console.log("we are done")
    return 2;
}).then((value)=>{
    console.log("We are pakka done and the last function reported was having a value "+ value)
})