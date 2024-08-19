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

let botScores = 0;
let userScores = 0;

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
    userScores += 1;
  } else {
    result = 'You lose';
    botScores += 1;
  }

  document.getElementById('output').innerText = `You choose ${userChoice} and computer chooses ${botChoice}. ${result}`;
  document.getElementById('user-score').innerText = userScores;
  document.getElementById('bot-score').innerText = botScores;
}