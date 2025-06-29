//Arrays 
//Single Variable which hold more than one value

const marks_BTech=[1,3,4,5,null,false,"Not Present"]//can include of various types 
console.log(marks_BTech.length)
console.log(marks_BTech)
console.log(marks_BTech[7])//rn is undefined
marks_BTech[7]=67
console.log(marks_BTech[7])//is defined now
console.log(marks_BTech.length)//Length is increased
marks_BTech[3]=45//trying to change the value of the components of the array
console.log(marks_BTech[3])