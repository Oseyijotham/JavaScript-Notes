//Array Iteration
const clients = ["Mango", "Ajax", "Poly"];

for (let i = 0; i < clients.length; i += 1) {
  console.log(clients[i]);
}

//for...of loop
const clients = ["Mango", "Ajax", "Poly"];

for (const client of clients) {
  console.log(client);
}

const string = "javascript";

for (const character of string) { /*Where character is a variable that contains each value in the
array(or letter in the string) that we are iterating through*/
  console.log(character);
}

//break statement
const clients = ["Mango", "Poly", "Ajax"];
const clientNameToFind = "Poly";
let message;

for (const client of clients) {
  // At each iteration, check if the array element matches
  // client's name. If it matches, then log a message
  // and make a break so as not to look further
  if (client === clientNameToFind) {
    message = "Client name exists in the database!";
    break;
  }

  // If no match is found, create a message saying that there is no such a name
  message = "Client name does not exist in the database!";
}

console.log(message); // "Client name exists in the database!"

//Use a loop to output only numbers greater than a preset value.
const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;

// For numbers less than the threshold value, continue is triggered, the body execution stops
// and control is passed to the next iteration.
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < threshold) {
    continue;
  }

  console.log(`Number is greater than ${threshold}: ${numbers[i]}`); // 18, 29, 34
}