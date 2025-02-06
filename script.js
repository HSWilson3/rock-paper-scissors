// Declare a variable computerChoice
let computerChoice;
// Declare a variable humanChoice
let humanChoice;


// Declare a function to getComputerChoice
function getComputerChoice() {
    // Get a random number between 0 and 1
    randNum = Math.random();
    
    // If number is less than 0.3333, set computerChoice equal to "rock"
    if (randNum <= 0.3333) {
        return "rock";
    // If number is greater than 0.3333 but less than 0.6667, set computerChoice to "paper"
    } else if (randNum <= 0.6667) {
        return "paper";
    // If number is greater than 0.6667, set computerChoice to "scissors"
    } else {
        return "scissors";
    }
}

// Declare a function to getHumanChoice
function getHumanChoice() {
    // Prompt user for input
    let input = prompt("Rock, paper, or scissors?");
    console.log(input);
    // Convert text to lowercase
    input = input.toLowerCase();
    
    // Check if input is one of rock, paper, or scissors
    if (input === "rock" || input === "paper" || input === "scissors") {
        // If so, return input
        return input;
    } else {
        // If not, prompt again
        getHumanChoice();
    }
}
   


function playGame(rounds) {
    
    // Declare a variable humanScore, set to 0
    let humanScore = 0;
    // Declare a variable computerScore, set to 0
    let computerScore = 0;

    // Declare new function playRound, with parameters humanChoice and computerChoice
    function playRound(humanChoice, computerChoice) {
        // If humanChoice is the same as computerChoice 
        let winner;
        if (humanChoice === computerChoice) {
            // Tie, score doesn't change, play again
            return;
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            // If humanChoice is rock and compChoice is paper
            // Computer wins
            winner = "computer";
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            // If humanChoice is rock and compChoice is scissors
            // Human wins
            winner = "human";
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            // If humanChoice is paper and compChoice is rock
            // Human wins
            winner = "human";
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            // If humanChoice is paper and compchoice is scissors
            // Computer wins
            winner = "computer";
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            // If humanChoice is scissors and compchoice is rock
            // Computer wins
            winner = "computer";
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            // If humanChoice is scissors and compchoice is paper
            // Human wins
            winner = "human";
        }

        return winner;
        
    }

    for (let i = 0; i < rounds; i ++) {
        console.log(i);
        // Call function to getHumanChoice and store in variable humanChoice
        humanChoice = getHumanChoice();
        // Call function to getComputerChoice
        computerChoice = getComputerChoice();
        
        let winner = playRound(humanChoice, computerChoice);
        
        if (winner === "human") {
            // If human is winner, print "you win! x beats y"
            console.log("you win! " + humanChoice + " beats " + computerChoice);
            // Increment humanScore
            humanScore ++;
        } else if (winner === "computer") {
            // If computer is winner, print "you lose! x beats y"
            console.log("you lose! " + computerChoice + " beats " + humanChoice);
            // Increment computerScore
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