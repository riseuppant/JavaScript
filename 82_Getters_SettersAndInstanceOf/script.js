//How to use getter and setter

class Animal{
    constructor(name){
        this._name=name
        // console.log(this.name)
    }
    fly(){
        console.log("I can fly")
    }
    get name(){
        return this._name
    }
    set name(newName){
        this._name=newName;
    }
}

class Rabbit extends Animal{
    eatCarror(){
        console.log("Eating Carrot")
    }
}

let a= new Animal("bruno")
a.fly()
a.name="jack"
console.log(a.name)
let d=56
let c=new Rabbit ("jimmy")
console.log(a instanceof Animal)
console.log(c instanceof Animal)
console.log(d instanceof Animal)