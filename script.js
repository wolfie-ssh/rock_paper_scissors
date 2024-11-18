
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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tis A Tie");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        console.log(`You Win! ${humanChoice} Beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You Lose! ${computerChoice} Beats ${humanChoice}`);
        computerScore++;
    }
}

/*
//Logic to Play Five Games
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
*/
function printScore() {
    console.log("Your Score is: ", humanScore + "\nComputer Score: ", computerScore);
}

playGame();
printScore();