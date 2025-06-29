alert("Enter the Value of a")
let a= prompt("Enter a here")
document.write(a)//

alert("You have entered a of type ",typeof a)
a=Number.parseInt(a)

let write= confirm("Do you want me to write in the document")
if(write==true){
    document.write(a)
}
else{
    document.write("Please let me write in the doc")
}