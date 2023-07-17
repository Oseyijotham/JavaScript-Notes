//While loops (Pre-test loop)
let counter = 0;

while (counter < 10) {
  console.log("counter: ", counter);
  counter += 1;
}

//do...while loop (Post-test loop)
let password = "";

do {
  password = prompt("Enter a password longer than 4 characters", "");
} while (password.length < 5);

console.log("Entered password: ", password);

//for loop (Count-controlled loop)
for (initialization; condition; post-expression) {
  // statements
}

//Calculate the sum of numbers up to a certain value.
const target = 3;
let sum = 0;

for (let i = 0; i <= target; i += 1) {
  sum += i;
}

console.log(sum);

//Call to mind the a % b operation and find the remainder of division using a loop.
const max = 10;
for (let i = 0; i < max; i += 1) {
  console.log(`${max} % ${i} = `, max % i);
}

//Find the number 3. As soon as the if condition is met, the loop will stop executing (it will be interrupted).
for (let i = 0; i <= 5; i += 1) {
  console.log(i);

  if (i === 3) {
    console.log("Number 3 found, abort the loop");
    break;
  }
}
console.log("Log after loop");

//continue operator
const number = 10;

for (let i = 0; i < number; i += 1) {
  if (i % 2 === 0) {
    continue;
  }

  console.log("Odd i: ", i); // 1, 3, 5, 7, 9
}
