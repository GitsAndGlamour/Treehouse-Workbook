/*Problem:  Quiz application has no interactivity. Questions do not progress and cannot be answered. Score is not shown at the end.
  Solution: Provide interactivity to the quiz and keep track of progress.

Start the application with all objects and methods created
*/
/* Instantiate Quiz Object */
var quiz = new Quiz();

/* Instantiate Question Objects */
var question1 = new Question("What is 1+1","2",["3", "4", "2"]);
var question2 = new Question("How many states are in the United States of America?", "50", ["50", "51", "48", "42"]);
var question3 = new Question("Up is the opposite of down", "True", ["True", "False"]);
var question4 = new Question("One is more than two", "False", ["True", "False"]);
var question5 = new Question("ABCD...", "EFG", ["EFG", "HIJ"]);
var question6 = new Question("Rice is definitely without a doubt a grain", "True", ["True", "False"]);

/* Add Questions to Quiz */
quiz.addQuestion(question1);
quiz.addQuestion(question2);
quiz.addQuestion(question3);
quiz.addQuestion(question4);
quiz.addQuestion(question5);
quiz.addQuestion(question6);

/* Render Quiz in Element */
$(document).ready( function () {
    quiz.renderIn();
    quiz.updateProgress();

/* Locate Choice Button Element in Document */
    $(".guess").click(function progressQuiz () {
        /* Locate choice in Document */
        var choice = $(this).prev().text();

        /* Send choice text to console */
        console.log("click result:", choice);
        /* Check if choice is correct answer */
        quiz.compareAnswer(choice);

        /* Select next question */
        quiz.selectNextQuestion();
    });

});
