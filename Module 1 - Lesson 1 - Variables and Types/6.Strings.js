//String Concatenation

const message = "Mango " + "is" + " happy";
console.log(message); // Mango is happy

console.log(1 + "2"); // "12"
console.log(1 + "2" + 4); // "124"
console.log(1 + 2 + "4"); // "34"

// Using variables, you need to make a string with substituted values
const guestName = "Mango";
const roomNumber = 207;
const greeting =  "Welcome " + guestName + ", your room number is " + roomNumber + "!";
 
console.log(greeting); // "Welcome Mango, your room number is 207!"

/*It is very cumbersome to make strings with substituted values using 
concatenation.Template strings and interpolation come to the rescue.*/

const guestName = "Mango";
const roomNumber = 207;
const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
console.log(greeting); // "Welcome Mango, your room number is 207!"

//indexOf() method
const message = "Welcome to Bahamas!";
console.log(message.indexOf("to")); // 8
console.log(message.indexOf("hello")); // -1

//includes()
const productName = "Maintenance droid";

console.log(productName.includes("n")); // true
console.log(productName.includes("N")); // false
console.log(productName.includes("droid")); // true
console.log(productName.includes("Droid")); // false
console.log(productName.includes("Maintenance")); // true
console.log(productName.includes("maintenance")); // false

//endsWith()
const jsFileName = "script.js";
console.log(jsFileName.endsWith(".js")); // true

const cssFileName = "styles.css";
console.log(cssFileName.endsWith(".js")); // false

//replace() and replaceAll() methods

const jsFileName = "script.js";
const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
console.log(minifiedJsFileName); // "script.min.js"

const cssFileNames = "styles.css, about.css, portfolio.css";
const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"
