let scores = {};
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
  if (name in scores) {
    if (tries.length < scores[name]) {
      alert(
        `That’s Correct ${name}! And you beat your previous attempt by ${
          scores[name] - tries.length
        } fewer guesses!`
      );
      scores[name] = tries.length;
    } else if (tries.length > scores[name]) {
      alert(
        `That’s Correct ${name}! You did better in your last game by ${
          tries.length - scores[name]
        } more guesses.`
      );
    } else {
      alert(
        `That's correct ${name}! Your previous guesses were ` + tries.join(", ")
      );
    }
  } else {
    scores[name] = tries.length;
    alert(
      `That's correct ${name}! Your previous guesses were ` + tries.join(", ")
    );
  }

  playAgain = String(prompt("Would you like to play again?"));
} while (playAgain.toLowerCase() === "yes");
