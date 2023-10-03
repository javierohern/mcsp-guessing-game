let secretNumber = Math.floor(Math.random() * 100) +1;

let name = String(prompt("What's your name?"))
let guess = Number(prompt("Guess a number between 1 and 100"))

let tries = [];

// if (guess === secretNumber) {
//     alert("That's correct!");
// } else if (guess < secretNumber) {
//     alert("Higher!")
// } else {
//     alert("Lower")
// }

while (guess !== secretNumber) {
    tries.push(guess)
    if (guess < secretNumber) {
        guess = Number(prompt(`Sorry ${name}, guess HIGHER!`))
    }
    else if (guess > secretNumber) {
        guess = Number(prompt(`Sorry ${name}, guess LOWER!`))
    }
}
alert(`That's correct ${name}! Your previous guesses were ` + tries.join(", "))
console.log(tries)
