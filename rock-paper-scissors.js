//Function to pick random number, uses number to link to R P or S
function computerPlay () { //generates random number between 1-3
    var result = Math.floor((Math.random() * 3) + 1);
    var computerPick;

    switch(result) { //swtich statement returns computers pick from random number generated.
        case 1:
        return computerPick = "Rock";
        case 2:
        return computerPick = "Paper";
        case 3:
        return computerPick = "Scissors";
    }
    return computerPick;
}


function rockPaperScissors (playerSelection, computerSelection) {
    playerSelection = prompt("Rock, Paper or Scissors?"); //Prompts for Player input
    computerSelection = computerPlay(); //runs computerPlay function and returns computers random choice

    playerSelectionClean = playerSelection.toLowerCase().slice(0,1); //Lowercase and slices first character
    computerSelectionClean = computerSelection.toLowerCase().slice(0,1); //Lowercase and slices first character

    WinnerWinnerChickenDinner = ""; //Winner of this round variable 
    console.log(playerSelection + "*********" + computerSelection); //output of choices (debugging)

    if (playerSelectionClean == computerSelectionClean) { //checks for a draw scenario
        return WinnerWinnerChickenDinner = "Draw! You both picked " + playerSelection + " Play again";
    }

    // checks each Player win scenario if all fail then default computer win scenario
    if (playerSelectionClean == "r" && computerSelectionClean == "s") {
        WinnerWinnerChickenDinner = "You Win! " + playerSelection + " beats " + computerSelection;
    } else if (playerSelectionClean == "s" && computerSelectionClean == "p") {
        WinnerWinnerChickenDinner = "You win! " + playerSelection + " beats " + computerSelection;
    } else if (playerSelectionClean == "p" && computerSelectionClean == "r") {
        WinnerWinnerChickenDinner = "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        WinnerWinnerChickenDinner = "Computer Wins! " + computerSelection + " beats " + playerSelection;
    }
    
    return WinnerWinnerChickenDinner; //returns outcome of round
}