//Global Scope
const globalValue = 10;

console.log(globalValue); // 10

function foo() {
  console.log(globalValue); // 10
}

for (let i = 0; i < 5; i++) {
  console.log(globalValue); // 10

  if (i === 2) {
    console.log(globalValue); // 10
  }
}

//Block scope
function foo() {
  const a = 20;
  console.log(a); // 20

  for (let i = 0; i < 5; i++) {
    console.log(a); // 20

    if (i === 2) {
      console.log(a); // 20
    }
  }
}

// ❌ Error! Variable a is not available in the global scope
console.log(a);

for (let i = 0; i < 3; i++) {
  // ❌ Error! Variable a is not available in this scope
  console.log(a);
}

