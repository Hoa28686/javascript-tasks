/* Task 1
Create a JavaScript array named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`.
Add at least two book objects to this collection.
*/
let library = [
  { title: "Atomic Habits", author: "James Clear", yearPublished: 2018 },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    yearPublished: 2020,
  },
];

/* Task 2
Access the `title` of the first book in the `library` collection and log it to the console.
Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.
*/
console.log("2.");
console.log(library[0].title);
library[1].yearPublished = 2022;
console.log(library[1].yearPublished);

/* Task 3
Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.
*/

// Your code here
console.log("3.");
library[0].genres = ["Self-helf", "Psychology"];
library[0]["isAvailable"] = true;
console.log(library);

/* Task 4
Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.
*/

// Your code here
console.log("4.");
function Book(title, author, yearPublished, genres) {
  this.title = title;
  this.author = author;
  this.yearPublished = yearPublished;
  this.genres = genres;
  return { title, author, yearPublished, genres };
}
const book3 = new Book("The Code Chronicles", "Alex J. Harper", 2023, [
  "Technology",
  "Programming",
  "Self-Improvement",
]);
library.push(book3);
console.log(library);
/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
*/
console.log("5.");
function createBook(title, author, yearPublished, genres) {
  return {
    title: title,
    author: author,
    yearPublished: yearPublished,
    genres: genres,
  };
}

const book4 = createBook("All the Light We Cannot See", "Anthony Doerr", 2021, [
  "Historical Fiction",
  "War Fiction",
  "Literary Fiction",
  "Coming-of-Age",
]);
console.log(book4);
/* Task 6
Convert the `library` collection to a JSON string and log it to the console.
Parse the JSON string back into a JavaScript object and log the first book's title to the console.
*/
console.log("6.");
library = JSON.stringify(library);
console.log(library);

library = JSON.parse(library);
console.log(library);
/* Task 7
Create an array named `students`, where each student has a `name`, `age`, and `grade`.
Log the name of any student who has a grade higher than 90.
*/

// Your code here
console.log("7. Name of student who has a grade higher than 90:");
const students = [
  { name: "Miria", age: 18, grade: 90 },
  { name: "Ran", age: 19, grade: 98 },
  { name: "Sara", age: 17, grade: 70 },
];
students.forEach((s) => {
  if (s.grade > 90) {
    console.log(s.name);
  }
});
/* Task 8
Define an object named `car` with properties for `brand`, `model`, `year`, and `isElectric`.
Use a function to check if the car is electric. If it is, log `"This car is eco-friendly!"`. Otherwise, log `"This car runs on fuel."`
*/
console.log("8.");
const car = {
  brand: "Tesla",
  model: "Model S",
  year: 2022,
  isElectric: true,
};

function checkCar(car) {
  if (car.isElectric) {
    console.log("This car is eco-friendly!");
  } else {
    console.log("This car runs on fuel.");
  }
}
checkCar(car);

/* Task 9
Create a `movies` array where each movie is an object with properties for `title`, `director`, and `rating`.
Write a loop that logs all movie titles with a rating higher than 8.
*/
console.log("9.");
const movies = [
  { title: "Inception", director: "Christopher Nolan", rating: 8.8 },
  { title: "The Godfather", director: "Francis Ford Coppola", rating: 9.2 },
  { title: "Interstellar", director: "Christopher Nolan", rating: 8 },
];
movies.forEach((m) => {
  if (m.rating > 8) {
    console.log(m.title);
  }
});
/* Task 10
Write a function `findOldestCar` that takes an array of car objects and returns the car with the earliest `year`.
*/
console.log("10.");
const cars = [
  { brand: "Tesla", model: "Model S", year: 2022, isElectric: true },
  { brand: "Toyota", model: "Corolla", year: 2020, isElectric: false },
  { brand: "Ford", model: "Mustang Mach-E", year: 2021, isElectric: true },
  { brand: "BMW", model: "X5", year: 2019, isElectric: false },
  { brand: "Audi", model: "e-tron", year: 2023, isElectric: true },
];
function findOldestCar(cars) {
  cars.sort((c1, c2) => c1.year - c2.year);
  return cars[0];
}

console.log(findOldestCar(cars));
/* Task 11
Define a `userProfiles` array containing objects representing users.
Each user should have a `username`, `email`, and `isAdmin` property.
Write a function that filters and returns only the users who are administrators.
*/
console.log("11.");
const userProfiles = [
  { username: "ran_mouri", email: "ran@gmail.com", isAdmin: false },
  { username: "admin_user", email: "admin@gamil.com", isAdmin: true },
  { username: "black_smith", email: "smith@gamil.com", isAdmin: false },
];
function adminCheck() {
  const admin = userProfiles.filter((u) => u.isAdmin);
  return admin;
}
console.log(adminCheck());
/* Task 12
Define an array named `orders`, where each order contains `orderId`, `customerName`, `totalAmount`, and `status` (either "pending" or "completed").
Write a function that returns only the completed orders.
*/
console.log("12.");
const orders = [
  {
    orderId: 101,
    customerName: "Ran",
    totalAmount: 250.75,
    status: "completed",
  },
  {
    orderId: 102,
    customerName: "Donald",
    totalAmount: 89.99,
    status: "pending",
  },
  {
    orderId: 103,
    customerName: "Princess",
    totalAmount: 150.5,
    status: "completed",
  },
  { orderId: 104, customerName: "Park", totalAmount: 300.0, status: "pending" },
];
function complete(orders) {
  return orders.filter((o) => o.status == "completed");
}
console.log(complete(orders));

/* Task 13
Create an object named `smartphone` with properties for `brand`, `model`, `batteryLife`, and `is5GEnabled`.
Write a function that logs `"This phone supports 5G!"` if `is5GEnabled` is `true`, otherwise logs `"This phone does not support 5G."`
*/

// Your code here
console.log("13.");
const smartphone = {
  brand: "Samsung",
  model: "Galaxy S23",
  batteryLife: "24 hours",
  is5GEnabled: true,
};
const check5G = (smartphone) => {
  smartphone.is5GEnabled
    ? console.log("This phone supports 5G.")
    : console.log("This phone does notsupport 5G.");
};
check5G(smartphone);
/* Task 14
Define an object named `fox` with properties `name`, `age`, and `habitat`.
Write a function that logs `"This fox is young"` if its age is under 3, `"This fox is an adult"` if 3 or older.
*/
console.log("14.");
const fox = {
  name: "Red Fox",
  age: 3,
  habitat: "Forests and grasslands",
};

const checkAge = (fox) => {
  fox.age < 3
    ? console.log("This fox is young")
    : console.log("This fox is an adult");
};
checkAge(fox);
/* Task 15
Define an array named `employees`, where each employee has `name`, `position`, and `salary`.
Write a function that calculates the total salary of all employees in the company.
*/

console.log("15.");
const employees = [
  { name: "Ran", position: "Software Engineer", salary: 80000 },
  { name: "Charlie", position: "Project Manager", salary: 95000 },
  { name: "Shinichi", position: "UI/UX Designer", salary: 70000 },
  { name: "Suneo", position: "DevOps Engineer", salary: 85000 },
];
function totalSalary() {
  let sum = 0;
  employees.forEach((e) => (sum += e.salary));
  return sum;
}
console.log(totalSalary());
