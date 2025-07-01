let a = {
    name2: "harry",
    lang: "JS",
}
let p = {
    run : ()=>{
        console.log("run")
    }
}
let r={
    name: ()=>{
        console.log("jimmy")
    }
}
p.__proto__=r;
a.__proto__= p;
console.log(a.run())
console.log(a.name())