const guesser=(rand,guess,current)=>{
    guess=prompt(`Make a guess`)
    guess=Number.parseInt(guess)
    if(guess>rand){
        alert("Your Number is less than "+ guess+ " \nGuess a number between 1 and "+guess)
        guesser(rand,guess,guess)
    }
    else if(guess<rand){
        alert("Your Number is greater than "+ guess+ " \nGuess a number between  "+guess+" and 100")
        guesser(rand,guess,guess)
    }
    else{
        alert("Congratulations!! You have guessed the number in "+(count+1)+" trials")
    }
}

let guess
let current=1
let rand= Math.floor(Math.random() * (101));
guesser(rand,guess,current);
