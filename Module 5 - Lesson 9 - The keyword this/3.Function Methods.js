/*There are situations where a function needs to be called in the context of an object, 
and the function is not its method. To do this, functions have call, apply and bind methods.*/

/*THIS SIMPLAY MEANS THAT IF YOU WANT TO CALL A FUNCTION SO THAT IT CAN USE PROPERTIES FROM AN OBJECT (AS ARGUMENTS 
  OR VARIABLES e.t.c) AND THE FUNCTION IS NOT INSIDE THE OBJECT(not a method of the object). To do this, functions have call, 
  apply and bind methods

call() method
foo.call(obj, arg1, arg2, ...)

The call method calls the foo function so that this will contain a reference to the obj object, and also passes such
arguments as arg1, arg2, etc.*/


  function greetGuest(greeting) {
  console.log(`${greeting}, ${this.username}.`);
}

const mango = {
  username: "Mango",
};
const poly = {
  username: "Poly",
};

greetGuest.call(mango, "Welcome"); // Welcome, Mango.
greetGuest.call(poly, "Welcome back"); // Welcome back, Poly.

/*In the example above the function greetGuest(greeting) is not inside the mango or poly objects(is not a method of the mango or poly
 objects), but it needs the value of the username property that is located within the mango and poly objects to be called
 sucessfully. So to acheive this we use the .call() method.*/

/*apply method
The apply method is similar to the call method, except that the argument passing syntax requires an array rather 
than enumeration, even if there is only one argument.

foo.call(obj, arg1, arg2, ...)

foo.apply(obj, [arg1, arg2, ...])

The apply method calls the foo function so that this will contain a reference to the obj object, and also passes 
array elements as individual arguments arg1, arg2, etc.*/

function greetGuest(greeting) {
  console.log(`${greeting}, ${this.username}.`);
}

const mango = {
  username: "Mango",
};
const poly = {
  username: "Poly",
};

greetGuest.apply(mango, ["Welcome"]); // Welcome, Mango.
greetGuest.apply(poly, ["Welcome back"]); // Welcome back, Poly.

/*bind() method
The call and apply methods call the function "on the spot", that is, immediately. However, in the case of callbacks, 
where you need not to immediately call a function, but to pass a reference to it, and with a bound context, the 
bind method should be used.

foo.bind(obj, arg1, arg2, ...)

The bind method creates and returns a copy of the foo function with the bound obj context and such arguments as 
arg1, arg2, etc. You have a copy of the function that can be passed anywhere and called whenever you want.

THIS IS SIMPLY BINDING AN OBJECT TO A FUNCTION SO THAT YOU CAN USE THE OBJECTS PROPERTIES INSIDE THE BODY OF THE FUNCTION
*/
function greet(clientName) {
  return `${clientName}, welcome to «${this.service}».`;
}

const steam = {
  service: "Steam",
};
const steamGreeter = greet.bind(steam);
steamGreeter("Mango"); // "Mango, welcome to «Steam»."

const gmail = {
  service: "Gmail",
};
const gmailGreeter = greet.bind(gmail);
gmailGreeter("Poly"); // "Poly, welcome to «Gmail»."

/*bind() and object methods
When passing object methods as callback functions, the context is not preserved. A callback is a method reference 
that is assigned as the value of a parameter called without an object.

THIS IS SIMPLY BINDING AN OBJECT TO A FUNCTION WITHIN AN OBJECT SO THAT THE FUNCTION(the one within an object) CAN BE USED 
AS A CALLBACK, AND THE CALLBACK CAN USE PROPERTIES INSIDE THE OBJECT IT IS LOCATED IN.
*/

const customer = {
  firstName: "Jacob",
  lastName: "Mercer",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage(callback) {
  // callback() is a call of the getFullName method without an object
  console.log(`Processing request from ${callback()}.`);
}

makeMessage(customer.getFullName); // Function call error

/*In strict mode, the value of this in the getFullName method will be undefined, when called as the callback() 
callback function. When accessing the firstName and lastName properties, there will be an error, since undefined 
is not an object.

The bind method is used to bind the context when passing object methods as callback functions. 
Let’s use a callback to pas not the original getFullName method, but its copy with the context 
bound to the customer object.*/
// ❌ Before
makeMessage(customer.getFullName); // Function call error

// ✅ After
makeMessage(customer.getFullName.bind(customer)); // Processing request from Jacob Mercer.
