// Change code below this line
/*function getCommonElements(firstArray, secondArray) {
  const commonElements = [];

  firstArray.forEach(function (element) {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  // Change code above this line
  return commonElements;
}*/

const getCommonElements = (firstArray, secondArray) => {
    const commonElements = [];

    firstArray.forEach((element) => {if (secondArray.includes(element)) {
      commonElements.push(element);
    }
    })
    return commonElements;
}

console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));