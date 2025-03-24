/* Task 1
Create a constructor function `User` that takes `username` and `email` as parameters.
It should create an object with these properties and a method `showInfo` that logs user details.
Instantiate a new user and call `showInfo()`.
*/

console.log("1.");
function User(username, email) {
  this.username = username;
  this.email = email;
  this.showInfo = function () {
    console.log(`Username: ${this.username}, email: ${this.email}`);
  };
}
const user1 = new User("me", "me@gmail.com");
user1.showInfo();

/* Task 2
Modify Task 1: Use an ES6 `class` instead of a constructor function to define `User`.
Add a method `changeEmail(newEmail)` that updates the user's email.
*/
console.log("2.");
class User_task2 {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
  showInfo() {
    console.log(`Username: ${this.username}, email: ${this.email}`);
  }
  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

const user2 = new User_task2("me", "me@gmail.com");
user2.changeEmail("me_update@gmail.com");
user2.showInfo();

/* Task 3
Create an object `theme` with properties `name` (light or dark) and `isActive`.
Add a button in HTML. When clicked, toggle the theme between light and dark, updating the `isActive` property.
*/
console.log("3.");
const theme = { name: "light", isActive: false };
const toggleBtn = document.querySelector("#toggleBtn");

toggleBtn.addEventListener("click", toggle);
function toggle() {
  if (theme.isActive) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    toggleBtn.textContent = "Switch to dark theme";
    theme.isActive = false;
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    toggleBtn.textContent = "Switch to light theme";
    theme.isActive = true;
  }
}
/* Task 4
Create an object `counter` with a `value` property.
Add two buttons in HTML: one to increase `value`, another to decrease it.
Display `value` in an HTML element and update it dynamically when buttons are clicked.
*/
console.log("4.");
const counter = { value: 0 };
const counterValue = document.querySelector("#counter-value");
const add = document.querySelector("#add");
const remove = document.querySelector("#remove");
const display = () => {
  counterValue.textContent = counter.value;
};
display();
add.addEventListener("click", () => {
  counter.value += 1;
  display();
});
remove.addEventListener("click", () => {
  counter.value -= 1;
  display();
});

/* Task 5
Create an object `product` with `name`, `price`, and `quantity`.
Add an input field in HTML where the user can enter a quantity to purchase.
Update the `quantity` property and display the total price dynamically.
*/
console.log("5.");
const product = { name: "Orange", price: 3.5, quantity: 0 };
const quant = document.querySelector("#quantity");
const pro = document.querySelector("product");
const pri = document.querySelector("price");
const totalValue = document.querySelector("#total-value");

pro.textContent = product.name;
pri.textContent = product.price + "$/kg";

const totalPrice = () => {
  product.quantity = Number(quant.value);
  let total = product.quantity * product.price;
  totalValue.textContent = `Total price ${total}`;
};

quant.addEventListener("keyup", totalPrice);

/* Task 6
Define a `Task` constructor that takes `title`, `description`, and `completed`.
Add a button in HTML that, when clicked, adds a new `Task` object to a `tasks` array and displays it on the page.
*/

console.log("6.");
const taskName = document.querySelector("#task-name");
const taskDescription = document.querySelector("#task-description");
const displayBtn = document.querySelector("#display");
const ul = document.querySelector("#task-list");

function Task(title, description, completed) {
  this.title = title;
  this.description = description;
  this.completed = completed;
}

const tasks = [];
function displayTask() {
  const task = new Task(
    taskName.value.trim().toLowerCase(),
    taskDescription.value.trim().toLowerCase(),
    false
  );
  tasks.push(task);

  // clear input field
  taskName.value = "";
  taskDescription.value = "";

  // create new list and checkbox
  let li = document.createElement("li");
  let box = document.createElement("input");
  box.type = "checkbox";

  //update tasks array if checkbox is checked
  box.addEventListener("change", () => {
    task.completed = box.checked;
    console.log(tasks);
  });

  li.style.listStyle = "none";
  li.innerHTML = ` <strong>${task.title}</strong> - ${task.description}`;

  li.prepend(box);
  ul.appendChild(li);
}
displayBtn.addEventListener("click", displayTask);

/* Task 7
Create an object `weatherApp` with a method `fetchWeather(city)`.
Use `fetch` to get weather data from an API and display it in an HTML element.
(API: OpenWeather or any free weather API)
*/

console.log("7.");
const weatherApp = {
  fetchWeather: function (city) {
    fetchFinal(city);
  },
};

const search = document.querySelector("#search");
const searchBtn = document.querySelector("#searchBtn");
const content = document.querySelector("#content");
const city = document.querySelector(".city");
const country = document.querySelector(".country");
const time = document.querySelector(".time");
const description = document.querySelector(".description");
const temp = document.querySelector(".temperature");
const feel = document.querySelector(".feel");
const uv = document.querySelector(".uv");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const visibility = document.querySelector(".visibility");

