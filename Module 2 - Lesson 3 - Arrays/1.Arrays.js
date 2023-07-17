//Access to elements
const clients = ["Mango", "Poly", "Ajax"];

// By specifying the element index in brackets, you get its value
console.log(clients[0]); // Mango
console.log(clients[1]); // Poly
console.log(clients[2]); // Ajax

//Overriding
const clients = ["Mango", "Poly", "Ajax"];
clients[0] = "Kiwi";
clients[1] = "Pango";
console.log(clients); // ["Kiwi", "Pango", "Ajax"]

//Array length
const clients = ["Mango", "Poly", "Ajax"];
console.log(clients.length); // 3

//Last element's index
const clients = ["Mango", "Poly", "Ajax"];
const lastElementIndex = clients.length - 1;
console.log(lastElementIndex); // 2
console.log(clients[lastElementIndex]); // "Ajax"

