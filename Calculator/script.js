let display= document.getElementById("display")
let sol=document.getElementById("solnReal")
let historyContainer=document.getElementById("historyContainer")


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
let setName=async(backDisp,historyBox)=>{
    if(display.value===backDisp){
        historyBox.innerHTML=display.value
    }
    else{
        historyBox.innerHTML=backDisp+"="+display.value
    }
}
let calculate=async()=>{
    let backDisp=display.value
    display.value=eval(display.value)
    
    let historyBox=document.createElement("button")
    
    await setName(backDisp , historyBox)
    
    historyBox.addEventListener('click',()=>{
        
        let pos=historyBox.textContent.indexOf('=')
        if(pos>0)
            display.value=(historyBox.innerHTML.slice(0,pos))
        else{
            display.value=historyBox.innerHTML
        }
    })
    historyContainer.appendChild(historyBox)
}

let clearHistory=()=>{
    while(historyContainer.firstChild){
        console.log(historyContainer.firstChild);
        historyContainer.removeChild(historyContainer.firstChild)
    }
}