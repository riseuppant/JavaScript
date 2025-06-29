//Understand the difference between synchronous and asynchronous functions..Async ones run on their own ie., jab hona hoga tab hojayega whereas sync run one by one 

//Call Backs

function loadScript(url,callback){
    let script = document.createElement("script")
    script.src=url;
    callback(url);
    script.onload=function (){
        console.log("Loaded script with SRC: "+ url)
        callback(null,url)
    }
    script.onerror=function (){
        console.log("Error loading script with SRC: ",url)
        callback(new Error("Src got some error"))
    }
    document.body.appendChild(script);
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js",hello)//if function is not used and arrow notation is used then it would give error stating that it is not initiazlied 
function hello(error,url){
    if(error){
        console.log("This is an error")
        return;
    }
    console.log("Hello World!!" + url)
}