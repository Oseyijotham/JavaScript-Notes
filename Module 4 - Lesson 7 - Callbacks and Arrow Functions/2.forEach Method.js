const numbers = [5, 10, 15, 20, 25];

// Classic for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Index ${i}, value ${numbers[i]}`);
}

// Iterating forEach
numbers.forEach(function (number, index) {
  console.log(`Index ${index}, value ${number}`);
});