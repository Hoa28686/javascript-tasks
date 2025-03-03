// task1:
// Create an object `weather` that contains properties `temperature`, `humidity`, and `condition` (e.g., "Sunny", "Rainy").
// Write a function that logs `"Take an umbrella!"` if it's rainy.
console.log("1.");
const weather = { temperature: 25, humidity: 50, condition: "rainy" };

const weatherCheck = (weather) => {
  if (weather.condition == "rainy") {
    console.log("Take an umbrella!");
  }
};
weatherCheck(weather);

// task2:
// Define an object named `shoppingCart` that contains an array of items.
// Each item has `name`, `price`, and `quantity`.
// Write a function that calculates the total price of all items in the cart.

console.log("2. Total price of all items in the cart:");
const shoppingCart = {
  items: [
    { name: "fish", price: 6.7, quantity: 2 },
    { name: "carrot", price: 0.99, quantity: 1 },
    { name: "kale", price: 3.5, quantity: 5 },
    { name: "orange", price: 4.2, quantity: 3 },
    { name: "rice", price: 1.99, quantity: 1 },
  ],
};

function totalPrice() {
  const sum = shoppingCart.items.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );
  return Number(sum.toFixed(2));
}
console.log(totalPrice());
// need to have () when calling totalPrice because it's a function. not a variable

// task 3
// Create an array of objects named `restaurants`, each with properties `name`, `cuisineType`, and `rating`.
// Write a function that returns only the restaurants with a rating of 4 or higher.

console.log("3. Restaurants with a rating of 4 or higher:");
const restaurants = [
  { name: "PizzaInn", cuisineType: "Italian", rating: 3.7 },
  { name: "Bao Dimsum", cuisineType: "Cantonese", rating: 4.5 },
  { name: "Pho Viet", cuisineType: "Vietnamese", rating: 4.3 },
  { name: "Haidilao", cuisineType: "Chinese", rating: 4.0 },
  { name: "Lotteria", cuisineType: "Fast Food", rating: 4.1 },
];
const highRating = () => {
  return restaurants.filter((r) => r.rating >= 4);
};
console.log(highRating());

// task 4
// Define an object named `bankAccount` with properties `accountHolder`, `balance`, and `transactions` (an array of numbers).
// Write a function that calculates the total balance after all transactions.

console.log("4. Total balance after all transactions: ");
const bankAccount = {
  accountHolder: "Harry Potter",
  balance: 1250.6,
  transactions: [200, 20, -15, -2, 35],
};
const balance = () => {
  return bankAccount.transactions.reduce(
    (sum, t) => sum + t,
    bankAccount.balance
  );
};

console.log(balance());

// task 5
// Create an array `students` where each student has `name`, `scores` (array of numbers), and `averageScore` (initially null).
// Write a function that calculates and updates each student's `averageScore`.
console.log("5. Calculates and updates each student's `averageScore`:");
const students = [
  { name: "Mikey", scores: [3, 5.6, 8, 7.5], averageScore: null },
  { name: "Donald", scores: [4, 6, 8.7, 9], averageScore: null },
  { name: "Tom", scores: [5, 5.3, 7.9, 2], averageScore: null },
  { name: "Jerry", scores: [3.5, 7.4, 6.8, 9.5], averageScore: null },
];
const average = () => {
  students.forEach((student) => {
    const avg =
      student.scores.reduce((sum, score) => sum + score, 0) /
      student.scores.length;
    student.averageScore = Number(avg.toFixed(2));
  });
};
average();
console.log(students);

// task 6
// Define an array named `courses`, each containing `courseName`, `instructor`, and `studentsEnrolled`.
// Write a function that logs the course name of any course with more than 30 students.

console.log("6.");
const courses = [
  { courseName: "Javascript", instructor: "Nobita", studentsEnrolled: 20 },
  { courseName: "Python", instructor: "Doraemon", studentsEnrolled: 25 },
  { courseName: "HTML", instructor: "Shizuka", studentsEnrolled: 30 },
  { courseName: "UI design", instructor: "Suneo", studentsEnrolled: 35 },
  { courseName: "Singing", instructor: "Gian", studentsEnrolled: 40 },
  { courseName: "Laravel", instructor: "Dekisugi", studentsEnrolled: 51 },
];

const more30 = (courses) => {
  const Arr = [];
  courses.forEach((c) => {
    if (c.studentsEnrolled > 30) {
      Arr.push(c.courseName);
    }
  });
  console.log(`Courses that have more than 30 students: ${Arr.join(", ")}.`);
};
more30(courses);

// task 7
// Create an object `pet` with properties `species`, `name`, and `isVaccinated`.
// Write a function that returns `"Vaccination required"` if the pet is not vaccinated.
console.log("7.");

const pet = { species: "Dog", name: "Steam Buns", isVaccinated: true };

const checkVaccine = () => {
  if (!pet.isVaccinated) {
    return "Vaccination required";
  } else {
    return "No vaccination needed";
  }
};
console.log(checkVaccine());

// task 8
// Define an object named `city` with properties `name`, `population`, and `landmark`.
// Write a function that logs `"This is a big city!"` if the population exceeds 1,000,000.
console.log("8.");
const city = {
  name: "Ho Chi Minh city",
  population: 8900000,
  landmark: "Saigon Opera House",
};
const checkPopulation = () => {
  city.population > 1000000
    ? console.log("This is a big city!")
    : console.log("");
};
checkPopulation();

