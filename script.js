var highScore = document.getElementById("highScore");
var timeLeft = document.getElementById("timeLeft");
var startBtn = document.getElementById("startBtn");
var quizZone = document.getElementById("quizZone");
var questionZone = document.getElementById("questionZone");
var questionArray = document.getElementById("question");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
var showAnswer = document.getElementById("showAnswer");
var correctAnswer = document.getElementById("correctAnswer");
var userScore = document.getElementById("userScore");
var totalScore = document.getElementById("totalScore");
var saveInitials = document.getElementById("saveInitials");
var showScore = document.getElementById("showScore");
var scoreList = document.getElementById("scoreList");
var backBtn = document.getElementById("backBtn");
var clrBtn = document.getElementById("clearBtn");
var startUp = document.getElementById("startUp");
var results = document.getElementById("results");
var submitBtn = document.getElementById("submitBtn");
var viewScores = document.getElementById("viewScores");


var secondsLeft = 75;

var onscreenQuestion = 0;
var correctAnswer = 0;
var incorrectAnswer = 0;

questionZone.style.display = "na";
showScore.style.display = "na";
userScore.style.display = "na";


var jsQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich",
      d: "Thomas Edison",
      correctAnswer: "c"
    },
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm",
      d: "saywhat",
      correctAnswer: "c"
    },
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint",
      correctAnswer: "d"
    },
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: {
      a: "javascript",
      b: "terminal/gitbash",
      c: "For Loops",
      d: "console log",
      correctAnswer: "c"
    },
  },
  {
    question: "The condition in an if / else statement is enclosed within",
    answers: {
      a: "qoutes",
      b: "curly brackets",
      c: "parentheses",
      d: "square brackets",
      correctAnswer: "b"
    },
  }];

var lastQuestion = jsQuestions.length - 1;
var currentQuestion = 0;
var count = 0;
var score = 0;
var nameList = [];

startBtn.addEventListener("click", runQuestions);

function startTimer() {
  count = 60;
  var timer = setInterval(function(){
    if (count <1) {
      renderScores();
    }
    count--;
    timeLeft.textContent = count;
  }, 1000);

}

function popQuestion() {
  var quest = jsQuestions[onscreenQuestion];

  questionArray.innerHTML = "<p>" + quest.question + "</p>";
  a.innerHTML = quest.a;
  b.innerHTML = quest.b;
  c.innerHTML = quest.c;
  d.innerHTML = quest.d;
  console.log(popQuestion);

}

function runQuestions(){
  startTimer();
  startUp.style.display = "none";
  popQuestion();
  quizZone.style.display = "block";

}

function checkAnswer(answer) {
  if (answer == jsQuestions[onscreenQuestion].correctAnswer) {
    score = score += 20;
    showAnswer.textContent = "Correct!"
  }
  else {
    count = count -10;
    showAnswer.textContent = "False"
  }
  if (onscreenQuestion < lastQuestion && count > 0) {
    onscreenQuestion++
    popQuestion()
  }
  else if (currentQuestion === lastQuestion || count === 0) {
    
    renderScores();
  }
}
init();
 function renderScores() {
   clearInterval(timer);
   quizZone.textContent = "";
   timeLeft.style.display = "none";
   results.style.display = "block";
   showScore.textContent = score;
   scoreList.innerHTML = "";

   for(var i = 0; i < nameList.length; i++) {
     var list = nameList[i];

     var li = document.createElement("li");
     li.textContent = list;
     scoreList.appendChild(li);
   }
 }

 function init(){
   var storedNames = JSON.parse(localStorage.getItem("nameList"));
   if(storedNames !== null){
     nameList = storedNames;
   }
 }

 function storedNames() {
   localStorage.setItem("nameList", JSON.stringify(nameList));
 }

 submitBtn.addEventListener("click", function (event){
   event.preventDefault();
   var nameText = nameInput.value.trim();

   if(nameText === "") {
     return;
   }

   nameList.push(nameText + "-" + score);
   nameInput.value = "";

   storedNames();
   renderScores();
 });

 function clearAll() {
   window.localStorage.clear();
   nameList = "";
 }

 clrBtn.addEventListener("click", function (event){
   event.preventDefault();
   clearAll();
   renderScores();
 })

 showScore.addEventListener("click", showScore)

 function showScore () {
   startUp.style.display = "none";
   results.style.display = "block";
 }


