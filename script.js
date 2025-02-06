// Declare a variable computerChoice
let computerChoice;
// Declare a variable humanChoice
let humanChoice;
// Declare a variable humanScore, set to 0
let humanScore = 0;
// Declare a variable computerScore, set to 0
let computerScore = 0;

// Declare a function to getComputerChoice
function getComputerChoice() {
    // Get a random number between 0 and 1
    randNum = Math.random();
    console.log(randNum);
    
    // If number is less than 0.3333, set computerChoice equal to "rock"
    if (randNum <= 0.3333) {
        computerChoice = "rock";
    // If number is greater than 0.3333 but less than 0.6667, set computerChoice to "paper"
    } else if (randNum <= 0.6667) {
        computerChoice = "paper";
    // If number is greater than 0.6667, set computerChoice to "scissors"
    } else {
        computerChoice = "scissors";
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
   
// Declare new function playRound, with parameters humanChoice and computerChoice



// Call function to getComputerChoice
getComputerChoice();
console.log(computerChoice);

// Call function to getHumanChoice and store in variable humanChoice
getHumanChoice();