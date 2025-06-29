function loadScript(url,callback){
    let script = document.createElement("script")
    script.src=url;
    callback(url);
    script.onload=function (){
        console.log("Loaded script with SRC: "+ url)
        callback(null,url)
    }
    
    document.body.appendChild(script);
}
function hello(error,url){
    if(error){
        console.log("This is an error")
        sendEmergencyMessagetoCeo();
        return;
    }
    console.log("Hello World!!" + url)
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js",hello)//if function is not used and arrow notation is used then it would give error stating that it is not initiazlied


loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js",function(){
    
} )