
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let RandomNumber = Math.random();
    let Choice;
    if (RandomNumber < (1 / 3))
    {
        Choice="Rock"; // 0 to ~0.33
    }
    else if (RandomNumber < (2 / 3)){
        Choice = "Paper"; // ~0.33 to ~0.67
    }
    else {
        Choice = "Scissors"; // ~0.67 to 1
    }
    Choice = Choice.toLowerCase();
    console.log("Computer Entered: ", Choice);
    return Choice;
}

function playRound(humanChoice, computerChoice) {
    let roundResult = '';

    if (humanChoice === computerChoice) {
        roundResult = "Tis A Tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        roundResult = `You Win! ${humanChoice} Beats ${computerChoice}`;
        humanScore++;
    } else {
        roundResult = `You Lose! ${computerChoice} Beats ${humanChoice}`;
        computerScore++;
    }
    updateResults(roundResult);
    checkWinner();
}

const btn_rock = document.querySelector("#btn_rock");
btn_rock.addEventListener("click", function() {
    const humanChoice = "rock";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
} );

const btn_paper = document.querySelector("#btn_paper");
btn_paper.addEventListener("click", function() {
    const humanChoice = "paper";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});

const btn_scissors = document.querySelector("#btn_scissors");
btn_scissors.addEventListener("click", function() {
    const humanChoice = "scissors";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});

const container = document.querySelector("#container");
const resultsDiv = document.createElement("div");
resultsDiv.setAttribute("id", "results");
container.appendChild(resultsDiv);

function updateResults (roundResult) {
    resultsDiv.innerHTML = `
    <p>${roundResult}</p>  <!-- Round outcome message -->
    <p>Your Score: ${humanScore}</p>  <!-- Player score -->
    <p>Computer Score: ${computerScore}</p>  <!-- Computer score -->
    `
}

function checkWinner() {
    if (humanScore === 5) {
        resultsDiv.innerHTML += "<p>You win the game! Congratulations!</p>";
        disableButtons(); // Disable buttons when game is over
    } else if (computerScore === 5) {
        resultsDiv.innerHTML += "<p>The computer wins the game. Better luck next time!</p>";
        disableButtons(); // Disable buttons when game is over
    }
}

function disableButtons() {
    document.querySelector("#btn_rock").disabled = true;
    document.querySelector("#btn_paper").disabled = true;
    document.querySelector("#btn_scissors").disabled = true;
}

/* 
printScore();
function printScore() {
    console.log("Your Score is: ", humanScore + "\nComputer Score: ", computerScore);
}

playGame();
// Logic to Play Five Games
function playGame() {

    let humanChoice1 = getHumanChoice();
    let computerChoice1 = getComputerChoice();
    playRound(humanChoice1, computerChoice1);    

    let humanChoice2 = getHumanChoice();
    let computerChoice2 = getComputerChoice();
    playRound(humanChoice2, computerChoice2);

    let humanChoice3 = getHumanChoice();
    let computerChoice3 = getComputerChoice();
    playRound(humanChoice3, computerChoice3);

    let humanChoice4 = getHumanChoice();
    let computerChoice4 = getComputerChoice();
    playRound(humanChoice4, computerChoice4);

    let humanChoice5 = getHumanChoice();
    let computerChoice5 = getComputerChoice();
    playRound(humanChoice5, computerChoice5);
}

function getHumanChoice() {
    let input = prompt("Enter Your Choice").toLowerCase();
    if (input == "rock" || input == "paper" || input == "scissors") {
        console.log("User Entered: ", input);
        return input;
    }
    else {
        alert("Invalid Input");
        return getHumanChoice();
    }
    return input;
}
*/