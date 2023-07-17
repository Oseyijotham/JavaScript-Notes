//All primitive types are assigned by value, that is, with a copy made.
let a = 5;
// Assignment by value, one more cell will be created in memory,
// with the value 5 copied
let b = a;
console.log(a); // 5
console.log(b); // 5

// Change the value of a
a = 10;
console.log(a); // 10
// The value of b has not changed since it is a separate copy
console.log(b); // 5

/*Complex types, i.e. objects, arrays, functions, are assigned by reference, 
that is, a variable simply receives a reference to an already existing object.*/
const a = ["Mango"];
// Since a is an array, a reference to an existing array in memory
// is written to b. Now a and b point to the same array.
const b = a;
console.log(a); // ["Mango"]
console.log(b); // ["Mango"]

// Change the array by adding another element, using the pointer from a
a.push("Poly");
console.log(a); // ["Mango", "Poly"]

// b has also changed because b, just like a,
// contains a reference to the same space in memory
console.log(b); // ["Mango", "Poly"]

// The result is repeated
b.push("Ajax");
console.log(a); // ["Mango", "Poly", "Ajax"]
console.log(b); // ["Mango", "Poly", "Ajax"]