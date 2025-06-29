//Suppose there is a String like Hi Hardik, How are you? 
// In this if you want to replace Hardik by Someother name we use STRINGS METHODS

let Name="Harry\""
let Name2="hardik"
console.log(Name.length)

console.log(Name2.toUpperCase())
console.log(Name2.toLowerCase())

//Slicing
console.log(Name2.slice(2,4)) // 4 is not included i.e., only name2[2] and name2[3]
console.log(Name2.slice(2))//Upto the EOL

//Replacing
console.log(Name2.replace("ar" , "per"))

let Name3="Naman"
console.log(Name2.concat(" is a friend of ", Name3))

let friend="James"
let friend2= "    Mee  na    "
console.log(friend2.trim())//Only can remove side i.e., front and back not from the middle

//Strings are Immutable
for(let i=0;i<friend.length;i++)
{
    console.log(friend[i]);
}