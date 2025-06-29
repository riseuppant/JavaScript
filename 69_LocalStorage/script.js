let key = prompt("enter the key you want to set")
let value = prompt("enter the value you want to set")

localStorage.setItem(key,value)

console.log(`The value at ${key} is ${localStorage.getItem(key)}`)
if(key=="red" || key=="blue"){
    localStorage.removeItem(key)
}
