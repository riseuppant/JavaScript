//Q1
// class complexNumber {
//     constructor(real,complex){
//         this.real=real;
//         this.complex=complex;
//     }
//     static addComplex(number1,number2)
//     {
//         console.log(number1,number2)

//         let realPart=(number1.real + number2.real)
//         let complexPart=(number1.complex + number2.complex)

//         return new complexNumber(realPart,complexPart)
//     }
// }
// let number1= new complexNumber(45,5)
// let number2=new complexNumber(5,6)
//Q2
// let sum=complexNumber.addComplex(number1,number2)

// console.log(`${sum.real} + ${sum.complex}*i`)

//Q3
// class Human {
//     constructor(name,favfood){
//         this.name=name;
//         this.favfood= favfood
//     }    
//     walk(){
//         console.log(this.name+" Human is walking")
//     }
// }

// class Student extends Human{
//     walk(){
//         //super.walk() this will add another method to that extending that 
//         console.log(this.name+" Student is walking")
//     }
// }

// let o=new Student ("Hardik","Bhindi")
// o.walk()

//Q4
// console.log(o instanceof Human)

//Q5
class complexNumber {
    constructor(real,complex){
        this.real=real;
        this.complex=complex;
    }
    get real(){
        return this._real
    }
    get complex(){
        return this._complex
    }
    set complex(newComplex){
        this._complex=newComplex;
    }
    set real(newReal){
        this._real=newReal;
    }

    static addComplex(number1,number2)
    {
        let realPart=(number1.real + number2.real)
        let complexPart=(number1.complex + number2.complex)

        return new complexNumber(realPart,complexPart)
    }
}


let number1=new complexNumber(2,4);
let number2=new complexNumber(4,5);

console.log(number1, number2)

number1.real=10;
number2.real=5;

number1.complex=16;
number2.complex=6;
console.log(number1, number2)

let sum=complexNumber.addComplex(number1,number2)

console.log(`${sum.real} + ${sum.complex}*i`)