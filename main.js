// loan amount input
// Annual Percentage Rate / Yearly Interest Rate
// loan duration
// calculate monthly interest rates
// loan duration in months

const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

// validating numbers, trimming space
function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num)) || num < 0;
}

// validate interest rate
function invalidInterestRate(num) {
  return Number.isNaN(Number(num)) || num < 1 || num > 100;
}

function invalidLoanYears(num) {
  return Number.isNaN(Number(num)) || num < 1 || num % 1 !== 0;
}

prompt('Welcome to your mortgage/car calculator!');

while (true) {
  // ask for loan input
  prompt('Enter loan amount:');
  let loanAmount = readline.question();

  // validating input loan
  while (invalidNumber(loanAmount)) {
    prompt('Not a valid number. Please try again.');
    loanAmount = readline.question();
  }

  // ask for interest rate input
  prompt('Enter interest rate between 1-100:');
  let interestRate = readline.question();

  // check interest rate
  while (invalidInterestRate(interestRate)) {
    prompt('Not a valid number. Please enter a number between 1-100.');
    interestRate = readline.question();
  }

  // ask for loan duration input
  prompt('Enter loan duration in years:');
  let loanYears = readline.question();

  // check loan years
  while (invalidLoanYears(loanYears)) {
    prompt('Invalid input. Please enter amount in years.');
    loanYears = readline.question();
  }

  // calculate monthly interest rates
  let monthlyInterestRate = Number(interestRate) / 100 / 12;
  let loanYearsInMonths = Number(loanYears) * 12;

  let monthlyPayment =
    loanAmount *
    (monthlyInterestRate /
      (1 - Math.pow(1 + monthlyInterestRate, -loanYearsInMonths)));

  prompt(`Your monthly payment will be $${monthlyPayment.toFixed(2)}`);

  prompt('Would you like to calculate another loan? (y/n) ');
  let answer = readline.question();
  if (answer !== 'y') break;
}
