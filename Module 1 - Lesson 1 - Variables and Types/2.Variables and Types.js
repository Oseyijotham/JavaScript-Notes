/*The names of CONSTANTS, i.e. variables with unchanged values 
throughout the entire script, are usually written in 
the UPPER_SNAKE_CASE format.*/

// Constant storing the color value
const COLOR_TEAL = "#009688";

// Constant storing a log in message
const LOGIN_SUCCESS_MESSAGE = "Welcome!";

/*typeof operator
It is used to get the variable's value type. It returns 
in place of its call the value type of the variable specified after it, 
so you will see a string with type name.*/

let username;
console.log(typeof username); // "undefined"

let inputValue = null;
console.log(typeof inputValue); // "object"

const quantity = 17;
console.log(typeof quantity); // "number"

const message = "JavaScript is awesome!";
console.log(typeof message); // "string"

const isSidebarOpen = false;
console.log(typeof isSidebarOpen); // "boolean"
