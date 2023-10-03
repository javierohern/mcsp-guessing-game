let secretNumber = Math.floor(Math.random() * 100) +1;

let guess = Number(prompt("Guess a number between 1 and 100"))

let tries = 0

if (guess === secretNumber) {
    alert("That's correct!");
} else if (guess < secretNumber) {
    alert("Higher!")
} else {
    alert("Lower")
}

while (guess !== secretNumber) {
    if (guess < secretNumber) {
        tries++
        guess = Number(prompt("Try again, this time guess a HIGHER number!"))
    }
    else if (guess > secretNumber) {
        tries++
        guess = Number(prompt("Try again, this time guess a LOWER number!"))
    }
}
alert(`That's correct! It took you ${tries} tries!`)
