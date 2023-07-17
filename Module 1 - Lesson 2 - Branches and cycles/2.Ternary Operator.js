let type;
const age = 20;

if (age >= 18) {
  type = "adult";
} else {
  type = "child";
}

console.log(type); // "adult"

//Let's refactor by replacing if ... else with a ternary operator.
const age = 20;
const type = age >= 18 ? "adult" : "child";
console.log(type); // "adult"

/*The ternary operator should be used in simple assignment or return operations.It is bad
practice(anti - pattern) to use it to describe complex branches.*/

