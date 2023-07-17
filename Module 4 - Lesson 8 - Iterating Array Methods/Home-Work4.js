const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
    order(pizzaName, makePizza, onOrderError) {
        if (this.pizzas.includes(pizzaName)){
         return makePizza(pizzaName) 
        }
        else {
            return onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`)
        }
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
pizzaPalace.order("Smoked", makePizza, onOrderError);
pizzaPalace.order("Four meats", makePizza, onOrderError);
pizzaPalace.order("Big Mike", makePizza, onOrderError);
pizzaPalace.order("Vienna", makePizza, onOrderError);

console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));