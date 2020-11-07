var highScore = document.getElementById("highScore");
var timeLeft = document.getElementById("timeLeft");
var startBtn = document.getElementById("startBtn");
var quizZone = document.getElementById("quizZone");
var questionZone = document.getElementById("questionZone");
var question = document.getElementById("Question");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
var correctAnswer = document.getElementById("correctAnswer");
var userScore = document.getElementById("userScore");
var totalScore = document.getElementById("totalScore");
var saveInitials = document.getElementById("saveInitials");




var jsQuestions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    }
];

function displayQuestion(event){
  event.preventDefault()
  console.log("Hello")
  question.textContent = jsQuestions[currentIndex].question

  //answer: for each answer
  //create a button tag
  //display the content of each answer onto the button
  //append button to answers div
}

function selectAnswer(){
  //everytime and answer is clicked
  //currentIndex++
  //Call displayQuestion()
}
//jsQuestions[0].question will return "Who's invented JS"
//jsQuestions[0].answers.b will return "Shery Sandberg"

//startBtn.onClick = displayQuestion;

//When start btn is clicked
//first question display on page
startBtn.addEventListener("click", displayQuestion);

