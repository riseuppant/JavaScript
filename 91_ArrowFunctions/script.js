const sayHello = (name)=>{
    console.log("Hello "+ name)
}
const sayHello1 =name=>console.log("Hello "+ name)
const sayHello2 =(name,greetings)=>console.log("Hello "+greetings+" "+ name)

sayHello("harry")

const x={
    name : "Harry",
    role: "JS Developer",
    exp: 30,
    show : function(){
        setTimeout(function(){
            console.log(this)
            console.log(`The name is ${this.name}\nThe role is ${this.role}`)
        },2000
    )
    }
}

console.log((x.name),x.exp )
console.log(x.show())