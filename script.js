/*

ComputerChoice: 
- Use Math.random function to generate random number 0.1 to 1.0
- Divide 1 into 3 parts and output different choice depeding on number
- 1/3 = Rock, 2/3 = Paper, Scissors in Else Block

HumanChoice:
- Use prompt function to take input and return the value
- Store it in a variable

Tracking Score: 
- Compare Values Generated By Computer and User
- Using If Statement Determine Winner and Increment Winners Score
*/

let ComputerChoice = getComputerChoice();
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

let HumanChoice = getHumanChoice();
function getHumanChoice() {
    let input = prompt("Enter Your Choice").toLowerCase();
    if (input == "rock" || input == "paper" || input == "scissors") {
        console.log("User Entered: ", input);
    }
    else {alert("Invalid Input");}
    return input;
}


function playGame() {
    let humanScore = 0, computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock" && computerChoice == "rock" || humanChoice == "paper" && computerChoice == "paper" || humanChoice == "scissors" && computerChoice == "scissors" ) 
        {
            console.log("Try Again");
        }
        else if (humanChoice == "rock" && computerChoice == "scissors") 
        {
            console.log("You Win! Rock Beats Scissors");
            humanScore++;
            computerScore--;
            console.log("Your Score is: ", humanScore);
            console.log("Computer Score is: ", computerScore);
        }
        else if (humanChoice == "scissors" && computerChoice == "rock")
        {
            console.log("You Lose! Rock Beats Scissors");
            humanScore--;
            computerScore++;
            console.log("Your Score is: ", humanScore);
            console.log("Computer Score is: ", computerScore);
        }
        else if (humanChoice == "scissors" && computerChoice == "paper" )
        {
            console.log("You Win! Scissors Beats Paper");
            humanScore++;
            computerScore--;
            console.log("Your Score is: ", humanScore);
            console.log("Computer Score is: ", computerScore);
        }
        else if (humanChoice == "paper" && computerChoice == "scissors") 
        {
            console.log("You Lose! Scissors Beats Paper");
            humanScore--;
            computerScore++;
            console.log("Your Score is: ", humanScore);
            console.log("Computer Score is: ", computerScore);
        }
        else if (humanChoice == "paper" && computerChoice == "rock" )
        {
            console.log("You Win! Paper Beats Rock");
            humanScore++;
            computerScore--;
            console.log("Your Score is: ", humanScore);
            console.log("Computer Score is: ", computerScore);
        }
        else if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("You Lose! Paper Beats Rock");
            humanScore--;
            computerScore++;
            console.log("Your Score is: ", humanScore);
            console.log("Computer Score is: ", computerScore);
        }
        return humanScore;
    }
    playRound(HumanChoice, ComputerChoice);

    let human1 = getHumanChoice();
    let computer1 = getComputerChoice();
    playRound(human1, computer1);

    let human2 = getHumanChoice();
    let computer2 = getComputerChoice();
    playRound(human2, computer2);

    let human3 = getHumanChoice();
    let computer3 = getComputerChoice();
    playRound(human3, computer3);

    let human4 = getHumanChoice();
    let computer4 = getComputerChoice();
    playRound(human4, computer4);
}

playGame();