const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line
    let result;

  for(const product of products){
    if(product.name===productName){
        result = product.price;
        break;
    }
      else { result = null }
    
  }

    return result;
  // Change code above this line
}

console.log(getProductPrice("Droid"))