/* Task 1
Create a constructor function `User` that takes `username` and `email` as parameters.
It should create an object with these properties and a method `showInfo` that logs user details.
Instantiate a new user and call `showInfo()`.
*/

console.log('1.')
function User(username, email){
    this.username=username;
    this.email=email;
    this.showInfo=function(){
        console.log(`Username: ${this.username}, email: ${this.email}`);
    }
}
const user1= new User('me','me@gmail.com');
user1.showInfo();


/* Task 2
Modify Task 1: Use an ES6 `class` instead of a constructor function to define `User`.
Add a method `changeEmail(newEmail)` that updates the user's email.
*/
console.log('2.')
class User_task2{
    constructor(username, email){
        this.username=username;
        this.email=email;

    }
    showInfo(){
        console.log(`Username: ${this.username}, email: ${this.email}`);
    }
    changeEmail(newEmail){
        this.email=newEmail;
    }
}

const user2= new User_task2('me','me@gmail.com');
user2.changeEmail('me_update@gmail.com');
user2.showInfo();


/* Task 3
Create an object `theme` with properties `name` (light or dark) and `isActive`.
Add a button in HTML. When clicked, toggle the theme between light and dark, updating the `isActive` property.
*/
console.log('3.')
const theme={name: 'light', isActive:true};
const toggleBtn=document.querySelector('#toggleBtn');

toggleBtn.addEventListener('click',toggle)
function toggle(){
    if (theme.isActive){
              document.body.style.backgroundColor='white';
              document.body.style.color='black';
              toggleBtn.textContent='Switch to dark theme';
              theme.isActive=false;  
     } else{
        document.body.style.backgroundColor='black';
        document.body.style.color='white';
        toggleBtn.textContent='Switch to light theme';
        theme.isActive=true; 
     } 
}
/* Task 4
Create an object `counter` with a `value` property.
Add two buttons in HTML: one to increase `value`, another to decrease it.
Display `value` in an HTML element and update it dynamically when buttons are clicked.
*/
console.log('4.')
const counter={value: 5};
const counterValue= document.querySelector('#counter-value');
const add=document.querySelector('#add');
const remove=document.querySelector('#remove');
const display=()=>{
    counterValue.textContent=counter.value;
}
display();
add.addEventListener('click',()=>{
    counter.value+=1;
    display();
})
remove.addEventListener('click',()=>{
    counter.value-=1;
    display();
})


/* Task 5
Create an object `product` with `name`, `price`, and `quantity`.
Add an input field in HTML where the user can enter a quantity to purchase.
Update the `quantity` property and display the total price dynamically.
*/
console.log('5.')
const product={name:'Orange',price:3.5,quantity:0};
const quant=document.querySelector('#quantity');
const pro=document.querySelector('product');
const pri=document.querySelector('price');
const totalValue=document.querySelector('#total-value');

pro.textContent=product.name;
pri.textContent=product.price;


const totalPrice=()=>{
    product.quantity=Number(quant.value);
    let total=product.quantity*product.price;
    totalValue.textContent=`Total price ${total}`;
}

quant.addEventListener('change',totalPrice);

/* Task 6
Define a `Task` constructor that takes `title`, `description`, and `completed`.
Add a button in HTML that, when clicked, adds a new `Task` object to a `tasks` array and displays it on the page.
*/

console.log('6.')
const taskName=document.querySelector('#task-name');
const taskDescription=document.querySelector('#task-description');
const displayBtn=document.querySelector('#display');
const ul=document.querySelector('#task-list');

function Task(title, description, completed){
    this.title=title;
    this.description=description;
    this.completed=completed;
}


const tasks=[];
function displayTask(){
    const task = new Task(taskName.value.trim().toLowerCase(),taskDescription.value.trim().toLowerCase(),false);
    tasks.push(task);

    // clear input field
    taskName.value='';
    taskDescription.value='';

    // create new list and checkbox
    let li=document.createElement('li');
    let box=document.createElement('input');
    box.type="checkbox";

    //update tasks array if checkbox is checked
    box.addEventListener('change',()=>{
        task.completed=box.checked
        console.log(tasks);
    })

    li.style.listStyle='none';
    li.innerHTML=` <strong>${task.title}</strong> - ${task.description}`;
    
    li.prepend(box);
    ul.appendChild(li);
}
displayBtn.addEventListener('click',displayTask);

/* Task 7
Create an object `weatherApp` with a method `fetchWeather(city)`.
Use `fetch` to get weather data from an API and display it in an HTML element.
(API: OpenWeather or any free weather API)
*/
console.log('7.')
// const weatherApp={
//     fetchWeather:(city){

//     }
// }

/* Task 8
Create a constructor function `Car` that takes `brand`, `model`, and `year`.
In the constructor, add a method `age()` that calculates the car’s age.
Instantiate a new `Car` and display its age on the webpage.
*/
console.log('8.')
function Car(brand, model, year){
    this.brand=brand;
    this.model=model;
    this.year=year;
    this.age=function(){
        return new Date().getFullYear()-this.year;
    }
}
const car1=new Car('Lexus','RX 350',2022);
const carAge=document.querySelector('#task8');

carAge.textContent=`Car: ${car1.brand}, ${car1.model},  age: ${car1.age()}`;

/* Task 9
Create an array `users` where each user has `name` and `score`.
Add a button in HTML that sorts the users by score in descending order and updates the displayed list.
*/

console.log('9.')

/* Task 10
Create an object `shoppingList` with an array `items`.
Add an input field and button to allow users to add new items to `items` and display the updated list.
*/
console.log('10.')
const shoppingList={items:[]};
const itemInput=document.querySelector('#itemInput');
const itemBtn=document.querySelector('#itemBtn');
const itemList=document.querySelector('#itemList');

itemBtn.addEventListener('click',addItem);

function addItem(){
    // add new item to items array
    const itemText=itemInput.value.trim().toLowerCase();
    shoppingList.items.push(itemText);
    // clear input field
    itemInput.value='';

    // display list
    const li=document.createElement('li');
    li.innerHTML= itemText;
    itemList.appendChild(li);

}



/* Task 11
Create an array of `posts` where each post has `title`, `content`, and `likes`.
Add a "Like" button next to each post that increases the `likes` count and updates the display.
*/

console.log('11.')

/* Task 12
Create a constructor function `Employee` with `name`, `position`, and `salary`.
Add a method `increaseSalary(percent)` that increases the salary by a given percentage.
Create an employee and increase their salary dynamically.
*/

console.log('12.')

/* Task 13
Create an object `timer` with `seconds` and a method `start()` that counts seconds up.
Display the timer in an HTML element and update it every second.
*/

console.log('13.')

/* Task 14
Create a constructor function `Book` that takes `title`, `author`, and `pages`.
Create a simple book library that allows users to add books via an HTML form and displays them dynamically.
*/

console.log('14.')

/* Task 15
Create an object `foxTracker` with a `foxes` array.
Add an input field and button that allows users to add new foxes (with name and location) to the array.
Display the list of foxes dynamically in an HTML element.
*/
console.log('15.')