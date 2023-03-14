const prompt = require("prompt-sync")();

const totalTransactions = Number(prompt("Enter your total transactions: "));

function calculatePaymentCost(totalTransactions) {
  const transactionFee = Number(prompt("Enter your transaction Fee: "));
  const interestRate = parseFloat(prompt("Enter your interest Rate: "));

  const transactionCost = totalTransactions * transactionFee;
  const interestCost = totalTransactions * interestRate;

  return transactionCost + interestCost;
}

const totalCost = calculatePaymentCost(totalTransactions);
console.log(`Maria's total cost for the month is $${totalCost.toFixed(2)}.`);
