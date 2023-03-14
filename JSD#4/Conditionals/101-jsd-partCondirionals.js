// Logical Operator ||
// false || false = false
// false || true = true
// true || false = true
// true || true = true

// Example
// let x = 5;
// let y = 10;

// if (x < 3 || y > 8) {
//   console.log("At least one of the conditions is true.");
// } else {
//   console.log("Both conditions are false.");
// }
////////////////////////////////////////////
////////////////////////////////////////////
// condition ? value1 : value2;
//In this syntax, "condition" is the expression that is evaluated, and "value1" and "value2" are the values that are returned depending on whether the condition is true or false.

// let x = 10;
// let y = 10;

// let result = x > 5 ? "Yes" : "No";
// console.log(result);

// let result2 = y > 10 ? "Yes" : "No";
// console.log(result2);
////////////////////////////////////////////
////////////////////////////////////////////
//In programming, the else statement is used in conjunction with an if statement to provide an alternative path of execution when the if condition is not true. The syntax of the else statement is as follows:

// if (condition) {
//   // code to be executed if condition is true
// } else {
//   // code to be executed if condition is false
// }

// let x = 5;
// if (x > 10) {
//   console.log("x is greater than 10");
// } else {
//   console.log("x is not greater than 10");
// }

// let y = 10;
// if (y < 5) {
//   console.log("y is less than 5");
// } else if (y < 10) {
//   console.log("y is between 5 and 9");
// } else {
//   console.log("y is greater than or equal to 10");
// }

////////////////////////////////////////////
////////////////////////////////////////////
//The logical operator && is known as the "AND" operator in programming. It is a binary operator that takes two operands and returns true if both operands are true. If either operand is false, the operator returns false.

//example
// let x = 5;
// let y = 10;

// if (x < 10 && y > 5) {
//   console.log("Both conditions are true.");
// } else {
//   console.log("At least one condition is false.");
// }

////////////////////////////////////////////
////////////////////////////////////////////
//In programming, the switch statement is a control flow structure that allows you to test a variable against a series of possible values and execute different blocks of code based on which value the variable matches. The syntax of the switch statement is as follows:

// switch (expression) {
//     case value1:
//       // code to be executed if expression matches value1
//       break;
//     case value2:
//       // code to be executed if expression matches value2
//       break;
//     ...
//     default:
// code to be executed if expression doesn't match any of the cases
// }

//In this syntax, the expression is the variable or expression being tested, while each case block represents a possible value that the expression might match. If the expression matches a case value, the code inside that block is executed, and then execution of the switch statement stops (unless a break statement is omitted). If the expression does not match any of the case values, the code inside the default block is executed.

//example
// let day = 3;
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   default:
//     console.log("Weekend");
// }

//example2
// let grade = "B";
// switch (grade) {
//   case "A":
//     console.log("Excellent!");
//     break;
//   case "B":
//     console.log("Good job!");
//     break;
//   case "C":
//     console.log("You passed, but you can do better.");
//     break;
//   case "D":
//     console.log("You barely passed.");
//     break;
//   case "F":
//     console.log("You failed.");
//     break;
//   default:
//     console.log("Invalid grade.");
// }

//example3
// let dayOfWeek = "Sunday";
// switch (dayOfWeek) {
//   case "Monday":
//   case "Tuesday":
//   case "Wednesday":
//   case "Thursday":
//   case "Friday":
//     console.log("It's a weekday.");
//     break;
//   case "Saturday":
//   case "Sunday":
//     console.log("It's the weekend!");
//     break;
//   default:
//     console.log("Invalid day of the week.");
// }

//example4
// let carType = "SUV";
// let rentalDays = 5;
// let basePrice;

// switch (carType) {
//   case "Economy":
//     basePrice = 25;
//     break;
//   case "Compact":
//     basePrice = 30;
//     break;
//   case "Mid-size":
//     basePrice = 35;
//     break;
//   case "Full-size":
//     basePrice = 40;
//     break;
//   case "SUV":
//     basePrice = 50;
//     break;
//   case "Luxury":
//     basePrice = 75;
//     break;
//   default:
//     console.log("Invalid car type.");
// }

// let totalCost = basePrice * rentalDays;

// if (rentalDays >= 7) {
//   totalCost *= 0.9; // apply 10% discount for rentals of 7 days or longer
// }

// console.log(
//   `Total cost for ${carType} rental (${rentalDays} days): $${totalCost}.`
// );

////////////////////////////////////////////
////////////////////////////////////////////
//In JavaScript, the logical operator ! is used to perform a logical NOT operation on a Boolean value.

//When used in front of a Boolean value, ! will negate the value, meaning that it will return true if the value is false, and false if the value is true.

// let isSunny = true;
// let isRainy = false;

// console.log(!isSunny); // Output: false
// console.log(!isRainy); // Output: true

// console.log(!!0); // Output: false
// console.log(!!1); // Output: true
// console.log(!!""); // Output: false
// console.log(!!"hello"); // Output: true
// console.log(!!null); // Output: false
// console.log(!!undefined); // Output: false
// console.log(!!NaN); // Output: false

////////////////////////////////////////////
////////////////////////////////////////////

////////////////////////////////////////////
////////////////////////////////////////////

////////////////////////////////////////////
////////////////////////////////////////////
