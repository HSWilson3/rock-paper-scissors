let computerChoice;
let humanChoice;


function getComputerChoice() {
    
    // computer chooses rock, paper, or scissors based on random number
    randNum = Math.random();

    if (randNum <= 0.3333) {
        return "rock";
    } else if (randNum <= 0.6667) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    
    let input = prompt("Rock, paper, or scissors?");
    input = input.toLowerCase();
    
    if (input === "rock" || input === "paper" || input === "scissors") {
        return input;
    } else {
        getHumanChoice();
    }
}
   
function playGame(rounds) {
    
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        
        let winner;
        
        if (humanChoice === computerChoice) {
            // Tie, score doesn't change, play again
            return;
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            winner = "computer";
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            winner = "human";
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            winner = "human";
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            winner = "computer";
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            winner = "computer";
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            winner = "human";
        }

        return winner;
    }

    for (let i = 0; i < rounds; i ++) {
        
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        
        let winner = playRound(humanChoice, computerChoice);
        
        if (winner === "human") {
            console.log("you win! " + humanChoice + " beats " + computerChoice);            
            humanScore ++;
        } else if (winner === "computer") {
            console.log("you lose! " + computerChoice + " beats " + humanChoice);
            computerScore ++;
        }
    }

    console.log("Humanscore = " + humanScore + " and computerscore = " + computerScore);

    if (computerScore > humanScore) {
        console.log("Computer wins!");
    } else if (humanScore > computerScore) {
        console.log("Human wins!");
    } else {
        console.log("It's a tie!");
    }
}

playGame(5);