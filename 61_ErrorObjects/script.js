// try {
//     harry
// } catch (error) {
//     console.log(error)
//     console.log(error.message)
//     console.log(error.name)
//     console.log(error.stack)
// }

try{
    let age=prompt("Enter your age")
    age=Number.parseInt(age)
    if(age>150){
        throw new Error("This is not possible")
    }
} catch(error){
    console.log(error.message)
    console.log(error.name)
    console.log(error.stack)
}