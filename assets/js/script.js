
var displayQuestionEl = $(".display-questions");

var timerEl = $(".timer");

var resultsEl = $(".results");

var mainDisplay = document.createElement("h3");

var buttonEl = document.createElement("button");

var timer = 5;

var index = 0;

function openingPage() {
    mainDisplay.textContent = ("Press the button to start!")

    buttonEl.textContent = ("Start Quiz")

    $(displayQuestionEl).append(mainDisplay, buttonEl)
}

function startQuiz() {

    showTimer()

}

function showTimer() {

    $(timerEl).text(timer)

    //setInterval and store it into a variable
    var questionTimer = setInterval(function(){
        // decrease timer by 1
        timer--;
        // display timer to screen
        $(timerEl).text(timer);
        // if timer goes down to 0, clear interval
        if (timer === 0){
            clearInterval(questionTimer)
        }

    }, 1000)

    nextQuestion();

}

function nextQuestion() {

    var currentQuestion = questions[index];
    console.log(currentQuestion)
}

function checkAnswer() {

}

// buttonEl.addEventListener("click", startQuiz());
$(buttonEl).on("click", startQuiz)

openingPage();