
var displayQuestionEl = $(".display-questions");

var timerEl = $(".timer");

var resultsEl = $(".results");

var mainDisplay = document.createElement("h3");

var buttonEl = document.createElement("button");

var timer = 75;

var i = 0;

var questionTimer;

var highScoresArr = [];

var highscoreForm = $("#highscores-form")

var finalScore = timer;

var highScores = {};

var hsSubmit = $(".hsSubmit")

var submitBttn = document.createElement("button")

var clearBttn = document.createElement("button")

function openingPage() {
    mainDisplay.textContent = ("Press the button to start!")

    buttonEl.textContent = ("Start Quiz")

    $(displayQuestionEl).append(mainDisplay, buttonEl)

    $("#highscores-form").css("display", "none")

    var storedHighscores = JSON.parse(localStorage.getItem("highScoresArr"))

    if (storedHighscores !== null) {

        highScoresArr = storedHighscores;

    }
}


function startQuiz() {

    showTimer();

    nextQuestion();

}

function showTimer() {

    $(timerEl).text(timer)

    //setInterval and store it into a variable
        questionTimer = setInterval(function(){
        // decrease timer by 1
        timer--;
        // display timer to screen
        $(timerEl).text(timer);
        // if timer goes down to 0, clear interval
        if (timer <= 0){
            clearInterval(questionTimer)
        }

    }, 1000)

}

function nextQuestion() {


    var currentQuestion = questions[i];

    console.log(currentQuestion);

    //removes starting page elements from page
    $(displayQuestionEl).text("");
    
    //makes h3 element = to current question title in the object array.
    $(mainDisplay).text(currentQuestion.title);

    //appends the text we created to the displayquestionsel
    $(displayQuestionEl).append(mainDisplay);

    //creating div for questions
    var choicesContainer = document.createElement("div")

    //use a loop to: this for loop makes the loop as long as the currentquestion.choices length which is four.
    for (let i = 0; i < currentQuestion.choices.length; i++) {

        //-create button elements for each choice
        var choiceBtn = document.createElement("button");

        //add text to each button from question choices
        $(choiceBtn).text(currentQuestion.choices[i]);

        //add a click event listener to button to check answers
        choiceBtn.addEventListener("click", checkAnswer)

        //append buttons to div element created to wrap choices
        choicesContainer.append(choiceBtn);
       
    }


     //append div element to the question container element
    // $(displayQuestionEl).append(choicesContainer);
    displayQuestionEl.append(choicesContainer)
    
    
}

function checkAnswer(e) {

    var responseTxt = e.target.textContent;

    if (responseTxt === questions[i].answer) {

        $(resultsEl).text("correct!")

    }
    else {
        timer = timer - 15;
        $(resultsEl).text("Incorrect!")
    }

    i++;
    
    if (timer <= 0 || i > questions.length -1) {
        clearInterval(questionTimer)
        $(timerEl).text(timer);
        gameOver();  
    }
    else {
        nextQuestion();
    }
    

}

function highscoresPage() {


    $(displayQuestionEl).text("");

    var storedHighscores = JSON.parse(localStorage.getItem("highScoresArr"))

    if (storedHighscores !== null) {

        highScoresArr = storedHighscores;

    }

    for (let i = 0; i < highScoresArr.length; i++) {
        
        var highscore = highScoresArr[i];

        var li = document.createElement("li");

        li.textContent = highscore;

        li.setAttribute("data-index", i);

        displayQuestionEl.append(li);
        
    }

    submitBttn.textContent = "Go Back"
    
    clearBttn.textContent = "Clear Highscores"

    displayQuestionEl.append(submitBttn, clearBttn)

    submitBttn.addEventListener("click", function(e){
        e.preventDefault();
        location.href = "index.html";
    })

    clearBttn.addEventListener("click", function(e) {

        e.preventDefault();

        highScoresArr = [];

        saveHighScr();

        highscoresPage();

    })

}

function gameOver () {
    if (timer <= 0) {
        timer = 0;
    }
    else {
        score = timer;
    }
    console.log(timer);

    // $(displayQuestionEl).text("");

    $(timerEl).text("");

    $(resultsEl).text("");

    $(displayQuestionEl).text("High Scores!");

    $("#highscores-form").css("display", "inline");


    $(".hsSubmit").on("click", function(e) {

        e.preventDefault();

        console.log(document.getElementById("initials").value);

        highScoresArr.push(document.getElementById("initials").value + ": " + timer);

        console.log(highScoresArr);

        saveHighScr();

        location.href = "highscores.html"; 

    })
    
    
    
    //create form, click event, value from the form (initials), score is timer
    //create an object with name and score for each person
    //push the objects into the array
    //var testArr = JSON.parse(localStorage.getItem("highScoresLocal "))
    // localStorage.setItem("highScoresLocal", JSON.stringify(highscoresArr))
    // var testArr = JSON.parse(localStorage.getItem("highScoresLocal"))
    // then you can use testArr to place it on the page
    //get the items from local storage and put them into an array and then you want to push the new objects into an array and save that array
 
}

function saveHighScr() {

    localStorage.setItem("highScoresArr", JSON.stringify(highScoresArr));

}
var path = window.location.pathname;

var page = path.split("/").pop();

if (page == "highscores.html"){
    highscoresPage();
}
else {
    openingPage();
}
// buttonEl.addEventListener("click", startQuiz());
$(buttonEl).on("click", startQuiz)

