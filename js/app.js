import Question from "./Question.js";
import Quiz from "./Quiz.js";

const q1 = new Question(
  "What is 2 + 2?",
  [2, 3, 4, 5],
  2
);
const q2 = new Question(
  "First president of US",
  ["Al", "George", "Barrack", "Johnny"],
  1
);

const qArray = [q1, q2];

const myQuiz = new Quiz(qArray);
myQuiz.nextIndex()
console.log(myQuiz.getCurrentQuestion());