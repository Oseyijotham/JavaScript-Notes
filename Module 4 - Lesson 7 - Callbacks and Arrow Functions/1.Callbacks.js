/*Functions are no different from numbers, strings, or arrays. They are just a 
special data type (higher-order object), a value that can be stored in a variable 
or passed as an argument to another function.*/

function greet(name) {
  return `Welcome ${name}.`;
}

// Calling the greet function and displaying the result in the console
console.log(greet("Mango")); // Welcome, Mango.

// Displaying the greet function in the console without calling it
console.log(greet); // ƒ greet() { return `Welcome ${name}.`; }

/*Callback function, or callback is a function that is passed as an argument to 
another function, and the latter calls such function.*/

/*Higher-order function is a function that takes other functions as parameters or returns a function as a result.*/
// Callback
function greet(name) {
  console.log(`Welcome ${name}.`);
}

// Higher-order function
function registerGuest(name, callback) {
  console.log(`Registering guest ${name}.`);
  callback(name);
}

registerGuest("Mango", greet);

//Inline callbacks
function registerGuest(name, callback) {
  console.log(`Registering guest ${name}.`);
  callback(name);
}

// Passing the greet inline function as a callback
registerGuest("Mango", function greet(name) {
  console.log(`Welcome ${name}.`);
});

// Passing the notify inline function as a callback
registerGuest("Poly", function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes.`);
});

//Several callbacks
function processCall(recipient, onAvailable, onNotAvailable) {
  // Simulating the subscriber’s availability with a random number
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }

  onAvailable(recipient);
}

function takeCall(name) {
  console.log(`Connecting you to ${name}, please wait...`);
  // Call handling logic
}

function activateAnsweringMachine(name) {
  console.log(
    `The subscriber ${name} is not available, please leave a message.`
  );
  // Answering machine activation logic
}

function leaveHoloMessage(name) {
  console.log(`The subscriber ${name} is not available, recording a hologram.`);
  // Hologram record logic
}

processCall("Mango", takeCall, activateAnsweringMachine);
processCall("Poly", takeCall, leaveHoloMessage);


//Repetition abstraction
function printValue(value) {
  console.log(value);
}

function prettyPrint(value) {
  console.log("Logging value: ", value);
}

function repeat(n, action) {
  for (let i = 0; i < n; i += 1) {
    action(i);
  }
}

// Passing printValue as a callback
repeat(3, printValue);
// 0
// 1
// 2

// Passing prettyPrint as a callback
repeat(3, prettyPrint);
// Logging value: 0
// Logging value: 1
// Logging value: 2