let human = 0;
let computer = 0;

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

let result = document.querySelector('#result');
let humanScore = document.querySelector('#humanScore');
let computerScore = document.querySelector('#computerScore');
let announcement = document.querySelector('#announcement');

humanScore.textContent = `You: ${human}`;
computerScore.textContent = `Computer: ${computer}`;

function waitForButtonPress() {
    return new Promise((resolve) => {
        rockButton.addEventListener('click', () => resolve('rock'));
        paperButton.addEventListener('click', () => resolve('paper'));
        scissorsButton.addEventListener('click', () => resolve('scissors'));
    });
}

function updateScores() {
    humanScore.textContent = `You: ${human}`;
    computerScore.textContent = `Computer: ${computer}`;
}

function getComputerChoice() {
    const variants = ['rock', 'paper', 'scissors'];
    return variants[Math.floor(Math.random() * variants.length)];
}

async function main() {
    while (true) {
        const humanChoice = await waitForButtonPress();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);

        if (human === 5 || computer === 5) {
            announcement.textContent = human > computer ? 'You win!' : 'You lose!';
            brake;
        }
    }
}

main();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        human = human + 1;
        updateScores();
        return `It\'s a tie! You both picked ${playerSelection}.`;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        human = human + 1;
        updateScores();
        return 'You win! Rock beats scissors';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        human = human + 1;
        updateScores();
        return 'You win! Scissors beats paper.';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        human = human + 1;
        updateScores();
        return 'You win! Paper beats rock.';
    } else {
        computer = computer + 1;
        updateScores();
        return 'You\'ve lost';
    }
}