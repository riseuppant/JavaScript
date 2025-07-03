//Constructor invoke hota h jab koi class m object hota h

class RailwayForm {
    constructor(givenname,trainno){
        console.log("Construtor Called "+ trainno + givenname)
        this.name = givenname;
        this.trainno=trainno;
    }
    submit(){
        alert(this.name + ": Your form is submitted for train number: " + this.trainno)
    }
    cancel(){
        alert(this.name + ": The form is cancelled for train number: " + this.trainno)
    }
}

let harryform= new RailwayForm("harry",12345)

let RohanForm1= new RailwayForm("harry",12345)

harryform.submit()

harryform.cancel()