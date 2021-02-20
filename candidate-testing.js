const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = input.question("What is your name? " );
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = " ";
let questions = ['Who was the first American woman in space? ', 'True or false: 5000 meters = 5 kilometers. ', '(5 + 3)/2 * 10 = ? ', "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 'What is the minimum crew size for the International Space Station (ISS)? '];
let correctAnswers = ['Sally Ride', 'True', '40', 'Trajectory', '3'] ;
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
const input = require('readline-sync');


}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  /*const input = require('readline-sync');*/
 for(let i=0;i<=questions.length-1;i++){ 
   candidateAnswers[i] = input.question(questions[i])
 }

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

let gradeTotal = 0
let numQuestions = questions.length
console.log("Candidate Name: " + candidateName);
for (let i = 0; i < questions.length; i++){
  if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
    gradeTotal+=1
    }
   console.log(`${([i+1])}) ${questions[i]}\n Your answer: ${candidateAnswers[i]} \n Correct Answer: ${correctAnswers[i]}`)
   
   } 
   let grade = (gradeTotal / questions.length) * 100
   console.log(`>>> Overall Grade: ${grade}% (${gradeTotal} of ${questions.length} responses correct) <<<`);
   if (grade >= 80){
     coonsole.log(`>>> Status: PASSED <<<`)
   } else {
     console.log(`>>> Status: FAILED <<<`)
   }

  return grade;
  i++
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
 
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};