// Code your solutions in this file
const names = ['Ada', 'Brendan', 'Ali'];

function printBadges(names) {
  for (var i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`);
  }
  return names;
}

function tailsNeverFails() {
  let heads = 0;
  let tails = 0;

  while (heads <= 0) {
    let toss = Math.random()
    if (toss >= .5) {
      tails++;
    } else {
      heads++;
    }
  }
  return `You got ${tails} tails in a row!`;
}
