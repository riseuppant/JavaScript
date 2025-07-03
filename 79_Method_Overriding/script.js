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
    //Method Overriding
    requestLeaves(leaves){
        //console.log(`Employee has requested ${leaves+1} leaves (One Extra Bonus)`)
        super.requestLeaves(4)
        console.log(`One extra is Granted`)


    }
    requestCoffee(x){
        console.log(`Employee has requested ${x} coffee`)
    }
}

// let e= new Employee()
// e.login()
// e.requestLeaves(3)

let e= new Programmer()
e.login()
e.requestLeaves(3)