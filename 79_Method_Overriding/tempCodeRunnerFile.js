class Employee{
    login(){
        console.log(`Employee has logged in`)
    }

    logout(){
        console.log(`Employee has logged Out`)
    }

    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves} leaves`)
    }
}

class Programmer extends Employee{
    requestCoffee(x){
        console.log(`Employee has requested ${x} coffee`)
    }
}

let e= new Employee()
e.login()
e.leaves(3)