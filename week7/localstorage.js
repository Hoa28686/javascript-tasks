// important
// run 'npm i node-localstorage' to use localStorage in node.js

let LocalStorage = require("node-localstorage").LocalStorage,
  localStorage = new LocalStorage("./scratch");
/* Task 1
Store a string `"Hello, LocalStorage!"` in LocalStorage under the key `"message"`.
Retrieve it and log it to the console.
*/
console.log("1. ");
localStorage.setItem("message", "Hello, LocalStorage!");
const message = localStorage.getItem("message");
console.log(message);

/* Task 2
Create an object `userSettings` with:
- `theme` ("dark" or "light")
- `language` ("English", "Spanish", etc.)

Convert it to a JSON string and store it in LocalStorage.
Retrieve it, parse it, and log the `theme` property.
*/
console.log("2. ");
const userSettings = { theme: "dark", language: "English" };
localStorage.setItem("user", JSON.stringify(userSettings));
const user = localStorage.getItem("user");
const userObj = JSON.parse(user);
console.log(userObj.theme);

/* Task 3
Define an array `favoriteBooks` with at least three book objects (`title` and `author`).
Store the array in LocalStorage.
Retrieve and parse it, then log the titles of all books.
*/

console.log("3. ");
const favoriteBooks = [
  { title: "Atomic Habits", author: "James Clear" },
  { title: "The Psychology of Money", author: "Morgan Housel" },
  { title: "When You Know What You Don't Want", author: "Ann Fleming" },
];

localStorage.setItem("books", JSON.stringify(favoriteBooks));
const books = JSON.parse(localStorage.getItem("books"));
console.log(books.map((b) => b.title));

/* Task 4
Write a function `saveToLocalStorage(key, object)` that:
- Converts an object to JSON.
- Stores it in LocalStorage under the provided key.
Test it by saving an object and retrieving it.
*/
console.log("4. ");
function saveToLocalStorage(key, object) {
  localStorage.setItem(key, JSON.stringify(object));
}
const setting = { theme: "light", language: "English" };
saveToLocalStorage("my_laptop", setting);
const my_laptop = localStorage.getItem("my_laptop");
console.log(JSON.parse(my_laptop));

/* Task 5
Write a function `getFromLocalStorage(key)` that:
- Retrieves a value from LocalStorage.
- Parses it if it's JSON.
- Logs the retrieved value.
*/

console.log("5. ");

/* Task 6
Create an object `userProfile` with:
- `username`
- `email`
- `preferences` (an object with `theme` and `notifications`)

Save it to LocalStorage.
Retrieve and update the `theme` property to `"dark mode"`, then log the updated object.
*/

console.log("6. ");

/* Task 7
Define an object `shoppingList` with an array `items` (strings).
Save it to LocalStorage.
Write a function `addItemToList(item)` that:
- Retrieves `shoppingList` from LocalStorage.
- Adds a new item.
- Saves the updated list back to LocalStorage.
- Logs the updated list.
*/

console.log("7. ");

/* Task 8
Create a counter object with:
- `count` (starting at 0)
Store it in LocalStorage.
Write a function `incrementCounter()` that:
- Retrieves the counter.
- Increases `count` by 1.
- Saves the updated counter.
- Logs the new count.
*/

console.log("8. ");

/* Task 9
Create an array `tasks`, where each task is an object (`id`, `description`, `completed`).
Save it to LocalStorage.
Write a function `markTaskComplete(taskId)` that:
- Retrieves `tasks` from LocalStorage.
- Finds the task with the given ID and sets `completed` to `true`.
- Saves the updated tasks.
- Logs the updated list.
*/

console.log("9. ");
/* Task 10
Write a function `clearLocalStorage()` that removes all data stored in LocalStorage.
Call it and confirm LocalStorage is empty.
*/

console.log("10. ");
