const pancakeForm = document.querySelector("#pancakeForm");
const bannerPrice = document.querySelector("#totalPrice");
const totalDisplay = document.querySelector("#totalPriceDisplay");
const seeBtn = document.querySelector("#seeOrder");
const confirmOrder = document.querySelector("#confirmOrder");
const summaryText = document.querySelector("#summaryText");
const customerName = document.querySelector("#customerName");
const stopBtn = document.querySelector("#stopVideo");
let sum1 = 5;
let sum2 = 0;
let sum3 = 0;
let sum4 = 0;
let finalSum = 5;

pancakeForm.addEventListener("change", (e) => {
  pancakeType(e);
  topping(e);
  extra(e);
  delivery(e);
});

function update_sum() {
  finalSum = sum1 + sum2 + sum3 + sum4;
  bannerPrice.textContent = totalDisplay.textContent = finalSum + "€";
}

// Select pancake type
let type = "Classic";
function pancakeType(e) {
  if (e.target.id === "type") {
    sum1 = Number(
      e.target.options[e.target.selectedIndex].getAttribute("data-price")
    );
    type = e.target.options[e.target.selectedIndex].textContent
      .split("-")[0]
      .replace(/[^\w\s]/g, "")
      .trim();
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
  if (e.target.className === "topping") {
    // remove extra newlines and spaces
    const toppingName = e.target.parentElement.textContent
      .replace(/[^\w\s]/g, "") //remove emoji
      .replace(/\s+/g, ""); //remove newline and extra space due to autoformat
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
  if (e.target.className === "extra") {
    // remove extra newlines and spaces
    const extraName = e.target.parentElement.textContent
      .split("-")[0]
      .replace(/\s+/g, " ")
      .trim();
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
    const deliName = e.target.parentElement.textContent
      .split(" (+5€)")[0]
      .replace(/\s+/g, " ");
    const deliPrice = Number(e.target.getAttribute("data-price"));
    deli = new Arr(deliName, deliPrice);
    sum4 = deliPrice;
    update_sum();
  }
}
let id = "";
// if(!localStorage.getItem('allOrders')){
//   localStorage.setItem("allOrders", JSON.stringify(allOrders));
//     console.log(localStorage.getItem("allOrders"));

// }
const allOrders = [];

// display template
function displayOrder(order) {
  // can also use: ${[...order.toppings, ...order.extras].join(", ")}
  let display = `
  Customer Name: <strong>${order.customerName}</strong> <br>
  Pancake Type: <strong>${order.selectedPancake}</strong> <br>
  Toppings & Extras: <strong>${order.toppings
    .concat(order.extras)
    .join(", ")}</strong> <br>
  Delivery Method: <strong>${order.deliveryMethod}</strong> <br>
  Total Price: <strong>${order.totalPrice} </strong><br>
  Status: <strong>${order.status}</strong> <br>
  `;
  return display;
}

function createOrder(e) {
  const order = {
    id: Date.now(),
    customerName: customerName.value.trim(),
    selectedPancake: type,
    toppings: toppingArr.map((t) => t.name),
    extras: extraArr.map((t) => t.name),
    deliveryMethod: deli.name,
    totalPrice: finalSum,
    status: "waiting",
  };

  // display order summary for each customer
  if (e.target.id === "seeOrder") {
    console.log(order);
    summaryText.innerHTML = "";

    summaryText.innerHTML += displayOrder(order);
  }

  if (e.target.id === "confirmOrder") {
    allOrders.push(order);
    // console.log(allOrders);
    summaryText.innerHTML = displayOrder(order);

    // save in localStorage
    localStorage.setItem("allOrders", JSON.stringify(allOrders));
    // console.log(localStorage.getItem("allOrders"));

    //clear form
    pancakeForm.reset();
  }
}

pancakeForm.addEventListener("click", (e) => {
  createOrder(e);
});

// stop video

stopBtn.addEventListener("click", () => {
  document.querySelector("#pancakeVideo").pause();
});
