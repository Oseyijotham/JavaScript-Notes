//Conversion to numbers

const valueA = "5";
console.log(Number(valueA)); // 5
console.log(typeof Number(valueA)); // "number"

const valueB = "random string";
console.log(Number(valueB)); // NaN
console.log(typeof Number(valueB)); // "number"

//Check if a value is a number

const validNumber = Number("51"); // 51
console.log(Number.isNaN(validNumber)); // false

const invalidNumber = Number("qweqwe"); // NaN
console.log(Number.isNaN(invalidNumber)); // true

/*Math class
This is a built-in class that provides a set of methods for
operations with numbers. You do not have to know all the methods by 
heart, only some of the most common.*/

// Math.floor(num) returns the smallest integer
// less than or equal to the specified one
console.log(Math.floor(1.7)); // 1

// Math.ceil(num) returns the largest integer
// greater than or equal to the specified number
console.log(Math.ceil(1.2)); // 2

// Math.round(num) returns the value of a number
// rounded to the nearest integer
console.log(Math.round(1.2)); // 1
console.log(Math.round(1.5)); // 2

// Math.max(num1, num2, ...) returns the largest number from a set
console.log(Math.max(20, 10, 50, 40)); // 50

// Math.min(num1, num2, ...) returns the smallest number from a set
console.log(Math.min(20, 10, 50, 40)); // 10

// Math.pow(base, exponent) - exponentiation
console.log(Math.pow(2, 4)); // 16

// Math.random() returns a pseudo-random number in the range (0, 1)
console.log(Math.random()); // random number between 0 and 1
console.log(Math.random() * (10 - 1) + 1); // pseudo-random number from 1 to 10