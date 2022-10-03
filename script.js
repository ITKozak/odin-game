function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            return "Impossible.";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (computerSelection == playerSelection) {
        return ["Draw! You pick the same!", 0];
    } else if (playerSelection == 'rock' && computerSelection == 'paper'){
        return ["You pick " + playerSelection + " and loose against " + computerSelection, -1];
    } else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        return ["You pick " + playerSelection + " and loose against " + computerSelection, -1];
    } else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        return ["You pick " + playerSelection + " and loose against " + computerSelection, -1];
    } else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        return ["You pick " + playerSelection + " and win against " + computerSelection, 1];
    } else if (playerSelection == 'paper' && computerSelection == 'rock'){
        return ["You pick " + playerSelection + " and win against " + computerSelection, 1];
    } else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        return ["You pick " + playerSelection + " and win against " + computerSelection, 1];
    }
}

function game(){
    let round = 0;
    let computerScore = 0;
    let playerScore = computerScore;
    do {
        let playerSelection = window.prompt("Take your pick - rock, paper or scissors: ", "rock");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        let curentRound = playRound(playerSelection, computerSelection);
        switch (curentRound[1]){
            case -1:
                console.log(curentRound[0]);
                computerScore++;
                break;
            case 1:
                console.log(curentRound[0]);
                playerScore++;
                break;
            case 0:
                console.log(curentRound[0]);
                break;
        }
        round++;
    } while (round < 5)
    console.log("Final score is: You - " + playerScore + " vs " + computerScore + " - Computer");
}

game();