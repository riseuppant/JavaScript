//Q1
let arr=[1,2,4,5,6,7]
let n=prompt("Enter the number of terms you want to add")
while(n--){
    let num=prompt("Enter a number")
    num=Number.parseInt(num)
    arr.push(num)
    console.log(num," has been added to the array\n","Updated Array :",arr)
}

//Q2

let arr2=[]
let num
do{
    num=prompt("Enter a number")
    num=Number.parseInt(num)
    arr2.push(num)
    console.log(num," has been added to the array\n","Updated Array :",arr2)
} while(num!=0);
//Q3

let arr3=[]
let num3
do{
    num3=prompt("Enter a number")
    num3=Number.parseInt(num3)
    arr3.push(num3)
    console.log(num3," has been added to the array\n","Updated Array :",arr3)
} while(num3!=0);
let arr4=arr3.filter((h1)=>{
    return (h1%10 ==0) 
})//no need for true or dalse as the statement itself would give true and false
console.log("Filtered array with numbers divisible by 10 is " ,arr4 )
let arr5=[1,2,3,4,5,6]
let n5= arr5.map((x)=>{
    return x*x
})
console.log(n5)

let arr6=[1,2,3,4,5,6,7]
let n4 =arr6.reduce((x1,x2)=>{
    return x1*x2
})
console.log(n4)