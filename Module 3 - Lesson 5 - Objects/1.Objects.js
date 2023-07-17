//Object creation
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

//Nested properties
const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

//Dot notation to access properties
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

const bookTitle = book.title;
console.log(bookTitle); // 'The Last Kingdom'

const bookGenres = book.genres;
console.log(bookGenres); // ['historical prose', 'adventure']

const bookPrice = book.price;
console.log(bookPrice); // undefined

//Accessing nested properties
const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  hobbies: ["swimming", "music", "sci-fi"],
};

const location = user.location;
console.log(location); // object location

const country = user.location.country;
console.log(country); // 'Jamaica'

/*If the property value is an array, user.hobbies from our example is a reference to this array.
Then you can access its elements through square brackets and index, or use properties and methods.*/

const hobbies = user.hobbies;
console.log(hobbies); // ['swimming', 'music', 'sci-fi']

const firstHobby = user.hobbies[0];
console.log(firstHobby); // 'swimming'

const numberOfHobbies = user.hobbies.length;
console.log(numberOfHobbies); // 3

//Accessing properties through square brackets
/*The "square brackets" syntax is used much less often, e.g. when the property name is unknown 
or stored in a variable, for example, as a function parameter value.*/
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

const bookTitle = book["title"];
console.log(bookTitle); // 'The Last Kingdom'

const bookGenres = book["genres"];
console.log(bookGenres); // ['historical prose', 'adventure']

const propKey = "author";
const bookAuthor = book[propKey];
console.log(bookAuthor); // 'Bernard Cornwell'

//Property value change

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

book.rating = 9;
book.isPublic = false;
book.genres.push("drama");

console.log(book.rating); // 9
console.log(book.isPublic); // false
console.log(book.genres); // ['historical prose', 'adventure', 'drama']

//Adding properties
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

book.pageCount = 836;
book.originalLanguage = "en";
book.translations = ["ua", "ru"];

console.log(book.pageCount); // 836
console.log(book.originalLanguage); // 'en'
console.log(book.translations); // ['ua', 'ru']

//Shorthand properties
/*Sometimes, when creating an object, you need to take the PROPERTY VALUE from a 
variable or function parameter of the same name as the property.

The syntax in the following example is too awkward because you have to duplicate 
the name of the property and the name of the variable that stores the required value.*/
const name = "Henry Cibola";
const age = 25;

const user = {
  name: name,
  age: age,
};

console.log(user.name); // "Henry Cibola"
console.log(user.age); // 25
/*The shorthand properties syntax solves this problem by allowing the variable name to be used 
as the property name and its value as the property value.*/
const name = "Henry Cibola";
const age = 25;

const user = {
  name,
  age,
};

console.log(user.name); // "Henry Cibola"
console.log(user.age); // 25

//Computed properties
/*In some cases, when declaring an object, you need to add a property with a name that 
you do not know, as it is stored as the value of a variable or as the result of a function.

Previously, you needed to create an object and then add properties through square brackets, which 
is not very convenient.*/
const propName = "name";
const user = {
  age: 25,
};

user[propName] = "Henry Cibola";
console.log(user.name); // 'Henry Cibola'

/*The computed properties syntax helps you avoid unnecessary code and, in some cases, simplify it. 
The value of a computed property can be any valid expression.*/
const propName = "name";
const user = {
  age: 25,
  // The name of this property will be taken from the value of the variable propNam
  [propName]: "Henry Cibola",
};

console.log(user.name); // 'Henry Cibola'

//Object methods
/* AN OBJECT METHOD IS A FUNCTION THAT WORKS ON THE DATA THAT IS STORED ALONG WITH IT IN AN OBJECT*/

// ✅ Entities grouped logically and syntactically
const bookShelf = {
  books: ["The Last Kingdom", "Dream Guardian"],
  // This is an object method
  getBooks() {
    console.log("This method will return all books, the books property");
  },
  // This is an object method
  addBook(bookName) {
    console.log("This method will add a new book to the books property");
  },
};

// Method calls
bookShelf.getBooks();
bookShelf.addBook("New book");
//Such objects can be called "models". They couple data with methods to work with that data(inside an object).

//Accessing object properties in methods
/*To access an object, the method does not use the variable name, 
for example, bookShelf, but the keyword this, the context.*/

const bookShelf = {
  books: ["The Last Kingdom"],
  getBooks() {
    console.log(this);
  },
};

// Dot is preceded by the bookShelf object,
// so when the method is called, this will store a reference to it.
bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}

/* In order to access the properties of an object in methods, we refer to it through this and then, 
as usual, to its properties using dot notation.*/

const bookShelf = {
  books: ["The Last Kingdom"],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  },
  removeBook(bookName) {
    const bookIndex = this.books.indexOf(bookName);
    this.books.splice(bookIndex, 1);
  },
};

console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
bookShelf.addBook("The Mist");
bookShelf.addBook("Dream Guardian");
console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
bookShelf.removeBook("The Mist");
console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']




