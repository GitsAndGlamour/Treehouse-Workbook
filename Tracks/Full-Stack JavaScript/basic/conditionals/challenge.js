var rank = 0;
var crown = "";
var question = "";
var guess = "";
var answer = "";
var right = guess == answer;
var numQuestions = 5;
var correct = 'Correct! Number of questions left: ';
var wrong = 'That\'s incorrect. Number of questions left: ';

question = "1. This is question 1.";
answer = "TRUE";
guess = prompt(question);
right = guess == answer;
numQuestions--;
if (right) {
    rank++;
    alert(correct + numQuestions);
} else {
    alert(wrong + numQuestions);
}

question = "2. This is question 2.";
answer = "TRUE";
guess = prompt(question);
right = guess == answer;
numQuestions--;
if (right) {
    rank++;
    alert(correct + numQuestions);
} else {
    alert(wrong + numQuestions);
}

question = "3. This is question 3.";
answer = "TRUE";
guess = prompt(question);
right = guess == answer;
numQuestions--;
if (right) {
    rank++;
    alert(correct + numQuestions);
} else {
    alert(wrong + numQuestions);
}

question = "4. This is question 4.";
answer = "TRUE";
guess = prompt(question);
right = guess == answer;
numQuestions--;
if (right) {
    rank++;
    alert(correct + numQuestions);
} else {
    alert(wrong + numQuestions);
}

question = "5. This is question 5.";
answer = "TRUE";
guess = prompt(question);
right = guess == answer;
numQuestions--;
if (right) {
    rank++;
    alert("That was correct! Click OK to see your ranking.");
} else {
    alert("That was not correct. Click OK to see your ranking.");
}

/* deciding the crown colors by rank */
if (rank > 4) {
    crown = "gold";
} else if (rank >= 3) {
    crown = "silver";
} else {
    crown = "bronze";
}

document.write("You answered " + rank + " out of 5 questions right."
       + "You win the " + crown + " crown!");