const apikey = "a03dd7ed591a3c1577b7829c371b6cfb";

// initialize lat and lon coordinates
let lat = 0;
let lon = 0;

//get lat and lon of city name

function fetchFinal(cityName) {
  const geo = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=4&appid=${apikey}`;

  fetch(geo)
    .then((response) => response.json())
    .then((data) => {
      if (data.length !== 0) {
        lat = data[0].lat;
        lon = data[0].lon;


        //fetch weather data according to lat and lon
        fetchCoor();
      } else {
        content.innerHTML = "City not found.";
        search.value='';
      }
    })
    .catch(() => {
      // console.log("Error fetching lat/lon coordinates:", error);
      content.innerHTML = "Error fetching lat and lon coordinates";
    });
}

//fetch weather data according to lat and lon
function fetchCoor() {
  const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;

  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      // console.log("Weather data:", data);
      displayWeather(data);
    })
    .catch(() => {
      console.log("Error fetching weather data:", error);
      content.innerHTML = "Can't get weather data";
    });
}

function displayWeather(data) {
  search.value='';
  city.innerHTML = data.name + ", ";
  country.innerHTML = data.sys.country;
  time.innerHTML = new Date(data.dt * 1000);
  temp.innerHTML = data.main.temp.toFixed();
  feel.innerHTML = data.main.feels_like.toFixed() + "°C";
  description.innerHTML = data.weather[0].description;
  humidity.innerHTML = data.main.humidity + "%";
  wind.innerHTML = (data.wind.speed * 3.6).toFixed() + " km/h";
  visibility.innerHTML = data.visibility / 1000 + " km";
}


searchBtn.addEventListener("click", () => {
 
  const cityName = search.value.trim().toLowerCase();
  if (cityName !== "") {
    weatherApp.fetchWeather(cityName);
  }
});
/* Task 8
Create a constructor function `Car` that takes `brand`, `model`, and `year`.
In the constructor, add a method `age()` that calculates the car’s age.
Instantiate a new `Car` and display its age on the webpage.
*/
console.log("8.");
function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.age = function () {
    return new Date().getFullYear() - this.year;
  };
}
const car1 = new Car("Tesla", "Model S", 2022);
const task8 = document.querySelector("#task8");
task8.innerHTML = `
Car: ${car1.brand}, ${car1.model}, ${car1.year}. Age: ${car1.age()}`;

/* Task 9
Create an array `users` where each user has `name` and `score`.
Add a button in HTML that sorts the users by score in descending order and updates the displayed list.
*/

console.log("9.");
const users = [
  { name: "Ran", score: 95 },
  { name: "Doremi", score: 90 },
  { name: "Chicken Wings", score: 98 },
  { name: "Shinichi", score: 70 },
];

const displayUser = document.querySelector("#displayUser");
const sortBtn = document.querySelector("#sortBtn");

sortBtn.addEventListener("click", sortDescending);

function display_user() {
  users.forEach((u) => {
    displayUser.innerHTML += `<li>Name: ${u.name}, Score: ${u.score}.</li>`;
  });
}
display_user();
function sortDescending() {
  displayUser.innerHTML = `<strong>Sorted users:</strong>`;
  users.sort((u1, u2) => u2.score - u1.score);
  display_user();
}
/* Task 10
Create an object `shoppingList` with an array `items`.
Add an input field and button to allow users to add new items to `items` and display the updated list.
*/
console.log("10.");
const shoppingList = { items: [] };
const itemInput = document.querySelector("#itemInput");
const itemBtn = document.querySelector("#itemBtn");
const itemList = document.querySelector("#itemList");

itemBtn.addEventListener("click", addItem);

function addItem() {
  // add new item to items array
  const itemText = itemInput.value.trim().toLowerCase();
  shoppingList.items.push(itemText);
  // clear input field
  itemInput.value = "";

  // display list
  const li = document.createElement("li");
  li.innerHTML = itemText;
  itemList.appendChild(li);
}

/* Task 11
Create an array of `posts` where each post has `title`, `content`, and `likes`.
Add a "Like" button next to each post that increases the `likes` count and updates the display.
*/

console.log("11.");
const posts = [
  {
    title: "Attack on Titan Final Season Announced",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur alias nihil aperiam provident minima ab optio, magnam pariatur eos omnis! Fuga vero iure accusantium asperiores unde eveniet sit ad eaque.",
    likes: 250,
  },
  {
    title: "Studio Ghibli's Next Project Revealed",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur alias nihil aperiam provident minima ab optio, magnam pariatur eos omnis! Fuga vero iure accusantium asperiores unde eveniet sit ad eaque.",
    likes: 350,
  },
  {
    title: "Upcoming Anime Songs to Look Forward To",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur alias nihil aperiam provident minima ab optio, magnam pariatur eos omnis! Fuga vero iure accusantium asperiores unde eveniet sit ad eaque.",
    likes: 190,
  },
];
const postContainer = document.querySelector("#post-container");

displayPost();

function displayPost() {
  // clear old posts, put this outside forEach loop
  postContainer.innerHTML = "";
  posts.forEach((p, arrKey) => {
    postContainer.innerHTML += `
          <h3>${p.title}</h3>
          <p>${p.content}</p>
          <br>
          <div class="like">
          <span> ${p.likes} likes </span><button class="likeBtn" key="${arrKey}">Like</button></div>
          <hr>
        `;
  });
}

// there are many 'like' buttons -> similar to 'form' exercise, addeventListener for the whole container
postContainer.addEventListener("click", updateLike);

function updateLike(e) {
  // console.log(e);
  if (e.target.className == "likeBtn") {
    let key = Number(e.target.getAttribute("key"));
    //   find the object in the array and update its likes
    posts[key].likes += 1;
    // console.log(posts);
    displayPost();
  }
}

/* Task 12
Create a constructor function `Employee` with `name`, `position`, and `salary`.
Add a method `increaseSalary(percent)` that increases the salary by a given percentage.
Create an employee and increase their salary dynamically.
*/

console.log("12.");
function Employee(name, position, salary) {
  this.name = name;
  this.position = position;
  this.salary = salary;
  this.increaseSalary = function (percent) {
    this.salary += percent * this.salary;
  };
}

const employee1 = new Employee("Shinichi", "Director", 4000);
employee1.increaseSalary(0.05);
employee1.increaseSalary(0.15);

console.log(employee1); //4830  

/* Task 13
Create an object `timer` with `seconds` and a method `start()` that counts seconds up.
Display the timer in an HTML element and update it every second.
*/

console.log("13.");
const task13Display = document.querySelector("#task13Display");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");
const timer = {
  seconds: 0,
  start: function () {
    // store the interval in key 'interval'of object to stop the interval later
    this.interval = setInterval(() => {
      this.seconds++;
      task13Display.innerHTML = this.seconds;
    }, 1000);
  },
};

start.addEventListener("click", () => {
  interval = timer.start();
});
stop.addEventListener("click", () => {
  clearInterval(timer.interval);
});

reset.addEventListener("click", () => {
  clearInterval(timer.interval);
  task13Display.innerHTML = 0;
});
/* Task 14
Create a constructor function `Book` that takes `title`, `author`, and `pages`.
Create a simple book library that allows users to add books via an HTML form and displays them dynamically.
*/

console.log("14.");
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

const library = [];
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const displayLibrary = document.querySelector("#displayLibrary");

const libraryForm = document.querySelector("#libraryForm");

libraryForm.addEventListener("click", addBook);

function addBook(e) {
  if (e.target.id === "addBook") {
    //make the form not submitting and refreshing the page
    e.preventDefault();

    //creat a book object and add it to the library
    let titleText = title.value.trim().toUpperCase();
    let authorText = author.value.trim().toUpperCase();
    let pagesNumber = pages.value;
    const book1 = new Book(titleText, authorText, pagesNumber);
    library.push(book1);
    //clear input field
    title.value = author.value = pages.value = "";
    //display book lists
    displayLibrary.innerHTML = "Books we have in the library: ";
    library.forEach((b) => {
      displayLibrary.innerHTML += `
      <li>Book: ${b.title} , by ${b.author}, ${b.pages} pages.</li>
      `;
    });
  }
}

/* Task 15
Create an object `foxTracker` with a `foxes` array.
Add an input field and button that allows users to add new foxes (with name and location) to the array.
Display the list of foxes dynamically in an HTML element.
*/
console.log("15.");
const foxTracker = {
  foxes: [],
};

const foxForm = document.querySelector("#foxForm");
const foxName = document.querySelector("#foxName");
const foxLocation = document.querySelector("#foxLocation");
const displayFox = document.querySelector("#displayFox");

foxForm.addEventListener("click", addAndDisplayFox);

function addAndDisplayFox(e) {
  e.preventDefault();
  // remember ==, not =
  if (e.target.id == "addFoxBtn") {
    const fox1 = {
      name: foxName.value.trim().toLowerCase(),
      location: foxLocation.value.trim().toLowerCase(),
    };
    foxTracker.foxes.push(fox1);

    //display fox list
    displayFox.innerHTML = "List of foxes: ";
    foxTracker.foxes.forEach((f) => {
      displayFox.innerHTML += `
    <li>Name: ${f.name}. Location: ${f.location}</li>
    `;
    });
    // clear input field
    foxName.value = foxLocation.value = null;
  }
}
