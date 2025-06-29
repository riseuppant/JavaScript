//Promise is something that means we are trying to do a promise of execution of the code
let promise = new Promise(function(resolve,reject){
    // alert("hello")
    resolve(56)
})
console.log("Hello")
setTimeout(function(){
    console.log("Hello in 2 sec")

},2000)

console.log("My name is" + "John")
console.log(promise)