// Change code below this line
/*function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
orderedItems.forEach((item) => { totalPrice += item })

  return totalPrice;
}
// Change code above this line*/




const calculateTotalPrice = (orderedItems) => {
     let totalPrice = 0;

    orderedItems.forEach((item) => { totalPrice += item })

  return totalPrice;
}

console.log(calculateTotalPrice([164, 48, 291]))