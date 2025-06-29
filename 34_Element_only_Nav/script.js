const changeBodyRed= ()=>{
    document.body.firstElementChild.style.backgroundColor="red"
}

let b=document.body
console.log("First Child of b is: ",b.firstChild)
console.log("First Element child of b is: ",b.firstElementChild)

changeBodyRed()