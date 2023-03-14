const prompt = require("prompt-sync")();

function greetFriends() {
  const name1 = prompt("No.1 Enter your name: ");
  const name2 = prompt("No.2 Enter your name: ");
  const name3 = prompt("No.3 Enter your name: ");
  greetFriendsWithAge(
    name1,
    calculateAge(name1),
    name2,
    calculateAge(name2),
    name3,
    calculateAge(name3)
  );
}

function calculateAge(name) {
  const birthYear = Number(prompt(`Enter your birth year, ${name}: `));
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  return age;
}

function greetFriendsWithAge(name1, age1, name2, age2, name3, age3) {
  console.log(`Welcome ${name1}, you are ${age1} years old.`);
  console.log(`Welcome ${name2}, you are ${age2} years old.`);
  console.log(`Welcome ${name3}, you are ${age3} years old.`);
}

greetFriends();
