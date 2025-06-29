//Q1
//The statement would print 4 as the length of the string
let animal="Lion" 
let sur1=`The fox could not escape the lion and was eventually killed. It's poor family was stranded`
const word= 'fox'
console.log(`The word "${word}" ${sur1.includes(word)? 'is': 'is not'} in the sentence`)
//${sur1.includes(word)? 'is': 'is not'} returns true then adds the function the the
console.log(sur1.includes(word))

//Q3
let a = "THIS is A SenTENCE In CaPITals"
let b=a.toUpperCase()
console.log(b)

//Q4
let String="The cost of the book is 1000"
for(var i=0;i<String.length;i++){
    if(String[i]=='1')
    {
        break;
    }
}

//console.log(i)
let amount=String.slice(i,String.length)
let amount2=String.slice("The cost of the book is ".length)
console.log(amount)
console.log(amount2)