// task 9
// Create an array `transactions`, where each transaction is an object with `type` ("credit" or "debit") and `amount`.
// Write a function that calculates the total balance after processing all transactions.
console.log("9.");
const transactions = [
  { type: "credit", amount: 30 },
  { type: "credit", amount: 300 },
  { type: "dedit", amount: 230 },
  { type: "credit", amount: 350 },
  { type: "dedit", amount: 706 },
];

const totalBalance = () => {
  return transactions.reduce((sum, t) => sum + t.amount, 0);
};
console.log(`Total balance: ${totalBalance()}`);

// task 10
// Define an object named `foxPack` containing an array of fox objects.
// Each fox has `name`, `age`, and `furColor`.
// Write a function that filters out only the foxes that are younger than 2.

console.log("10.");
const foxPack = {
  foxes: [
    { name: "Ran", age: 3, furColor: "orange" },
    { name: "Conan", age: 2, furColor: "blue" },
    { name: "Mouri", age: 1, furColor: "brown" },
    { name: "Haibara", age: 1, furColor: "yellow" },
    { name: "Kaito", age: 4, furColor: "white" },
  ],
};
const youngFox = () => {
  return foxPack.foxes.filter((f) => f.age < 2);
};

console.log(youngFox());

// task 11
// Create an object `gameCharacter` with properties `name`, `level`, `health`, and `inventory` (an array).
// Write a function that logs all items in the character’s inventory.
console.log("11. All items in the character’s inventory:");
const gameCharacter = {
  name: "Princess",
  level: 15,
  health: 200,
  inventory: ["shield", "wand", "broomstick", "invisibility cloak"],
};
const int = () => {
  console.log(gameCharacter.inventory.join(", "));
};
int();

// task 12
// Define an array named `employees`, where each employee has a `name`, `role`, and `workingHours`.
// Write a function that finds and logs employees who work more than 40 hours.

console.log("12.");
const employees = [
  { name: "Harry", role: "Front-end developer", workingHours: 15 },
  { name: "Hermione", role: "Software developer", workingHours: 47 },
  { name: "Ron", role: "Project manager", workingHours: 38 },
  { name: "Draco", role: "Graphic designer", workingHours: 45 },
];
const work40 = () => {
  const workAlot = employees.filter((e) => e.workingHours > 40);
  console.log(`Employees who work more than 40 hours:`);
  workAlot.forEach((e) => {
    console.log(
      `- Name: ${e.name}, role: ${e.role}, works ${e.workingHours} hours.`
    );
  });
};
work40();


/* Task 13
Create an array `musicAlbums` where each album has `title`, `artist`, and `releaseYear`.
Write a function that logs albums released after 2000.
*/

console.log("13.");
const musicAlbums=[
  { title: "Fearless", artist: "Taylor Swift", releaseYear: 2008 },
  { title: "Speak Now", artist: "Taylor Swift", releaseYear: 2010 },
  { title: "Sweetener", artist: "Ariana Grande", releaseYear: 2018 },
  { title: "Thank U, Next", artist: "Ariana Grande", releaseYear: 2019 },
  { title: "Just The Way You Are", artist: "Bruno Mars", releaseYear: 2010 },
  { title: "Shape of You", artist: "Ed Sheeran", releaseYear: 2017 },
  { title: "I Will Always Love You", artist: "Whitney Houston", releaseYear: 1992 }
]
const after2000=()=>{
  const filtered= musicAlbums.filter(a=> a.releaseYear>2000);
  console.log('Albums released after 2000: ')
  filtered.forEach(a=> console.log(`${a.title} by ${a.artist} in ${a.releaseYear}`));
}
after2000();

// task 14
// Define an array named `cars`, each containing `brand`, `model`, and `horsepower`
// Write a function that finds and returns the car with the highest horsepower.
// */
console.log("14. Highest horsepower car: ");
const cars=[
  { brand: "Toyota", model: "Corolla", horsepower: 139 },
  { brand: "Honda", model: "Civic", horsepower: 158 },
  { brand: "Hyundai", model: "Elantra", horsepower: 147 },
  { brand: "Volkswagen", model: "Golf GTI", horsepower: 241 },
  { brand: "BMW", model: "M3", horsepower: 473 },
  { brand: "Mercedes-Benz", model: "C-Class", horsepower: 255 },
  { brand: "Kia", model: "K5", horsepower: 180 }
]
const maxPower=()=>{
  const power=cars.map(c=> c.horsepower);
  const max=cars.filter(c=>c.horsepower===Math.max(...power));
  return max[0];
}
console.log(maxPower());


/* Task 15
Create an array of `airports`, where each airport has `name`, `country`, and `flightsPerDay`.
Write a function that finds the airport with the most daily flights.
*/
console.log("15. Airport that has the most daily flights: ");
const airports = [
  { name: "Noi Bai International Airport", country: "Vietnam", flightsPerDay: 500 },
  { name: "Suvarnabhumi Airport", country: "Thailand", flightsPerDay: 800 },
  { name: "Incheon International Airport", country: "South Korea", flightsPerDay: 1200 },
  { name: "Changi Airport", country: "Singapore", flightsPerDay: 1000 }
];

const mostFlight=()=>{
  return airports.reduce((max,a)=>(max.flightsPerDay>a.flightsPerDay)? max:a);
}
console.log(mostFlight());