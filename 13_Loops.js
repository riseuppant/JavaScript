let num=[3,52,1,4,2]

for(let i=0;i<num.length;i++){
    console.log(num[i])
}

num.forEach((element)=>{
    console.log(element)* (element)
}) 

let name="harry"
let arr=Array.from(name)
console.log(arr)

//for ..of is a short for printing array elements
for(let i of num){
    console.log(i)//in object gives values 
}

for(let i in num){
    console.log(i)//in object gives keys
}

for(let i in num){
    console.log(num[i])//gives array as i returns keys
}

//Map, Filter and Reduce
//Array Map Method
let arr3 = [45,23,21]
let d =arr3.map((value,index,array)=>{
    console.log(value,index,array)
    return value+ 1 // you can also return something like index+ value
})
console.log(arr3)
console.log(d)

//Array Filter Method
let arr4=[42,32,150]
let k =arr4.filter((a)=>{
    return a<10//returns a filtered array with new case in it
})

console.log(k)//Now empty as none is less than 10 by returning true for some i

//Reduce
let arr5=[1,2,3,4,5,6]
let arr6=arr5.reduce((h1,h2)=>{
    return h1+h2
})
console.log(arr6)
console.log(arr5)