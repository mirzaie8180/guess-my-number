'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highscore = 0
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)

  //when not input a number
  if (!guess) {
    displayMessage('⛔ no number!')
  }
  //when player wins
  else if (guess === secretNumber) {
    displayMessage('🎉 correct number!') 
    document.querySelector('.highscore').textContent = highscore
    if (score > highscore) {
      highscore = score
      document.querySelector('.highscore').textContent = highscore
    }
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'
    document.querySelector('.number').textContent = secretNumber
  }

  //when number is wrong! (different)
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 too high!' : '📉 too low!') 
      score--
      document.querySelector('.score').textContent = score
    } else {
      displayMessage('💥 you lost the game!') = 
      document.querySelector('.score').textContent = 0
    }
  }
})

//again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20
  secretNumber = Math.trunc(Math.random() * 20) + 1
  document.querySelector('.score').textContent = score
  displayMessage('Start guessing...')  
  document.querySelector('.guess').value = ''
  document.querySelector('.number').textContent = '?'
  document.querySelector('body').style.backgroundColor = '#222'
}) 