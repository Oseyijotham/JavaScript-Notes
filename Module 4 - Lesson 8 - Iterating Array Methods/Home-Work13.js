/*function changeEven(numbers, value) {
  // Change code below this line
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      numbers[i] = numbers[i] + value;
    }
  }
  // Change code above this line
    return numbers;
}
console.log(changeEven([17, 24, 68, 31, 42], 100))*/

function changeEven(numbers, value) {
    // Change code below this line
    let emtyArry = [];
    for (let i = 0; i < numbers.length; i += 1) {
        if (numbers[i] % 2 === 0) {
            emtyArry[i] = numbers[i] + value;
            //emtyArry.push(emtyArry[i]);
        }
        else{emtyArry[i] = numbers[i]}
        // Change code above this line
    }
    return emtyArry;
}
console.log(changeEven([17, 24, 68, 31, 42], 100))