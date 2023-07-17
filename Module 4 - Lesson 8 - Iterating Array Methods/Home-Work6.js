function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Change code below this line

   numbers.forEach(function (number, index) {
      if(number>value){filteredNumbers.push(number) }
});

  // Change code above this line
  return filteredNumbers;
}

console.log(filterArray([12, 24, 8, 41, 76], 20));