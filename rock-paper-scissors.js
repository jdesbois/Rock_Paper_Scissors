function computerPlay () {
    var result = Math.floor((Math.random() * 3) + 1);
    var computerPick;

    switch(result) {
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
    playerSelection = prompt("Rock, Paper or Scissors?");
    computerSelection = computerPlay();

    playerSelectionSplit = playerSelection.split("");
    computerSelectionSplit = computerSelection.split("");

    
    
}