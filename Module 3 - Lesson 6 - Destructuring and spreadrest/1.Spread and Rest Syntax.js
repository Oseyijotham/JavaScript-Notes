//spread: passing arguments
const temps = [14, -4, 25, 8, 11];

// The console will have an array,
console.log(temps);
// ❌ This will not work because you are passing the entire array
console.log(Math.max(temps)); // NaN

// The console will have a set of separate numbers
console.log(...temps);
// ✅ Spread the collection of elements as separate arguments
console.log(Math.max(...temps)); // 25

//spread: creating a new array
const temps = [14, -4, 25, 8, 11];

// This is an exact but independent copy of the temps array
const copyOfTemps = [...temps];
console.log(copyOfTemps); // [14, -4, 25, 8, 11]

const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
const allTemps = [...lastWeekTemps, ...currentWeekTemps];
console.log(allTemps); // [14, 25, 11, 23, 17, 18]

//spread: creating a new object
const first = { propA: 5, propB: 10 };
const second = { propC: 15 };
const third = { ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15 }

/*Spread order matters. Object property names are unique, 
so the properties of the sprayed object can overwrite the 
value of an existing property if their names are the same.*/
const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15, propD: 20 };

const third = { ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

const fourth = { ...second, ...first };
console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

/*While spreading, you can add properties to any location. 
The main thing to remember is that the property name is unique and that its value can be overwritten.*/
const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15 };

const third = { propB: 20, ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15 }

const fourth = { ...first, ...second, propB: 20 };
console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

const fifth = { ...first, propB: 20, ...second };
console.log(fifth); // { propA: 5, propB: 20, propC: 15 }

//rest: collecting all function arguments
/*One of the uses of the rest operation is to create functions that can include an arbitrary 
number of arguments.*/

// How to declare function parameters so
// that any number of arguments can be passed?
function multiply() {
  // ...
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);
/*The parameter name can be arbitrary. Most often it is called args, 
restArgs or otherArgs, short for arguments.*/

//rest: collecting part of function arguments
function multiply(firstNumber, secondNumber, ...otherArgs) {
  console.log(firstNumber); // First argument value
  console.log(secondNumber); // Second argument value
  console.log(otherArgs); // Array of other arguments
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);