

// create function name getComputerChoice 
// write code the randomly creates on of the following strings rock paper or scissors (math.random)

// if the random number generated using math random is between 0 - .33 print rock if .34 - .66 print paper
// if .67 - 1 print scissors


let humanScore = 0;
let computerScore = 0;

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

// function getHumanChoice() {
//     prompt('Rock, Paper or Scissors?').toLowerCase()

// } 








// run play game function five times
// declare a winner after play game has run five times




    function playRound(humanChoice, computerChoice) {

    
    
        if (humanChoice === 'rock' && computerChoice === 'paper') {
            secondDiv.textContent = 'You lose! Paper beats Rock';
            fourthDiv.textContent = ++computerScore;
        } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            secondDiv.textContent = 'You lose! Scissors beats Paper';
            fourthDiv.textContent = ++computerScore;
        } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            secondDiv.textContent = 'You lose! Rock beats Scissors'
            fourthDiv.textContent = ++computerScore;
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            secondDiv.textContent = 'You win! Paper beats Rock'
            thirdDiv.textContent = ++humanScore;
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            secondDiv.textContent = 'You win! Scissors beats Paper'
            thirdDiv.textContent = ++humanScore;
        } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            secondDiv.textContent = 'You win! Rock beats Scissors'
            thirdDiv.textContent = ++humanScore;
        } else {
            secondDiv.textContent = 'It\'s a tie!';
        }
    
        if (humanScore === 5) {
            finishGameDiv.textContent = 'You won the game!';
            secondDiv.textContent = '';
        } else if (computerScore === 5){
            finishGameDiv.textContent = 'You lost the game!';
            secondDiv.textContent = '';

        }
    
    }







    // function loopGame() {

    //     for (let i = 0; i < 5; i++) {
    //         const humanChoice = prompt('Rock, Paper or Scissors?').toLowerCase()
    //         const computerChoice = getComputerChoice()
    //         playRound(humanChoice, computerChoice)
    //     }

    //     if (humanScore > computerScore) {
    //         console.log('You beat the computer! Great job!');
    //     } else if (humanScore < computerScore) {
    //         console.log('Oh no! The computer won!');
    //     } else {
    //         console.log('Wow! You tied with the computer!');
    //     }
    // }




    const div = document.createElement('div');

    const rockButton = document.createElement('button');
    div.appendChild(rockButton);
    const paperButton = document.createElement('button');
    div.appendChild(paperButton);
    const scissorsButton = document.createElement('button');
    div.appendChild(scissorsButton);

    const body = document.querySelector('body');
    body.appendChild(div);

    const secondDiv = document.createElement('div');
    body.appendChild(secondDiv);



    const thirdDiv = document.createElement('div');
    const fourthDiv = document.createElement('div');

    body.appendChild(thirdDiv);
    body.appendChild(fourthDiv);

    // thirdDiv.textContent = humanScore;



    rockButton.setAttribute('id', 'rock');
    paperButton.setAttribute('id', 'paper');
    scissorsButton.setAttribute('id', 'button');

    rockButton.textContent = 'Rock';
    paperButton.textContent = 'Paper';
    scissorsButton.textContent = 'scissors'; 






        rockButton.addEventListener('click', () => {
            playRound('rock', getComputerChoice());
        });
        
        paperButton.addEventListener('click', () => {
            playRound('paper', getComputerChoice());
        });
    
        scissorsButton.addEventListener('click', () => {
            playRound('scissors', getComputerChoice());
        });


   



        const finishGameDiv = document.createElement('div');
        body.appendChild(finishGameDiv);


       


        
        




    

    
    // switch statement
    // body.addEventListener('click', (event) => {
    //     let target = event.target;

    //     switch
    // })



    // loopGame();



 





