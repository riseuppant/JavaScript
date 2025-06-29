let a= prompt("Hey, what is your age?")//This doesnot work from outside the browser.. Try doing it in the console of the browser
console.log(typeof a)

a=Number.parseInt(a)//Convert String to Number
console.log(typeof a)

if(a<0){
    alert("This is not a valid age")
}
else if(a<=18){
    alert("You are a kid")
}
else{
    alert("You can get a Driver's Licence")
}
//iske baad done ko console m print krana it wouldnot give the undefined error(though it is not an error) 
console.log(a>18?"Drive" : "Not Drive Get lost Kiddo")//Ternery operator
//But after this line it would still give as we checked condition and printed and later nothing has beed done so return was undefined
