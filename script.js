//this collects the user's name
window.onload = (event) =>{
    let userName = prompt('Enter Your Name')
    if (userName === null) {
        alert('Please enter Your name!')
        userName = prompt('Enter Your Name')
    } else if (!userName.trim()) {
        alert('Please enter Your name!')
        userName = prompt('Enter Your Name')
    }

    document.getElementById('yname').textContent = `${userName}`
}

//play game

const choices = ["rock", "paper", "scissors"]
const playerDisplay = document.getElementById('playerDisplay')
const computerDisplay = document.getElementById('computerDisplay')
const resultDisplay = document.getElementById('resultDisplay')

function playGame(playerChoice){

  const computerChoice = choices[Math.floor(Math.random() * 3)]
  let result = ''

  if (playerChoice === computerChoice){
    result = "IT'S A TIE"
  }
  else{
    switch(playerChoice){
      case 'rock' :
      result = (computerChoice === 'scissors') ? "you win": "you lose"
      break
      case 'paper' :
      result = (computerChoice === 'rock') ? "you win": "you lose"
      break
      case 'scissors' :
        result = (computerChoice === 'paper') ? "you win": "you lose"
      break
    }
  }

  playerDisplay.textContent = `Player ${playerChoice}`
  computerDisplay.textContent = `Computer ${computerChoice}`
  resultDisplay.textContent = result

  
}
// https://www.youtube.com/watch?v=3uKdQx-SZ5A&t=967s link for tutorial

//collect score

let calcScore = 