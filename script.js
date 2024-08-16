function botPlays() {
  const randomPick = Math.random();
  
  if (randomPick < 0.34) {
    return 'gunting';
  } else if (randomPick < 0.67) {
    return 'batu';
  } else {
    return 'kertas';
  }
}

function userPlays(u) {
  console.log(u);
}