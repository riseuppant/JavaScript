// const drive_checker=()=>{
//     let age=prompt("Enter your age")
//     if(age<=0)
//     {
//         alert("FOOL")
//         console.error("This idiot doesnt know that age is positive")
//     }
//     else if(age<18){
//         alert("First grow up Kiddoo")
//     }
//     else if(age>100){
//         alert("You may have some issues while driving\nI would suggest that you walk")
//     }
//     else{
//         alert("You can drive")
//     }
// }
// age=Number.parseInt(age)
// let run_again=true;
// while(run_again){
//     drive_checker();
//     run_again=confirm("Do you want to run the test again?")
// }

// let num=prompt("Enter a number")
// if(num>4){
//     location.href = "https://www.google.com"    
// }
let bg_color=prompt("Choose a color for the background for page")
document.getElementsByClassName("box")[0].style.backgroundColor = bg_color