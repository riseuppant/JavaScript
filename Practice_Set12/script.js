const a = async(text)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(text)
        },2000)
    })
}

(
    async()=>{
        let text=await a("Hello")
        console.log(text)
        let text2 =await a("world")
        console.log(text2)
    }
)()