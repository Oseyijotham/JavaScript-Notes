//Scope

const global = "global";

if (true) {
  const blockA = "block A";

  // You see global + local A
  console.log(global); // 'global'
  console.log(blockA); // block A

  // Variables blockB and blockC cannot be found in the available scopes.
  // You will see a variable accessing error.
  console.log(blockB); // ReferenceError: blockB is not defined
  console.log(blockC); // ReferenceError: blockC is not defined

  if (true) {
    const blockB = "block B";

    // You see global + external A + local B
    console.log(global); // global
    console.log(blockA); // block A
    console.log(blockB); // block B

    // Variable blockC cannot be found in the available scopes.
    // You will see a variable accessing error.
    console.log(blockC); // ReferenceError: blockC is not defined
  }
}

if (true) {
  const blockC = "block C";

  // You see global + local C
  console.log(global); // global
  console.log(blockC); // block C

  // Variables blockA and blockB cannot be found in the available scopes.
  // You will see a variable accessing error.
  console.log(blockA); // ReferenceError: blockA is not defined
  console.log(blockB); // ReferenceError: blockB is not defined
}

// You see only the global one
console.log(global); // global

// Variables blockA, blockB and blockC cannot be found in the available scopes.
// You will see a variable accessing error.
console.log(blockA); // ReferenceError: blockA is not defined
console.log(blockB); // ReferenceError: blockB is not defined
console.log(blockC); // ReferenceError: blockC is not defined