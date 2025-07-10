// const regex="";
const regex=/(Harry){2}/gi  //Turns off case sensitiveness
const text="Harryharry is is a avery avery nice awesome very boy\narry"
// console.log(text.replace("very","VERY"))
console.log(text.replace(regex,"VERY"))