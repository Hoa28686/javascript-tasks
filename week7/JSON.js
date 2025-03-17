/* Task 1
Create a JavaScript object named `student` with properties:
- `name`
- `age`
- `grade`
Convert the object into a JSON string and log it to the console.
*/
console.log("1. ");
const student = { name: "Ran", age: 21, grade: 9.2 };
const studentString = JSON.stringify(student);
console.log(studentString);

/* Task 2
Take the JSON string from Task 1 and convert it back into a JavaScript object.
Log the `name` property of the converted object.
*/
console.log("2. ");
const studentObj = JSON.parse(studentString);
console.log(studentObj.name);

/* Task 3
Create an array named `classroom`, where each element is an object representing a student.
Each student object should have properties for `name`, `age`, and `grade`.
Convert the array into a JSON string and log it to the console.
*/

console.log("3. ");
const classroom = [
  { name: "Ran", age: 21, grade: 9.2 },
  { name: "Conan", age: 10, grade: 9.5 },
  { name: "Mouri", age: 34, grade: 8.1 },
  { name: "Hattori", age: 21, grade: 8.5 },
  { name: "Haibara", age: 9, grade: 8.9 },
];
const classroomString = JSON.stringify(classroom);
console.log(classroomString);
/* Task 4
Take the JSON string from Task 3, convert it back into a JavaScript array,
and log the names of all students in the classroom.
*/
console.log("4. ");
const classroomObj = JSON.parse(classroomString);
console.log(classroomObj.map((s) => s.name));

/* Task 5
Create an object named `weatherReport` with the following properties:
- `temperature`
- `humidity`
- `conditions` (e.g., "Sunny", "Rainy")

Convert the object into a JSON string and store it in a variable named `weatherJSON`.
Then, parse the JSON string back into an object and log the `conditions` property.
*/
console.log("5. ");
const weatherReport = { temperature: 35.2, humidity: 50, conditions: "sunny" };
const weatherJSON = JSON.stringify(weatherReport);
const weatherReportObj = JSON.parse(weatherJSON);
console.log(weatherReportObj.conditions);

/* Task 6
Define an array named `movies`, where each movie has:
- `title`
- `director`
- `rating`

Convert this array into a JSON string, then parse it back into a JavaScript object.
Log all movie titles with a rating higher than 8.
*/

console.log("6. ");
const movies = [
  { title: "Inception", director: "Christopher Nolan", rating: 8.8 },
  { title: "The Godfather", director: "Francis Ford Coppola", rating: 9.2 },
  { title: "Interstellar", director: "Christopher Nolan", rating: 8 },
];
const movieString = JSON.stringify(movies);
const movieObj = JSON.parse(movieString);
console.log(movieObj.filter((m) => m.rating > 8));

/* Task 7
Write a function `filterHighRatedMovies(jsonString)` that:
- Takes a JSON string representing an array of movie objects.
- Converts it into a JavaScript array.
- Returns a new array containing only movies with a rating higher than 8.
*/
console.log("7. ");
function filterHighRatedMovies(jsonString) {
  const movies = JSON.parse(jsonString);
  return movies.filter((m) => m.rating > 8);
}

console.log(filterHighRatedMovies(movieString));
/* Task 8
Define an object named `shoppingCart` with:
- `items` (an array of product objects, each with `name` and `price`)
Convert `shoppingCart` into a JSON string and log it to the console.
*/
console.log("8. ");
const shoppingCart = {
  items: [
    { name: "fish", price: 6.7 },
    { name: "carrot", price: 0.99 },
    { name: "kale", price: 3.5 },
    { name: "orange", price: 4.2 },
    { name: "rice", price: 1.99 },
  ],
};
const shoppingCartString = JSON.stringify(shoppingCart);
console.log(shoppingCartString);

/* Task 9
Write a function `totalCartValue(jsonString)` that:
- Takes a JSON string representing a shopping cart.
- Converts it into a JavaScript object.
- Returns the total price of all items in the cart.
*/

console.log("9. ");
function totalCartValue(jsonString) {
  const shoppingObj = JSON.parse(jsonString);
  const sum = shoppingObj.items.reduce((total, item) => total + item.price, 0);
  return sum;
}
console.log(`Price of all items: ${totalCartValue(shoppingCartString)}`);

/* Task 10
Create an object named `gameProgress` with:
- `level`
- `score`
- `livesRemaining`

Convert the object into a JSON string and log it.
Parse the JSON back into an object and update the `score` property by adding 100 points.
Log the updated object.
*/

console.log("10. ");
const gameProgress = { level: 50, score: 34, livesRemaining: 3 };
const gameString = JSON.stringify(gameProgress);

console.log(gameString);

const gameObj = JSON.parse(gameString);
gameObj.score = gameObj.score + 100;
console.log(gameObj);
