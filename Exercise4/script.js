
setInterval(function(){
    let a = new Date()
    let h = a.getHours()
    let m = a.getMinutes()
    let s = a.getSeconds()
    let d = a.getDate()
    hour.textContent=`${h}`
    min.textContent=`${m}`
    sec.textContent=`${s}`
    date.textContent=`${d}`
}
)