const prompt = require("prompt-sync")();

function calculateGrade() {
  let score = Number(prompt("Enter your score: "));
  let grade = "";

  if (score >= 80) {
    grade = "You get grade A";
  } else if (score >= 70) {
    grade = "You get grade B";
  } else if (score >= 60) {
    grade = "You get grade C";
  } else if (score >= 50) {
    grade = "You get grade D";
  } else {
    grade = "You get grade F";
  }

  return grade;
}
console.log(calculateGrade());
