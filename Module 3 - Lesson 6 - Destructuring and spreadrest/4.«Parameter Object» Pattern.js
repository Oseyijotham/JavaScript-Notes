/*The parameter object pattern solves this problem by replacing 
a set of parameters with just one, an object with named properties.*/
function doStuffWithBook(book) {
  // Doing something with object properties
  console.log(book.title);
  console.log(book.numberOfPages);
  // And so on
}

//Then, when calling, you pass one object with the necessary properties.
// ✅ Everything is clear
doStuffWithBook({
  title: "The Last Kingdom",
  numberOfPages: 736,
  downloads: 10283,
  rating: 8.38,
  isPublic: true,
});

/*Another advantage is that you can destructure the object in the book parameter. 
This can be done in the function body.*/
function doStuffWithBook(book) {
  const { title, numberOfPages, downloads, rating, isPublic } = book;
  console.log(title);
  console.log(numberOfPages);
  // And so on
}
//Or right in the function signature, it does not make any difference.
function doStuffWithBook({
  title,
  numberOfPages,
  downloads,
  rating,
  isPublic,
}) {
  console.log(title);
  console.log(numberOfPages);
  // And so on
}
