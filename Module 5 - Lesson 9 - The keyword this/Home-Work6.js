class User {
  // Optional declaration of public properties
  name;
  // Mandatory declaration of private properties
  #email;

  constructor({ nam, email }) {
    this.name = nam;
    this.#email = email;
  }

  getEmail() {
    return this.#email;
  }

  changeEmail(newEmail) {
    this.#email = newEmail;
  }
}

const mango = new User({
  nam: "Mango",
  email: "mango@mail.com",
});
mango.changeEmail("mango@supermail.com");
console.log(mango.getEmail()); // mango@supermail.com
console.log(mango.name); // Error, this property is private

/*class Car {
  // Class body
}

console.log(new Car());*/
