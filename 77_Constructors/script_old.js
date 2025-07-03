//Constructor invoke hota h jab koi class m object hota h

class RailwayForm {
    constructor(givenname,trainno,address){
        console.log("Construtor Called "+ trainno + givenname+ address)
        this.name = givenname;
        this.trainno=[trainno];
        this.address=address;
    }
    preview(){
        console.log(this.name + " : Your form is for train number: " + this.trainno+ " of traveller name: "+ this.name + "residing at "+ this.address)
    }
    submit(){
        alert(this.name + ": Your form is submitted for train number: " + this.trainno + "for user at address " +this.address)
    }
    cancel(){
        alert(this.name + ": The form is cancelled for train number: " + this.trainno)
        this.trainno=0;//cancel karo to train number 0 hojaye
    }
}

let harryForm = new RailwayForm ("harry" ,[13214,245214,123513],"Wgl")
console.log(harryForm.address)
harryForm.preview()