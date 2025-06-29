//Excercise 1
const guessNumber=(random,guess)=>{
    if(guess==random){
        alert("Spot On!!")
        return 0
    }
    if(guess>random){
        let guess2=prompt(`Your guess is higher than the number\nGuess an integer lesser than ${guess}`)
        guess2=Number.parseInt(guess2)
        return guessNumber(random,guess2)
        
    }
    if(guess<random){
        let guess3=prompt(`Your guess is Lower than the number\nGuess an integer higher than ${guess}`)
        guess3=Number.parseInt(guess3)
        return guessNumber(random,guess3)
    }
}
let min =1
let max= 100
let random=Math.floor(Math.random()*(max-min))+1 //returns an integer
let guess =prompt(`Guess an integer between ${min} and ${max}`)
guess=Number.parseInt(guess)
//Between 1 and 100 make it like random()*(max-min))+1
guessNumber(random,guess)