let display= document.getElementById("display")
let sol=document.getElementById("solnReal")
console.log(display.value)
const appendToDisplay =(char)=>{
    display.value+=char
}

let clearOne=()=>{
    console.log("button working")
    if(display.value!=''){
        display.value=display.value.slice(0,display.value.length-1)
        console.log(display.value.length)
    }
    
    else{
        display.value="ERROR"
    }
}

let clearDisplay=()=>{
    console.log("Log cleared");
    if(display.value!='')
    display.value=""
    else{
        display.value="LOG ALREADY CLEARED"
    }
}

let toPercentage=()=>{
    let a=(Number.parseFloat(display.value))*(0.01)
    display.value=`${a}`
}

let calculate=()=>{
    display.value=eval(display.value)
}

let