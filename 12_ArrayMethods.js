//Array Methods
let num = [1,2,3,4,5]
b=num.toString(num)
console.log(b)
let c=num.join("_")
console.log(c, typeof c)
let d=num.join(" and ")
console.log(d)

//Modifies original array
num.pop()
console.log(num)

let r=num.push(56)
console.log(r)//returns new length
console.log(num)

let r1= num.shift()
console.log(r,num )
console.log(num)

let r2=num.unshift(57)
console.log(r2)
console.log(num)

delete num[4]
console.log(num)

//concatenation does not change original array
let num_more=[11,12,13,15,9,10]
let newArray = num.concat(num_more)
console.log(newArray)
console.log(num_more)
let numEven_more=[20,21,22]
let anoArray =  num.concat(num_more,numEven_more)

let numNew=[1,4,2,5,56,234,3,22]
numNew.sort()
console.log(numNew)

let compare=(a,b)=>{
    return a-b
}
numNew.sort(compare)
console.log(numNew)

let numnew=[23,1,4,56,22,54]
numnew.splice(2,2,1023,1024,1025,1026,1027)
console.log(numnew)
numnew.splice(2,0,10,221,7)
let k1=numnew.splice(2,3,10,756)
console.log(numnew)
console.log(k1)//gives deleted numbers ka array

let newnum2=[1,2,3,4,5,6]//does not modify new array rather gives the copy of it
let t2=newnum2.slice(3)
let t3=newnum2.slice(2,5)
console.log(t2)
console.log(t3)