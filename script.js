

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

// create function call getHumanChoice which prompts the user for a string input
// return a valid choice

function getHumanChoice(a) {
    a = prompt('Rock, Paper or Scissors?').toLowerCase();

    if (a === 'rock') {
        return 'Rock';
    } else if (a === 'paper') {
        return 'Paper';
    } else if (a === 'scissors') {
        return 'Scissors';
    }
        
}

let humanScore = 0;
let computerScore = 0;

// paper beats rock, scissors beats paper, rock beats scissors



function playRound(humanChoice, computerChoice) {

    const caseInsHumanChoice = humanChoice.toLowerCase();


    if (caseInsHumanChoice === 'rock' && computerChoice === 'paper') {
        console.log('You lose! Paper beats Rock');
        ++computerScore;
    } else if (caseInsHumanChoice === 'paper' && computerChoice === 'scissors') {
        console.log('You lose! Scissors beats Paper');
        ++computerScore;
    } else if (caseInsHumanChoice === 'scissors' && computerChoice === 'rock') {
        console.log('You lose! Rock beats Scissors');
        ++computerScore;
    } else if (caseInsHumanChoice === 'paper' && computerChoice === 'rock') {
        console.log('You win! Paper beats Rock');
        ++humanScore;
    } else if (caseInsHumanChoice === 'scissors' && computerChoice === 'paper') {
        console.log('You win! Scissors beats Paper');
        ++humanScore;
    } else if (caseInsHumanChoice === 'rock' && computerChoice === 'scissors') {
        console.log('You win! Rock beats Scissors');
        ++humanScore;
    }



}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

