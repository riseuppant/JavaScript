let a=document.getElementsByTagName('div')[0]
// a.innerHTML=a.innerHTML+ `<h1>Hellooo world!!</h1>`   

let div=document.createElement('div');
div.innerHTML="Hello World!!"
a.appendChild(div)
a.prepend(div)
a.before(div)
a.replaceWith(div)