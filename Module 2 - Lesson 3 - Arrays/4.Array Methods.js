//split() Method
const name = "Mango";
console.log(name.split("")); // ["M", "a", "n", "g", "o"]

const message = "JavaScript is awesome";
console.log(message.split(" ")); // ["JavaScript", "is", "awesome"]

//join() method
const words = ["JavaScript", "is", "awesome"];
console.log(words.join("")); // "JavaScriptisawesome"
console.log(words.join(" ")); // "JavaScript is awesome"
console.log(words.join("-")); // "JavaScript-is-awesome"

//indexof()
const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.indexOf("Poly")); // 2
console.log(clients.indexOf("Monkong")); // -1

//includes() method
const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.includes("Poly")); // true
console.log(clients.includes("Monkong")); // false

//Checking multiple conditions with includes()
// Make an array of options
const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
const fruit = "cherry";
// Check if the element exists
const hasFruit = redFruits.includes(fruit);

if (hasFruit) {
  console.log(`${fruit} is a red fruit!`);
}

//push() method
const numbers = [];

numbers.push(1);
console.log(numbers); // [1]

numbers.push(2);
console.log(numbers); // [1, 2]

numbers.push(3);
console.log(numbers); // [1, 2, 3]

numbers.push(4);
console.log(numbers); // [1, 2, 3, 4]

numbers.push(5);
console.log(numbers); // [1, 2, 3, 4, 5]

//pop method
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.pop()); //  5
console.log(numbers); // [1, 2, 3, 4]

console.log(numbers.pop()); //  4
console.log(numbers); // [1, 2, 3]

console.log(numbers.pop()); //  3
console.log(numbers); // [1, 2]

console.log(numbers.pop()); //  2
console.log(numbers); // [1]

console.log(numbers.pop()); //  1
console.log(numbers); // []

//slice() method
//It makes a copy from begin to, but not including, end, i.e. the indices of elements from the original array.
const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]

//If begin and end are not specified, a complete copy of the original array will be created.
const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.slice()); // ["Mango", Ajax", "Poly", "Kiwi"]

//If end is not specified, copying will be from start to the end of the original array.
const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]
console.log(clients.slice(2)); // ["Poly", "Kiwi"]

//If start is negative and end is not specified, the last start elements will be copied.
const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.slice(-2)); // ["Poly", "Kiwi"]

//splice() method
const scores = [1, 2, 3, 4, 5];

//Removal
//splice(position, num)
/*position indicates the position (index) of the first element to be removed
num indicates the number of elements to be removed*/
// Remove three array elements, starting with the first one (index 0)
const deletedScores = scores.splice(0, 3);

// The scores array now contains two elements
console.log(scores); // [4, 5]

// The deletedScores array contains three deleted elements
console.log(deletedScores); // [1, 2, 3]

//Addition
//splice(position, 0, new_element_1, new_element_2, ...)
/*The position argument specifies the starting position in the array where new elements will be inserted.
The second argument is zero; it instructs the method not to remove elements where new ones are added.
The third, fourth and all subsequent arguments are new elements that are added to the array.*/
//For example, you have an array of color names as strings. Add a new color before the element with index 2.
const colors = ["red", "green", "blue"];

colors.splice(2, 0, "purple");
console.log(colors); // ["red", "green", "purple", "blue"]

//You can add as many elements as you want by passing the fourth, fifth argument, etc.
const colors = ["red", "green", "blue"];

colors.splice(1, 0, "yellow", "pink");
console.log(colors); // ["red", "yellow", "pink", "green", "blue"]

//Replacement
//splice(position, num, new_element_1, new_element_2, ...)
/*position indicates the position (index) of the first element to be removed
num determines the number of elements to be removed
The third, fourth and all subsequent arguments are new elements that are added to the array*/
const languages = ["C", "C++", "Java", "JavaScript"];

// Replace the element with index 1 with a new one
languages.splice(1, 1, "Python");
console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// Replace one element (with index 2) with several ones
languages.splice(2, 1, "C#", "Swift", "Go");
console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]

//concat() method
const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Monkong", "Singu"];

const allClientsWithOldFirst = oldClients.concat(newClients);
console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

const allClientsWithNewFirst = newClients.concat(oldClients);
console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
console.log(newClients); // ["Monkong", "Singu"]

