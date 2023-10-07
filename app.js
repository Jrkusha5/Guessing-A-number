'use strict';

// guessing game
// dom selection

const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');
const randomNumber = Math.floor(Math.random() * 30) + 1;
const body = document.querySelector('body');
let number = document.querySelector('.number');
let score = 30;
let showScore = document.querySelector('.score');
let highScore = 0;

// a message function for displaying message multiple times with different arguments...
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// click event on check button for implementing all functionalities.....
checkBtn.addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  // check if the number is not a number or
  // the number is smaller then 0 (that's mean negative value)
  if (!guess || guess < 0 ) {
    displayMessage('Not a valid number...!');
  } else if (!guess || guess > 30 ) {
    displayMessage('Not a valid number...!');
  } else if (!guess === 0 < guess < 30 ) {
    body.style.background = 'red';
  }
   else if (guess === randomNumber) {
    displayMessage('Correct Number...!');
    number.textContent = randomNumber;
    body.style.background = 'green';

    // check if the score is greater that highscore then replace the score in the highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // check the guess number is different random number that's mean guess number greater or smaller than random number
  else if (guess !== randomNumber) {
    if (score > 1) {
      displayMessage(guess > randomNumber ? 'Too High...!' : 'Too Low...!');
      score--;
      showScore.textContent = score;
      body.style.background = 'red';
    } 
    else {
      displayMessage('You have lost the game...!');
      showScore.textContent = 0;
    }
  }
});

// event handling for reset all functionalities and can start game again

againBtn.addEventListener('click', function () {
  randomNumber;
  body.style.background = '#222';
  displayMessage('Start Guessing.....!');
  score = 30;
  showScore.textContent = score;
  document.querySelector('.guess').value = '';
  number.textContent = '?';
});