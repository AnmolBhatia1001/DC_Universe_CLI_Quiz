var readlineSync = require('readline-sync');

var questions = [
  {
    question: "What is Batman real name ? ",
    answer: "Bruce Wayne"
  },
  {
    question: "What is Superman real name ? ",
    answer: "Clark Kent"
  },
  {
    question: "What is Flash real name ? ",
    answer: "Barry Allen"
  },
  {
    question: "What is Aquaman real name ? ",
    answer: "Arthur Curry"
  },
  {
    question: "What is Wonder Women real name ? ",
    answer: "Diana "
  },
]

var score = 0;


var play = function(question, answer) {

  var userAnswer = readlineSync.question(question)
  if (answer.toLowerCase() === userAnswer.toLowerCase()) {
    score++;
    console.log(`
    You're Right !!!
    Your Score is ${score}
    `)
  } else {
    score--;
    console.log(`
    You're Wrong !!!
    Your Score is ${score}
    `)
  }
}

var userName = readlineSync.question("Enter Your Name : ")
console.log(
  `
  Welcome ${userName} to Mini CLI Game
  Do You Know DC Universe !!!
  `)

for (var i = 0; i < questions.length; i++) {
  console.log(`Question No. ${i + 1}`)
  play(questions[i].question, questions[i].answer);
}

console.log(
  `
  Your Final Score is ${score}
  Thanks for Playing this mini game.
  `)


var highScore = [
  {
    name: "Anmol",
    score: 5
  },
  {
    name: "Alex",
    score: 4
  },


]

console.log(
  `
  Checkout High Score of other Players
  
  Player Name  : ${highScore[0].name}
  Player Score : ${highScore[0].score}

  Player Name  : ${highScore[1].name}
  Player Score : ${highScore[1].score}

  send a screenshot if you have beaten the score
  `)