/* Task 1: Use "strict mode"
/*
Task: Create a function `task1` that uses `"use strict"`. 
      Inside the function, try using a variable without declaring it first.
      Catch the error and log: "Strict mode error: [error message]"

Example:
task1(); // Logs: "Strict mode error: variable is not defined"
*/
console.log("Task 1:");
function task1() {
  "use strict";
  try {
    variable = 5;
    // console.log(variable);
  } catch (error) {
    console.error("Strict mode error: " + error.message);
  }
}
task1();

/* Task 2: Declare Variables Correctly
/*
Task: Declare a constant `MAX_USERS = 100` and a `let` variable `currentUsers = 10`.
      Try changing `MAX_USERS` and catch the error.

Expected:
- The error should be caught and logged.
- `MAX_USERS` should not change.
*/
console.log("Task 2:");
function task2() {
  const MAX_USERS = 100;
  let currentUsers = 10;
  try {
    MAX_USERS = 40;
  } catch (error) {
    console.error(error.message);
  }
}
task2();
/* Task 3: Create and Log an Object
/*
Task: Create an object `userProfile` with:
      - `name`
      - `email`
      - `isAdmin` (true or false)
      Log the object.

Expected:
- Console logs: { name: "Alice", email: "alice@example.com", isAdmin: true }
*/
console.log("Task 3:");
function task3() {
  const userProfile = {
    name: "me",
    email: "me@gmail.com",
    isAdmin: false,
  };
  console.log(userProfile);
}
task3();
/* Task 4: Write a Simple Function
/*
Task: Create `calculateArea` function that returns the area of a rectangle.
      The function should take `width` and `height` as inputs.

Example:
calculateArea(5, 10) → 50
*/
console.log("Task 4:");
function calculateArea(width, height) {
  return width * height;
}
console.log("Area of width 12, height 4: " + calculateArea(12, 4));

/* Task 5: Avoid Magic Numbers
/*
Task: Define `const DISCOUNT = 0.1`. 
      Write `applyDiscount(price)` that reduces the price by the discount.

Example:
applyDiscount(100) → 90
*/
console.log("Task 5:");
const DISCOUNT = 0.1;
function applyDiscount(price) {
  price -= price * DISCOUNT;
  return price;
}
const newPrice = applyDiscount(100);
console.log("New price: " + newPrice);

/* Task 6: Write Useful Comments
/*
Task: Write a function `greetUser(name)` that returns a greeting.
      Use a meaningful comment explaining the function.

Example:
greetUser("Bob") → "Hello, Bob!"
*/
console.log("Task 6:");
function greetUser(name) {
  return `Have a nice day, ${name}!`;
}
console.log(greetUser("^o^"));

/* Task 7: Refactor Unclear Code
/*
Task: Improve this function to make it clear and readable.

Before:
function f(n){return n<0 ? 'negative' : 'positive';}

After:
- Use better naming and proper formatting.
*/
console.log("Task 7:");
function checkNumber(n) {
  if (n < 0) {
    return `negative`;
  } else {
    return `positive`;
  }
}

console.log(checkNumber(2));
console.log(checkNumber(0));
console.log(checkNumber(-2));
console.log(checkNumber(2));
/* Task 8: Fix Formatting
/*
Task: Rewrite this code to make it **formatted correctly**.

Before:
let x=10; function example(){console.log(x);}

After:
- Proper indentation and spacing.
*/
console.log("Task 8:");
let x = 10;
function example() {
  console.log(x);
}
example();
