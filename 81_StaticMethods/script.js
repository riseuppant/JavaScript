class Animal{
    constructor(name){
        this.name = Animal.capitalize(name);
    }
    walk(){
        console.log("Animal "+ Animal.capitalize(this.name) + " is walking")
    }
    static capitalize(name){
        return name.charAt(0).toUpperCase()+name.slice(1)
    }
}

j=new Animal ("jackal")
j.walk();
c= new Animal ("cat")




