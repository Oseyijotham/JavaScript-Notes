/**Remember the 6 falsy values that are converted to false in
logical conversion: 0, NaN, null, undefined, empty string and false.
Everything else is converted to true.**/

//Logical AND

const age = 50;
console.log(age > 10 && age < 30); // true && false -> false
console.log(age > 80 && age < 120); // false && true -> false

/*That is, the logical AND stumbles on false and returns what it
stumbles on or the last operand(if both opweands are true) THIS IS 
BECAUSE: -When executing the logical AND, evaluating the right operand 
is not required if the left one is converted to false.*/

console.log("Mango" && ""); // true && false -> ""
console.log("Mango" && "Poly"); // true && true -> "Poly"


//Logical OR

const age = 40;
console.log(age < 10 || age > 30); // false || true -> true

/*That is, the logical OR stumbles on true and returns what it
stumbles on or the first operand(if both operands are true) THIS IS 
BECAUSE: - When executing the logical OR, evaluating the right operand 
is not required if the left one is converted to true.*/
console.log(3 || false); // 3
console.log(false || 3); // 3
console.log(3 || true); // 3
console.log(true || 3); // true

//Logical NOT
/*The ! operator converts the operand to a boolean, if necessary, 
and then inverses, i.e. replaces it with the opposite true -> false 
or false -> true.*/
console.log(!true); // false
console.log(!false); // true
console.log(!3); // !3 -> !true -> false
console.log(!"Mango"); // !"Mango" -> !true -> false
console.log(!0); // !0 -> !false -> true
console.log(!""); // !"" -> !false -> true

const isOnline = true;
const isNotOnline = !isOnline; // !isOnline -> !true -> false
