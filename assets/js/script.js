
var displayQuestionEl = $(".display-questions");

var timerEl = $(".timer");

var resultsEl = $(".results");

var mainDisplay = document.createElement("h3");

var buttonEl = document.createElement("button");

var timer = 75;

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

}

function nextQuestion() {

}

function checkAnswer() {

}

// buttonEl.addEventListener("click", startQuiz());
$(buttonEl).on("click", startQuiz)

openingPage();