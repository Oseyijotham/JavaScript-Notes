/*Destructuring enables you to "unpack" the values of an object's properties
into local variables.This makes the code less "noisy".*/
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

// Destructuring
const { title, author, isPublic, rating, coverImage } = book;
console.log(coverImage); // undefined

const accessType = isPublic ? "public" : "private";
const message = `Book ${title} by author ${author} with rating ${rating} is in ${accessType} access.`;

//Default values
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
};

// Add a cover picture if it is not in the book object
const {
  title,
  coverImage = "https://via.placeholder.com/640/480",
  author,
} = book;

console.log(title); // The Last Kingdom
console.log(author); // Bernard Cornwell
console.log(coverImage); // https://via.placeholder.com/640/480

//Changing variable name
const firstBook = {
  title: "The Last Kingdom",
  coverImage:
    "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
};

const {
  title: firstTitle,
  coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
} = firstBook;

console.log(firstTitle); // The Last Kingdom
console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

const secondBook = {
  title: "The Dream of a Ridiculous Man",
};

const {
  title: secondTitle,
  coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
} = secondBook;

console.log(secondTitle); // The Dream of a Ridiculous Man
console.log(secondCoverImage); // https://via.placeholder.com/640/480
/*This reads as "Create the variable firstTitle, into which put the 
value of the title property from the firstBook object", etc.*/

//Destructuring in loops
//When iterating over an array of objects with the for...of loop, you repeatedly access the object properties.

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
];

for (const book of books) {
  console.log(book.title);
  console.log(book.author);
  console.log(book.rating);
}

/*In order to reduce the number of repetitions, you 
can destructure the object properties into local variables in the loop body.*/

for (const book of books) {
  const { title, author, rating } = book;

  console.log(title);
  console.log(author);
  console.log(rating);
}
//If the object has few properties, destructuring can be done right where the variable book is declared.
for (const { title, author, rating } of books) {
  console.log(title);
  console.log(author);
  console.log(rating);
}
//Deep destructuring
const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  name,
  tag,
  stats: { followers, views: userViews, likes: userLikes = 0 },
} = user;

console.log(name); // Jacques Gluke
console.log(tag); // jgluke
console.log(followers); // 5603
console.log(userViews); // 4827
console.log(userLikes); // 1308
