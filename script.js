let computerChoice;
let humanChoice;
let roundWinner;
let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const choicesDiv = document.querySelector("#choices");
const containerDiv = document.querySelector("#container");
const resultsDiv = document.querySelector("#results");
const humanScoreSpan = document.querySelector("#humanscore");
const computerScoreSpan = document.querySelector("#compscore");

humanScoreSpan.textContent = humanScore;
computerScoreSpan.textContent = computerScore;

choicesDiv.addEventListener("click", (event) => {
    humanChoice = event.target.id;
    playRound(humanChoice); 
});

function getComputerChoice() {
    randNum = Math.random();

    if (randNum <= 0.3333) {
        return "rock";
    } else if (randNum <= 0.6667) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice) {
    computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        winner = "tie";
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
    score(winner);
}

function score(winner) {
    let scorePara = document.createElement("p");


    if (winner === "human") {
        scorePara.textContent = "you win! " + humanChoice + " beats " + computerChoice;
        //console.log("you win! " + humanChoice + " beats " + computerChoice);            
        humanScore ++;
        humanScoreSpan.textContent = humanScore;
    } else if (winner === "computer") {
        scorePara.textContent = "you lose! " + computerChoice + " beats " + humanChoice;
        //console.log("you lose! " + computerChoice + " beats " + humanChoice);
        computerScore ++;
        computerScoreSpan.textContent = computerScore;
    } else if (winner === "tie") {
        scorePara.textContent = "it's a tie!";
        //console.log("it's a tie!");
    }

    resultsDiv.appendChild(scorePara);
    if (computerScore >= 5) {
        let totalScorePara = document.createElement("p");
        totalScorePara.textContent = "computer wins!";
        resultsDiv.appendChild(totalScorePara);
    } else if (humanScore >= 5) {
        let totalScorePara = document.createElement("p");
        totalScorePara.textContent = "human wins!";
        resultsDiv.appendChild(totalScorePara);
    }
}