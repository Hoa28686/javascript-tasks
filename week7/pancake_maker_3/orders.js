const orderList = JSON.parse(localStorage.getItem("allOrders"));

const orderDetail = document.querySelector("#order-detail");


orderList.forEach((order) => {
  let li = document.createElement("li");
  li.id = order.id; //so we can update list later
  li.innerHTML += displayOrder(order);
  orderDetail.appendChild(li);
});

function displayOrder(order) {
  // can also use: ${[...order.toppings, ...order.extras].join(", ")}
  let display = `
  User ID: ${order.id} <br>
  Customer Name: ${order.customerName} <br>
  Pancake Type: ${order.selectedPancake} <br>
  Toppings & Extras: ${order.toppings.concat(order.extras).join(", ")} <br>
  Delivery Method: ${order.deliveryMethod} <br>
  Total Price: ${order.totalPrice} <br>
  Status:
  <select class="status">
    <option value="yellow">waiting</option>
    <option value="#B6FFFA">ready</option>
    <option value="#00FF9C">delivered</option>
  </select>
  <button class="rm">Remove order</button>
  `;
  return display;
}

// set color for status options

function changeColor(e) {
  let selected = e.target.options[e.target.selectedIndex].getAttribute("value");
  e.target.style.backgroundColor = selected;
}
const status = document.querySelectorAll(".status");

status.forEach((s) => {
  // default color yellow
  s.style.backgroundColor = "yellow";
  s.addEventListener("change", changeColor);
});


// update order Status
status.forEach((s) => s.addEventListener("change", updateStatus));
function updateStatus(e) {
  const li = e.target.closest("li");
  orderList.forEach((order) => {
    // important: only == not ===, different types
    if (order.id == li.id) {
      order.status = e.target.options[e.target.selectedIndex].textContent;
    }
  });
  localStorage.setItem("allOrders", JSON.stringify(orderList));
  // console.log(localStorage.getItem("allOrders"));
  // console.log(orderList);
}


//remove delivered orders
orderDetail.addEventListener("click", removeOrder);
function removeOrder(e) {
  e.preventDefault();
  if (e.target.classList.contains("rm")) {
    const li = e.target.closest("li");
    const selectedStatus = li.querySelector(".status");
    if (selectedStatus.value === "#00FF9C") {
      // hide
      li.style.display = "none";
    }
  }
}

// search order by name or id

// sort order: according to status