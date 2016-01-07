/* Handle Updates to the UI */

/* Render the question object */
Question.prototype.renderQuestion = function() {
    /* Create jQuery objects for question header */
    var questionTag = $('#question');

    /* Fill question header with current question string and append it to Div*/
    questionTag.text(this.question);
    /* Loop through choices[] */
    for(var i = 0; i < this.choices.length; i++) {

        /* Display choice values and buttons with unique Ids */
        var choiceTag = $('<p class ="choice"></p>');
        var choiceId = 'choice' + i;
        var choiceText = this.choices[i];
        var guessId = 'guess' + i;
        var guessButton = $('<button class="btn--default guess">Select Answer</button>');
        choiceTag.text(choiceText);
        choiceTag.attr('id', choiceId);
        guessButton.attr('id', guessId);

        /* Append contents to Div */
        $("#contents").append(choiceTag).append(guessButton);
    }
     // End For Loop
} // End renderQuestion F'n

/* Render the Current Question Instance */
Quiz.prototype.renderIn = function() {
      this.questions[this.currentQuestionIndex].renderQuestion();
};

Quiz.prototype.clearQuestion = function() {
    $("#contents").empty();
};

/* Display Progress in Footer */
Quiz.prototype.updateProgress = function () {
    var questionNum = this.currentQuestionIndex + 1;
    var quizSize = this.questions.length;
    $("#progress").text("Question " + questionNum + " of " + quizSize);
};

/* Display End of Quiz Score */
Quiz.prototype.displayScore = function () {

      $("h1").text("Game Over");
      $("h2").text("Your score is: " + this.score);
      $("p").hide();
      $("button").hide();
};
