document.writeln("");
/* variables */
var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6 + 1);
var guess = prompt("I'm thinking of a number between 1 and 6. What is it?");
var intGuess = parseInt(guess);

/* guess number */
if (intGuess===randomNumber) {
    correctGuess = true;

    /* guess is too low */
} else if (intGuess < randomNumber) {
    var guessMore = prompt("Try again. The number I'm thinking of is more than " + guess);

    if (guessMore == randomNumber) {
        correctGuess = true;
    }
} else {
    /* guess is too high */
    var guessLess = prompt("Try again. The number I'm thinking of is less than " + guess);

    if (guessLess == randomNumber) {
        correctGuess = true;
    }
}

/* correct or final guess output */
if (correctGuess) {
    document.write("You guessed the number!");
} else {
    document.write("You guessed wrong.The number is " + randomNumber + ".");
}
