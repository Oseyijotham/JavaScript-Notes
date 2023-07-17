const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    // Change code below this line
       
      let ind = this.books.indexOf(oldName); 
      this.books.splice(ind, 1, newName);

      
    // Change code above this line
    },
    
};



bookShelf.updateBook("The guardian of dreams", "New");
console.log(bookShelf.books);