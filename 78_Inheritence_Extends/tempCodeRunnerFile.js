 class Animal {
    constructor(name, color) {
        this.name= name;
        this.color=color
    }

    run(){
        console.log(this.name + " is running!")
    }
    shout(){
        console.log(this.name + " is shouting")
    }
}

class Monkey {
    constructor(name, color) {
        this.name= name;
        this.color=color
    }

    run(){
        console.log(this.name + " is running!")
    }
    shout(){
        console.log(this.name + " is shouting")
    }
    eatBanana() {
        console.log(this.name + "is eating banana")
    }
}

let ani = new Animal ("Bruno", "black")
let m=new Monkey("chimpo","Orange")