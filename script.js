/*

ComputerChoice: 
- Use Math.random function to generate random number 0.1 to 1.0
- Divide 1 into 3 parts and output different choice depeding on number
- 1/3 = Rock, 2/3 = Paper, Scissors in Else Block

HumanChoice:
- Use prompt function to take input and return the value
- Store it in a variable
*/
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
    console.log("Computer Entered: ", Choice);
    return Choice;
}

function getHumanChoice() {
    let input = prompt("Enter Your Choice");
    if (input == "Rock" || input == "Paper" || input == "Scissors") {
        console.log("User Entered: ", input);
    }
    else {alert("Invalid Input");}
    return input;
}

let HumanChoice = getHumanChoice();
getComputerChoice();
let humanScore = 0, computerScore = 0;