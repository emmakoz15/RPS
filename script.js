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

let playerSelect = userChoice

userChoice = 'Rock'
if userChoice = playerSelect




//let userChoiceRock = document.getElementById('rbtn')

/* const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput == "rock" ||
      userInput === "paper" ||
      userInput === "scissors" ||
    ) {
      return userInput;


const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3); //whyyyyyyy
    switch (randomNumber) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  }

 */