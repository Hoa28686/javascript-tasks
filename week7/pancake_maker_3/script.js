const pancakeForm=document.querySelector('#pancakeForm');
const bannerPrice = document.querySelector("#totalPrice");
const totalDisplay = document.querySelector("#totalPriceDisplay");
const seeBtn = document.querySelector("#seeOrder");
const confirmOrder=document.selectedIndex('#confirmOrder');
const summaryText = document.querySelector("#summaryText");
const customerName = document.querySelector("#customerName");
let sum1 = 5;
let sum2 = 0;
let sum3 = 0;
let sum4 = 0;
let finalSum=5;

pancakeForm.addEventListener("change", (e) => {
  pancakeType(e);
  topping(e);
  extra(e);
  delivery(e);
});


function update_sum() {
  finalSum = sum1+sum2+sum3+sum4;
  bannerPrice.textContent = totalDisplay.textContent = finalSum+"€";
}

// Select pancake type
let type = "Classsic";
function pancakeType(e) {
  if (e.target.id == "type") {
    sum1 = Number(
      e.target.options[e.target.selectedIndex].getAttribute("data-price")
    );
    type = e.target.options[e.target.selectedIndex].textContent.split(' - ')[0];
    update_sum();
  }
}

// //template for topping and extra items
function Arr(name, price) {
  this.name = name;
  this.price = price;
}

let toppingArr = [];
let extraArr = [];


// //topping function
function topping(e) {
  //console.log(e.target.parentElement);
  //console.log(e.target);
  if (e.target.className == "topping") {
    const toppingName = e.target.parentElement.textContent.split('-')[0].trim();
    const toppingPrice = Number(e.target.getAttribute("data-price"));
    const top = new Arr(toppingName, toppingPrice);
    if (e.target.checked) {
      toppingArr.push(top);
    } else {
      toppingArr = toppingArr.filter((t) => t.name !== toppingName);
    }
    sum2 = toppingArr.reduce((sum, t) => sum + t.price, 0);
    update_sum();
  }
}

//extra function
function extra(e) {
  if (e.target.className == "extra") {
    const extraName = e.target.parentElement.textContent.split('-')[0].trim();
    const extraPrice = Number(e.target.getAttribute("data-price"));
    const extra = new Arr(extraName, extraPrice);
    if (e.target.checked) {
      extraArr.push(extra);
    } else {
      extraArr = extraArr.filter((e) => e.name !== extraName);
    }
    sum3 = extraArr.reduce((sum, e) => sum + e.price, 0);
    update_sum();
  }
}

//delivery method
let deli = new Arr("Eat In", 0);
function delivery(e) {
  if (e.target.className == "delivery") {
    const deliName = e.target.parentElement.textContent.split(' (+5€)')[0];
    const deliPrice = Number(e.target.getAttribute("data-price"));
    deli = new Arr(deliName, deliPrice);
    sum4 = deliPrice;
    update_sum();
  }
}
let id='';
const allOrders=[];
const order1={
  'Order ID': Date.now(),
  'Customer Name':customerName.value.trim(),
  'Selected Pancake':type,
  'Toppings':`${toppingArr.map((t) => t.name).join(", ")}`,
  'Extras':`${extraArr.map((t) => t.name).join(", ")}`,
  'Delivery Method':deli.name,
  'Total Price': `${finalSum}€`,
  'Status':'waiting'
}

function createOrder(){
  
  allOrders.push(order1);
  localStorage.setItem('allOrders',JSON.stringify(allOrders));
  console.log(localStorage.getItem('allOrders'));
  
}

// display order summary for each customer
function summary(){

  summaryText.innerHTML='';
  for(let key in order1){
    summaryText.innerHTML +=`${key}: ${order1[key]} <br>`
  }
}
seeBtn.addEventListener('click',summary)
// createOrder();
confirmOrder.addEventListener('click',createOrder);



