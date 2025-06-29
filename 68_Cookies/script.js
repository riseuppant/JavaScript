console.log(document.cookie)
document.cookie="name=harry12414"
document.cookie="name=harry12414351"
document.cookie="name=harry12414351315153f"
let key=prompt("Enter your key")
let value= prompt("Enter your Value")
document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)