//The if ... else statement can check and react to the fulfillment or non-fulfillment of only one condition.

/*The else ... if block enables you to add after else another if statement with a condition. 
At the end of the chain, there can be a classic else block, which will be executed only if none 
of the conditions is converted to true.*/

let cost;
const subscription = "premium";

if (subscription === "free") {
  cost = 0;
} else if (subscription === "pro") {
  cost = 100;
} else if (subscription === "premium") {
  cost = 500;
} else {
  console.log("Invalid subscription type");
}

console.log(cost); // 500

/*After finding the first true, checks will stop and only the script corresponding to the true condition
will run.Therefore, this should be read as: looking for the first match of a condition, ignoring everything
else.*/