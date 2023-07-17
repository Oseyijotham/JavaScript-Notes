

const filterArray = (numbers, value) => {
    const filteredNumbers = [];
    numbers.forEach((number) => {if (number > value) {
      filteredNumbers.push(number);
    }
    })
    
    return filteredNumbers;
}

console.log(filterArray([12, 24, 8, 41, 76], 20));

