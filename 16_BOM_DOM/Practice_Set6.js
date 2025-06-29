let runAgain= true
const canDrive=(age)=>{
    return age>=18 ? true: false;
}

while(runAgain){
    let age=prompt("Enter your age")
    age=Number.parseInt(age)
    if(age<0){
        console.error("Please enter a Valid age")
        break;
    }
    if(canDrive(age)){
        alert("Yes, You can Drive")
    }
    else{
        alert("No, You cannot Drive")
    }
    runAgain=confirm("Do you want to play again?")
}

//Q4
let num=prompt("Enter your age")
num=Number.parseInt(num)
if(num>4){
    location.href="https://www.google.com"
}

let color=prompt("Enter the page color")
document.body.style.background=color
