function onePlusAvg(x ,y){
    console.log("Done")//would run before returning 
    return 1+(x+y)/2
    //to return Math.round to round it 
}

const sum = (p,q)=>{
    return p+q
}
const hello =()=>{
    console.log("Hey how are you. Iam too good")
    return "hi"
}

let a=1;
let b=2;
let c=3;

// console.log("One plus Average of a and b is ", 1 + (a+b)/2)
// console.log("Done")//This is the change i have to do it for all then Making a function reduces all this stuff
// console.log("One plus Average of c and b is ", 1 + (c+b)/2)
// console.log("Done")//This is the change i have to do it for all then Making a function reduces all this stuff
// console.log("One plus Average of a and c is ", 1 + (a+c)/2)
// console.log("Done")//This is the change i have to do it for all then Making a function reduces all this stuff
//CAN RATHER USE THIS 
console.log("One plus Average of a and b is ", onePlusAvg(a,b))
console.log("One plus Average of c and b is ", onePlusAvg(c,b))
console.log("One plus Average of c and a is ", onePlusAvg(a,c))//these parameters are copied as local variables

console.log(sum(9,10))
let v=hello()
console.log(v)