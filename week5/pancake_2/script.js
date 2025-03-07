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

pancakeForm.addEventListener("change", (e) => {
  pancakeType(e);
  //   ingredient(e);
  topping(e);
  extra(e);
  delivery(e);
});
seeBtn.addEventListener("click", summary);

function update_sum() {
  bannerPrice.textContent = totalDisplay.textContent =
    sum1 + sum2 + sum3 + sum4 + "€";
}

// Select pancake type
let type = "Classsic 5€";
function pancakeType(e) {
  if (e.target.id == "type") {
    sum1 = Number(
      e.target.options[e.target.selectedIndex].getAttribute("data-price")
    );
    type = e.target.options[e.target.selectedIndex].textContent;
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
    const toppingName = e.target.parentElement.textContent.trim();
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
    const extraName = e.target.parentElement.textContent.trim();
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
    const deliName = e.target.parentElement.textContent.trim();
    const deliPrice = Number(e.target.getAttribute("data-price"));
    deli = new Arr(deliName, deliPrice);
    sum4 = deliPrice;
    update_sum();
  }
}

//summarize order
function summary() {
  const summary = `
  Customer name:${customerName.value.trim()}<br>
  Pancake type: ${type}<br>
  Topping: ${toppingArr.map((t) => t.name).join(", ")} ${sum2}€<br>
  Extra: ${extraArr.map((e) => e.name).join(", ")} <br>
  ${deli.name}`;
  summaryText.innerHTML = summary;
}

// Method2: if task doesn't require two seperate arrays for topping and extra items -> combine topping and extra function together (comment to hide topping and extra in addEventListener, topping, extra, summary functions above, uncomment line 13 and from 103 forward)

// let items = [];
// function ingredient(e) {
//   if (e.target.className == "topping" || e.target.className == "extra") {
// const iName = e.target.parentElement.textContent.trim();
// const iPrice = Number(e.target.getAttribute("data-price"));
// const item = new Arr(iName, iPrice);
// if (e.target.checked) {
//   items.push(item);
// } else {
//   items = items.filter((i) => i.name !== iName);
// }
// sum2 = items.reduce((sum, i) => sum + i.price, 0);
// update_sum();
//   }
// }
//
// function summary() {
//   const summary = `
// Customer name:${customerName.value.trim()}<br>
// Pancake type: ${type}<br>
// Topping and extra ${sum2}€: ${items.map((i) => i.name).join(", ")} <br>
// ${deli.name}`;
//   summaryText.innerHTML = summary;
// }
//
