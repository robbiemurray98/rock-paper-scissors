

// create function name getComputerChoice 
// write code the randomly creates on of the following strings rock paper or scissors (math.random)

// if the random number generated using math random is between 0 - .33 print rock if .34 - .66 print paper
// if .67 - 1 print scissors



function getComputerChoice() {
    let a = Math.random();

    if (a <= .33) {
        return 'rock';
    } else if (a >= .34 && a <= .66) {
        return 'paper';
    } else {
        return 'scissors';
    }

}

// create function call getHumanChoice which prompts the user for a string input. Then returns 