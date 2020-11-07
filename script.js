
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");//
var startBtn = document.querySelector("#start");
var highScore = document.querySelector("#highScore");
var timeLeft = document.querySelector("#timeLeft");
var question = document.querySelector("#question");
var answer = document.querySelector("#answers");
var currentIndex = 0;

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

