// Code your solutions in this file
function printBadges(array) {
  for (let n = 0; n < array.length; n++) {
    console.log(`Welcome ${array[n]}! You are employee #${n+1}.`);
  }
  return array
}


function tailsNeverFails() {
  n = 0
  while (Math.random() >= 0.5) {
    n += 1
  }
  return `You got ${n} tails in a row!`
}
