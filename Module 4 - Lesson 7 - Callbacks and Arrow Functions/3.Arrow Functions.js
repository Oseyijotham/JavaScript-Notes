// Regular function declaration
function classicAdd(a, b, c) {
  return a + b + c;
}

// The same as arrow function
const arrowAdd = (a, b, c) => {
  return a + b + c;
};

/*The keyword function is not used; instead, you should immediately declare parameters, 
followed by the => symbol and the function body.*/

/*The keyword function is not used; instead, you should immediately declare parameters, 
followed by the => symbol and the function body.*/
const add = a => {
  return a + 5;
};

//If there are no parameters, then there must be empty parentheses.
const greet = () => {
  console.log("Hello!");
};

//Implicit return
// Before(Explicit Return)
function classicAdd(a, b, c) {
  return a + b + c;
}

// After
const arrowAdd = (a, b, c) => a + b + c;

//Arguments Pseudo-Array
const add = (...args) => {
  console.log(args);
};

add(1, 2, 3); // [1, 2, 3]

//Arrow functions as callbacks
const numbers = [5, 10, 15, 20, 25];

// Function declaration
numbers.forEach(function (number, index) {
  console.log(`Index ${index}, value ${number}`);
});

// Anonymous arrow function
numbers.forEach((number, index) => {
  console.log(`Index ${index}, value ${number}`);
});

/*You can also declare an arrow callback function separately and pass a reference to it. 
This should be done if one function is used in several program parts, or if it is cumbersome.*/
const numbers = [5, 10, 15, 20, 25];

const logMessage = (number, index) => {
  console.log(`Index ${index}, value ${number}`);
};

numbers.forEach(logMessage);