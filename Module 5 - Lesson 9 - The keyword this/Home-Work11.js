
class StringBuilder {
  constructor( initialValue ) {
    this.value = initialValue;
    
  }
  // Change code below this line
getValue() {
    return this.value;
  }

padEnd(str) {
    this.value = this.value + str;
  }
  
padStart(str) {
    this.value = str + this.value;
}    
    
padBoth(str) {
    this.value = str + this.value + str; 
}    
  // Change code above this line
}

// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
console.log(builder);
