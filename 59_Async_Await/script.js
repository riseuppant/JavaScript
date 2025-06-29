// async function hardik(){
//     return 5;
// }

// hardik().then((x)=>{
//     console.log("This is a async funtion " +x )
// })
 
async function harry(){
    let delhiWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("27")

        },1000)
    })
    
    let bangaloreWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("21")

        },10000)
    })
    //Proof it is waiting

    console.log("Fetching Delhi Weather Please Wait....")
    // delhiWeather.then(alert)
    // bangaloreWeather.then(alert)
    let delhiW = await delhiWeather
    console.log("Fetched Delhi Weather "+delhiW)

    console.log("Fetching Bangalore Weather Please Wait....")
    let bangaloreW= await bangaloreWeather
    console.log("Fetched Bangalore Weather "+bangaloreW)

    return [delhiW,bangaloreW ]
}

const cherry=async()=>{
    console.log("Hey Iam cherry and Iam waiting")
}

let main2=async ()=>{
    console.log("Welcome to Weather Control Room")
    let a = await harry()
    let b=  await cherry()
    // a.then((value)=>{
    //     console.log(value)
    // }) throws error as it only has the resolved value

    console.log(a)
} 
main2()