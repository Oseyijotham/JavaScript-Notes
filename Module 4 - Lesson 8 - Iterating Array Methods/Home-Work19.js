const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line

const evenNumbers = numbers.filter(value => value % 2 === 0)

const oddNumbers = numbers.filter(value => value % 2 === 1)

console.log(oddNumbers);