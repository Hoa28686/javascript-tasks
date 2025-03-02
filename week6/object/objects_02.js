// task1:

console.log("1.");
const weather = { temperature: 25, humidity: 50, condition: "rainy" };

const weatherCheck = (weather) => {
  if (weather.condition == "rainy") {
    console.log("Take an umbrella!");
  }
};
weatherCheck(weather);

// task2:
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


// task 13
console.log("13.");
// task 14
console.log("14.");
// task 15
console.log("15.");
