function botPlays() {
  const randomPick = Math.random();
  
  if (randomPick < 0.34) {
    return 'rock';
  } else if (randomPick < 0.67) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function userPlays(userChoice) {
  const botChoice = botPlays();
  let result = '';

  if (userChoice === botChoice) {
    result = 'It\'s a tie';
  } else if (
    userChoice === 'rock' && botChoice === 'scissors' ||
    userChoice === 'paper' && botChoice === 'rock' ||
    userChoice === 'scissors' && botChoice === 'paper'
  ) {
    result = 'You win';
  } else {
    result = 'You lose';
  }

  document.getElementById('output').innerText = `You choose ${userChoice} and computer chooses ${botChoice}. ${result}`;
}