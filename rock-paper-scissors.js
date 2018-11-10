var listItem = document.getElementsByTagName('li');
var playerScore = 0;
var computerScore = 0;
var playerScoreElement = document.getElementById("playerScore");
var computerScoreElement = document.getElementById("computerScore");
computerScoreElement.innerHTML = computerScore;
playerScoreElement.innerHTML = playerScore;

for (var i=0; i < listItem.length; i++) {
    listItem[i].addEventListener("click", rockPaperScissors, false);
}
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
    
    var resultOutput = document.getElementById("result");
    playerSelection = this.innerHTML;
    computerSelection = computerPlay(); //runs computerPlay function and returns computers random choice

    playerSelectionClean = playerSelection.toLowerCase().slice(0,1); //Lowercase and slices first character
    computerSelectionClean = computerSelection.toLowerCase().slice(0,1); //Lowercase and slices first character
    console.log(playerSelection + computerSelection);
    WinnerWinnerChickenDinner = ""; //Winner of this round variable 
    // console.log(playerSelection + "*********" + computerSelection); //output of choices (debugging)

    

    // checks each Player win scenario if all fail then default computer win scenario
    if (playerSelectionClean == computerSelectionClean) { //checks for a draw scenario
        WinnerWinnerChickenDinner = "Draw! You both picked " + playerSelection + ", Play again?";
        playerScore += 1;
        playerScoreElement.innerHTML = playerScore;
        computerScore += 1;
        computerScoreElement.innerHTML = computerScore;
    } else if (playerSelectionClean == "r" && computerSelectionClean == "s") {
        WinnerWinnerChickenDinner = "You win! " + playerSelection + " beats " + computerSelection;
        playerScore += 1;
        playerScoreElement.innerHTML = playerScore;
    } else if (playerSelectionClean == "s" && computerSelectionClean == "p") {
        WinnerWinnerChickenDinner = "You win! " + playerSelection + " beats " + computerSelection;
        playerScore += 1;
        playerScoreElement.innerHTML = playerScore;
    } else if (playerSelectionClean == "p" && computerSelectionClean == "r") {
        WinnerWinnerChickenDinner = "You win! " + playerSelection + " beats " + computerSelection;
        playerScore += 1;
        playerScoreElement.innerHTML = playerScore;
    } else {
        WinnerWinnerChickenDinner = "Computer wins! " + computerSelection + " beats " + playerSelection;
        computerScore += 1;
        computerScoreElement.innerHTML = computerScore;
    }
    
    
    resultOutput.innerHTML = WinnerWinnerChickenDinner; //outputs result to the page.
    playerSelection = "";
    computerSelection = "";
    // console.log(WinnerWinnerChickenDinner); //returns outcome of round to console

}



