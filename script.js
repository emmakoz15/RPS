//this collects the user's name
window.onload = (event) => {
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



//game score
let playerScore = 0
let computerScore = 0

//play game

const choices = ["rock", "paper", "scissors"]
const playerDisplay = document.getElementById('playerDisplay')
const computerDisplay = document.getElementById('computerDisplay')
const resultDisplay = document.getElementById('resultDisplay')

function playGame(playerChoice) {

  const computerChoice = choices[Math.floor(Math.random() * 3)]
  let result = ''

  if (playerChoice === computerChoice) {
    result = "IT'S A TIE"
  } else {
    switch (playerChoice) {
      case 'rock':
        result = (computerChoice === 'scissors') ? "YOU WIN" : "YOU LOSE"
        break
      case 'paper':
        result = (computerChoice === 'rock') ? "YOU WIN" : "YOU LOSE"
        break
      case 'scissors':
        result = (computerChoice === 'paper') ? "YOU WIN" : "YOU LOSE"
        break
    }
  }

  //score collector

  if (result === "YOU WIN") {
    playerScore++ //you win your score goes up 1
  } else if (result === "YOU LOSE") {
    computerScore++ //comp wins it goes up 1
  } else {

  }
  // nothing gets added

  if (playerScore + computerScore === 5) {
    document.getElementById("rock").classList.add("display")
    document.getElementById("paper").classList.add("display")
    document.getElementById("Scissor").classList.add("display")
  } else { }


  if (playerScore > 3) {
    document.getElementById("winorlose").textContent = "YOU WIN"
  } else if (computerScore > 3) {
    document.getElementById("winorlose").textContent = "YOU LOSE"
  } else {

  }



  playerDisplay.textContent = `Player ${playerChoice}`
  computerDisplay.textContent = `Computer ${computerChoice}`
  resultDisplay.textContent = result

  document.getElementById('change').textContent = `${playerScore} vs. ${computerScore}`


}
// https://www.youtube.com/watch?v=3uKdQx-SZ5A&t=967s link for tutorial

//collect score

