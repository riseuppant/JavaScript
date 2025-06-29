const loadScript = (src)=>{
    return new Promise((resolve,reject) => {
        let script = document.createElement("script")
        script.src=src 
        document.body.appendChild(script)
        script.onload=()=>{
            resolve(1)
        }
            script.onerror=()=>{
            reject(0)}
    })
}

let p1= loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js")
p1.then((value)=>{
    console.log(value)
    return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js")
}).catch((error)=>{
    console.log("We are sorry but we are having problems loading this script")
})