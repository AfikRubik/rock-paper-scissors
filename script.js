const userInput = prompt('Pilih gunting/batu/kertas').toLowerCase();
const botInput = Math.random();

if(botInput < 0.34) {
  // bot memilih batu
  if (userInput == 'gunting') {
    alert('Komputer memilih batu. Kamu kalah');
  } else if (userInput == 'batu') {
    alert('Komputer memilih batu. Hasil seri');
  } else if (userInput == 'kertas') {
    alert('Komputer memilih batu. Kamu menang');
  } else {
    alert('Kamu harus menuliskan gunting/batu/kertas (pilih satu)');
  }
} else if (botInput < 0.78) {
  // bot memilih kertas
  if (userInput == 'gunting') {
    alert('Komputer memilih kertas. Kamu menang');
  } else if (userInput == 'batu') {
    alert('Komputer memilih kertas. Kamu kalah');
  } else if (userInput == 'kertas') {
    alert('Komputer memilih kertas. Hasil seri');
  } else {
    alert('Kamu harus menuliskan gunting/batu/kertas (pilih satu)');
  }
} else {
  // bot memilih gunting
  if (userInput == 'gunting') {
    alert('Komputer memilih gunting. Hasil seri');
  } else if (userInput == 'batu') {
    alert('Komputer memilih gunting. Kamu menang');
  } else if (userInput == 'kertas') {
    alert('Komputer memilih gunting. Kamu kalah');
  } else {
    alert('Kamu harus menuliskan gunting/batu/kertas (pilih satu)');
  }
}

console.log('User: ' + userInput);
console.log('Bot: ' + botInput);