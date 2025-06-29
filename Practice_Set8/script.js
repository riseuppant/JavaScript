//Q1

// btn1.addEventListener('click',function(click){
//     alert("Button 1 is clicked")
// })
// btn2.addEventListener('click',function(click){
//     alert("Button 2 is clicked")
// })
// btn3.addEventListener('click',function(click){
//     alert("Button 3 is clicked")
// })
// btn4.addEventListener('click',function(click){
//     alert("Button 4 is clicked")
// })

//Q2
//Q3
// document.getElementById("google").addEventListener("click",function(){
//     window.location="https://www.google.com"
//     win.focus()
// })

//Q4 can be done later

//Q5
// toggle.addEventListener('click',function(e){
//     if(toggle.textContent=="OFF")
//     toggle.textContent="ON"
// else{
//     toggle.textContent="OFF"
//     }

// let bulb = document.body.getElementsByClassName("bulb")[0];
//   if (toggle.textContent === "OFF") {
//     bulb.style.color = "red";
//   } else {
//     bulb[0].style.color = "green"; // or any color you want when ON
//   }
// });

setInterval(async function () {
    document.querySelector(".bulb").classList.toggle("bulb")
},1000)