let Person1 ="Hardik"
console.log(Person1.length)
let friend = 'Prakash'
console.log(friend)
//let myFriend="Shubh' avoid this
console.log(Person1[0])
console.log(Person1[1])
console.log(Person1[2])

//Template Literals
let boy1= "Pramod"
let boy2= "Nikhil"

let sentence =`${boy1} is a friend of ${boy2}`//You can also create Strings using Backticks
console.log(sentence)

//Escape Sequence Characters  \n \t and \r are the escape sequence characters
let fruit = 'bana\'na'// \' is called a single character
let fruit2='bana\nna'// This would print later terms in the next line
let fruit3='bana\rna'//This would replace the terms after \r to the first terms
let fruit4='bana\tna'// This would print later terms in the next line
console.log(fruit)
console.log(fruit2)
console.log(fruit3)
console.log(fruit4)