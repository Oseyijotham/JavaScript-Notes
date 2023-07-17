class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code below this line
getPrice() {
    return this.price;
  }

changePrice(newPrice) {
    this.price = newPrice;
  }
  
  // Change code above this line
}
const roll=new Car({ brand: "BMW", model: "X5", price: 58900 })
console.log(roll.getPrice())
console.log(roll)