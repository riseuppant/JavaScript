class complexNumber {
    constructor(real,complex){
        this.real=real;
        this.complex=complex;
    }
    static addComplex(number1,number2)
    {
        console.log(number1,number2)

        let realPart=(number1.real + number2.real)
        let complexPart=(number1.complex + number2.complex)

        return new complexNumber(realPart,complexPart)
    }
}
let number1= new complexNumber(45,5)
let number2=new complexNumber(5,6)
let sum=complexNumber.addComplex(number1,number2)

console.log(`${sum.real} + ${sum.complex}*i`)