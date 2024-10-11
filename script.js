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
    console.log(Choice);
}

getComputerChoice();