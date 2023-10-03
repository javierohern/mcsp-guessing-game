let playAgain;
do {
  let secretNumber = Math.floor(Math.random() * 100) + 1;
  let name = String(prompt("What's your name?"));
  let guess = Number(prompt("Guess a number between 1 and 100"));
  let tries = [];

  while (guess !== secretNumber) {
    tries.push(guess);
    if (guess < secretNumber) {
      guess = Number(prompt(`Sorry ${name}, guess HIGHER!`));
    } else if (guess > secretNumber) {
      guess = Number(prompt(`Sorry ${name}, guess LOWER!`));
    }
  }
  alert(
    `That's correct ${name}! Your previous guesses were ` + tries.join(", ")
  );
  playAgain = String(prompt("Would you like to play again?"))
} while (playAgain === "yes");
