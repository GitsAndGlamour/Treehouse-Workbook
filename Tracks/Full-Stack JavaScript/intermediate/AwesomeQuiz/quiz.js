 /* Quiz Object */
function Quiz() {
    this.questions = [];
    this.currentQuestionIndex = 0;
    this.score = 0;
}

/* Adds a Question Object to the questions array. */
Quiz.prototype.addQuestion = function(question) {
    this.questions.push(question);
}

Quiz.prototype.selectCurrentQuestion = function() {
    var currentQuestion = this.questions[this.currentQuestionIndex];
};

Quiz.prototype.selectNextQuestion = function() {
    /* Increment the currentQuestionIndex */
    this.currentQuestionIndex++;

    /* If: The index position is out of bounds... */
    if(this.currentQuestionIndex == this.questions.length) {
        /* End Quiz */
        this.displayScore();
    } else {
        this.selectCurrentQuestion();
        this.clearQuestion();
        this.renderIn();
        this.updateProgress();
    } // End Else Statement
}; // End selectNextQuestion F'n

/* Adds up scores from each answered question */
Quiz.prototype.compareAnswer = function(choice) {
    /* Loate answer for current question */
    var answer = this.questions[this.currentQuestionIndex]["answer"];
    if(choice == answer) {
        /* Tally the Score */
        this.score++;
    }
    var score = this.score;

    /* Send to Console Results */
    console.log("choice: ", choice);
    console.log("answer: ", answer);
    console.log("score: ",  score);
};
