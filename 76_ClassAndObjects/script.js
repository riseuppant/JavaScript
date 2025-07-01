class railwayForm{
    //class methods
    submit(){
        alert("Form submitted");
    }
    cancel(){
        alert(this.name +": This form is cancelled")
    }
    fill(givenName)
    {
        this.name=givenName;
    }
}

let harry = new railwayForm()
harry.fill("harry")
let rohan = new railwayForm()
rohan.fill("harry")

harry.submit()
rohan.submit()
rohan.cancel()
