//Function declaration
// 1. Multiply function declaration
function multiply() {
  // Function body
  console.log("Multiply function log");
}

// 2. Multiply function calls
multiply(); // 'Multiply function log'
multiply(); // 'Multiply function log'
multiply(); // 'Multiply function log'

//Parameters
// Declaration of parameters x, y, z
function multiply(x, y, z) {
  console.log(`Multiplication result is ${x * y * z}`);
}
//Parameters are local variables available only in the function body.

//Arguments
/*When calling a function, in parentheses you can pass arguments, 
i.e.values for the declared function parameters.*/
// 1. Declaration of parameters x, y, z
function multiply(x, y, z) {
  console.log(`Multiplication result is ${x * y * z}`);
}

// 2. Passing arguments
multiply(2, 3, 5); // Multiplication result is 30
multiply(4, 8, 12); // Multiplication result is 384
multiply(17, 6, 25); // Multiplication result is 2550

//Value return
function multiply(x, y, z) {
  console.log("The code before return is executed as usual");

  // Returning the result of the multiplication expression
  return x * y * z;

  console.log("This log will never be executed, as it is positioned after return");
}

// The function result can be saved to a variable
let result = multiply(2, 3, 5);
console.log(result); // 30

result = multiply(4, 8, 12);
console.log(result); // 384

result = multiply(17, 6, 25);
console.log(result); // 2550

//Code execution order
function multiply(x, y, z) {
  console.log(`Multiplication result is ${x * y * z}`);
}

console.log("Log before calling the multiply function");
multiply(2, 3, 5); // Multiplication result is 30
console.log("Log after calling the multiply function");

// Sequence of logs in the console:
// "Log before calling the multiply function"
// "Multiplication result is 30"
// "Log after calling the multiply function"

//Default parameters
function count(countFrom = 0, countTo = 10, step = 1) {
  console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

  for (let i = countFrom; i <= countTo; i += step) {
    console.log(i);
  }
}

count(1, 5); // countFrom = 1, countTo = 5, step = 1
count(2); // countFrom = 2, countTo = 10, step = 1
count(); // countFrom = 0, countTo = 10, step = 1

//Arguments pseudo-array
/*The list of all arguments can be accessed using the special variable arguments,
which is only available inside the function AND STORES ALL ARGUMENTS AS PSEUDO-ARRAYS.*/
function multiply() {
  let total = 1;

  for (const argument of arguments) {
    total *= argument;
  }

  return total;
}

console.log(multiply(1, 2, 3)); //  6
console.log(multiply(1, 2, 3, 4)); //  24
console.log(multiply(1, 2, 3, 4, 5)); //  120

//Pseudo-array conversion
function fn() {
  // The args variable will contain a standard array
  const args = Array.from(arguments);
}
/*Using the ... (rest) operation makes it possible to collect an arbitrary number of elements, 
in our case arguments, inside an array and store it in a variable. Collect all the arguments 
using the rest operation right in the function signature.*/
function fn(...args) {
  // The args variable will contain a standard array
}

//"Return early" pattern
function withdraw(amount, balance) {
  // If the condition is met, console.log is called
  // and the function exited. The code following the if body will not be executed.
  if (amount === 0) {
    console.log("For the transaction, enter an amount greater than zero");
    return;
  }

  // If the condition of the first if is not met, its body is skipped,
  // and the interpreter goes to the second if.
  // If the condition is met, console.log is called and the function exited.
  // The code following the if body will not be executed.
  if (amount > balance) {
    console.log("Insufficient account balance");
    return;
  }

  // If none of the previous ifs have been executed,
  // the interpreter reaches this code and executes it.
  console.log("The withdrawal has been successful");
}

withdraw(0, 300); // "For the transaction, enter an amount greater than zero"
withdraw(500, 300); // "Insufficient account balance"
withdraw(100, 300); // "The withdrawal has been successful"

//Function expression
/*Function expression is a standard declaration of a variable with a function as its value.
This is an alternative way to declare functions.*/

// Function declaration
function multiply(x, y, z) {
  console.log(`Multiplication result is ${x * y * z}`);
}

// Function expression
const multiply = function (x, y, z) {
  console.log(`Multiplication result is ${x * y * z}`);
};



