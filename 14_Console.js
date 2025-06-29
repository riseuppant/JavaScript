console.log(console)//To determine all the Possible functions possible for a console
console.log(typeof console)

console.log("Hi")//iski return value undefined h (Keval string ki nhi)
4//iski return value wo print karega

console.error("This is an error")//This seggregates error from other and is useful for debugging 
//This error is also viewed in the sidebar of the inspect tool

console.assert(5>54)
console.assert(55>54)

console.clear()

let obj={
    a: 1,
    b:2,
    c:3,
}
console.table(obj)

console.warn("WARNING!!")
console.info("info")

//Time taken for some process
console.time("a")//Let a is some process
console.timeEnd("a")

//Time taken for ForLoop
console.time("forloop")//to record the time for the loop
for(let i=0;i<5;i++){
    console.log(233)
}
console.timeEnd("forloop")

//Time taken for While Loop
console.time("While Loop")
let i=5
while(i--){
    console.log(54)
}
console.timeEnd("While Loop")
