let promise= fetch("https://goweather.herokuapp.com/weather/NewDelhi")
promise.then((value)=>{
    console.log(value.status)
    console.log(value.ok)
    // console.log(value.json())
    return value.text()
}).then((value2)=>{
    console.log(value2)
})
