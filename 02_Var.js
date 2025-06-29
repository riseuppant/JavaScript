console.log("JavaScript tutorial 3 : var,let,const")
var a=45;
var b="James"
let k="H"
//let k="H" cannot use this
//const author =5;author =20 cannot be updated nor redeclared 

//Cannot use const harry; and declare it later on like in c 
/*which is not possible in JS*/

var vertex;
var c=67;
var d=null;
let e="Jaipur"
{
    var b="cameron"
    console.log(b)
}
{
    let e="Chaos"
    console.log(e)//BlockScoped
}
console.log(e)
console.log(b)
//vertex=576 now would give undefined
console.log(vertex);//works with variable