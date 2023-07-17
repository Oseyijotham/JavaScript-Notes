function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line

  
    
      firstArray.forEach(function (number, index) {
      if(secondArray.includes(number)){commonElements.push(number) }
});

  return commonElements;
  // Change code above this line
}

console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));