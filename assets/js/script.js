
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

var highScores = {
    name: "",
    score: finalScore
}

function openingPage() {
    mainDisplay.textContent = ("Press the button to start!")

    buttonEl.textContent = ("Start Quiz")

    $(displayQuestionEl).append(mainDisplay, buttonEl)

    $("#highscores-form").css("display", "none")
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
        timer = timer - 5;
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

function gameOver () {
    if (timer <= 0) {
        score = 0;
    }
    else {
        score = timer;
    }
    console.log(timer);

    // $(displayQuestionEl).text("");

    $(timerEl).text("");

    $(resultsEl).text("");

    $(displayQuestionEl).text("High Scores!");

    $("#highscores-form").css("display", "inline")

    $(".hsSubmit").on("click", )




    // $("<form>Test</form>" ).appendTo(resultsEl);



    


    
    //create form, click event, value from the form (initials), score is timer
    //create an object with name and score for each person
    //push the objects into the array
    //var testArr = JSON.parse(localStorage.getItem("highScoresLocal "))
    // localStorage.setItem("highScoresLocal", JSON.stringify(highscoresArr))
    // var testArr = JSON.parse(localStorage.getItem("highScoresLocal"))
    // then you can use testArr to place it on the page
    //get the items from local storage and put them into an array and then you want to push the new objects into an array and save that array
 
}

// function init () {
//     var storedScore = JSON.parse(localStorage.getItem("highscores"));

//     if (storedScore !== null) {

//         highScores.name = storedScore;

//     }
    
// }




// buttonEl.addEventListener("click", startQuiz());
$(buttonEl).on("click", startQuiz)

openingPage();