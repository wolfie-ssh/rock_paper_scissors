
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
    }
    else {alert("Invalid Input");}
    return input;
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Try Again");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        console.log(`You Win! ${humanChoice} Beats ${computerChoice}`);
        humanScore++;
        computerScore--;
    } else {
        console.log(`You Lose! ${computerChoice} Beats ${humanChoice}`);
        computerScore++;
        humanScore--;
    }
}

let HumanChoice1 = getHumanChoice();
let ComputerChoice1 = getComputerChoice();

playRound(HumanChoice1, ComputerChoice1);