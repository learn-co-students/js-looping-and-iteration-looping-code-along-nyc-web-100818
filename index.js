// Code your solutions in this file
function printBadges(names){
  for (var i = 0; i < names.length; i++){
    console.log(`Welcome ${names[i]}! You are employee #${(i + 1)}.`)
  };
  return names
};

function tailsNeverFails(){
  let i = 0;
  let flip = 1;

  do {
    flip = Math.random()
    if (flip >= 0.5){
      i++;
    }
  } while (flip > 0.5);

  return `You got ${i} tails in a row!`
};
