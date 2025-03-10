const pancakeForm=document.querySelector('#pancakeForm');
const bannerPrice = document.querySelector("#totalPrice");
const totalDisplay = document.querySelector("#totalPriceDisplay");
const seeBtn = document.querySelector("#seeOrder");
const summaryText = document.querySelector("#summaryText");
const customerName = document.querySelector("#customerName");
let sum1 = 5;
let sum2 = 0;
let sum3 = 0;
let sum4 = 0;
let finalSum=5;

pancakeForm.addEventListener("change", (e) => {
  pancakeType(e);
  //   ingredient(e);
  topping(e);
  extra(e);
  delivery(e);
});
seeBtn.addEventListener("click", createOrder);

function update_sum() {
  finalSum = sum1+sum2+sum3+sum4;
  bannerPrice.textContent = totalDisplay.textContent = finalSum+"€";
}

// Select pancake type
let type = "Classsic - 5€";
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
//summarize order
// function summary() {
//   const summary = `
//   Order ID: ${id}<br>
//   Customer name: ${customerName.value.trim()}<br>
//   Pancake type: ${type}<br>
//   Topping: ${toppingArr.map((t) => t.name).join(", ")} ${sum2}€<br>
//   Extra: ${extraArr.map((e) => e.name).join(", ")} 
//   ${deli.name}<br>
//   Total: ${finalSum}€`;
//   summaryText.innerHTML = summary;
// }
// function Order(id,customerName, selectedPancake, toppings, extras, deliveryMethod, totalPrice, status){
//   this.id=id;
//   this.customerName=customerName;
//   this.selectedPancake=selectedPancake;
//   this.toppings=toppings;
//   this.extras=extras;
//   this.deliveryMethod=deliveryMethod;
//   this.totalPrice=totalPrice;
//   this.status=status;
// }

const allOrders=[];

function createOrder(){
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
  allOrders.push(order1);
  localStorage.setItem('allOrders',JSON.stringify(allOrders));
  console.log(localStorage.getItem('allOrders'));
  
}
// createOrder();
seeBtn.addEventListener('click',createOrder);
// All Orders page


// seeAll.addEventListener('click', createOrder);

