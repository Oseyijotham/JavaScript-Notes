class Storage {
  constructor( items ) {
    this.items = items;
    
  }
  // Change code below this line
getItems() {
    return this.items;
  }

addItem(newItem) {
    this.items.push(newItem);
  }
  
    removeItem(itemToRemove) {
    this.items.splice(this.items.indexOf(itemToRemove), 1);
}    
    
  // Change code above this line
}


// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
console.log(storage)
