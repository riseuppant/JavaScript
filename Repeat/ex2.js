let arr=["R","P" ,"S"]
let run_again=true;
let player_score=0
let comp_score=0
let draw_score=0
const scoreboard=()=>{
    alert(`Scores: Player:${player_score} | Computer: ${comp_score} | Draw: ${draw_score}`)
}
while(run_again){
    let player_move=prompt("Enter R(Rock) P(Paper) S(Scissors)")
    let comp_move=arr[Math.floor(Math.random()*3)]
    if(comp_move==player_move){
        alert("Draw")
        draw_score++
        scoreboard()
    }
    else if(comp_move=="R"){
        if(player_move=="S"){
            alert("Computer Wins")
            comp_score++
            scoreboard()
        }
        else {
            alert("Player Wins")
            player_score++
            scoreboard()
        }
    }
    else if(comp_move=="S"){
        if(player_move=="P"){
            alert("Computer Wins")
            comp_score++
            scoreboard()
        }
        else {
            alert("Player Wins")
            player_score++
            scoreboard()
        }
    }
    else if(comp_move=="P"){
        if(player_move=="R"){
            alert("Computer Wins")
            comp_score++
            scoreboard()
        }
        else {
            alert("Player Wins")
            player_score++
            scoreboard()
    }
}
else{
    console.error("FOLLOW THE RULES.")
    alert("FOLLOW THE RULES.")
}
run_again=confirm("Wanna Play again?")
}
