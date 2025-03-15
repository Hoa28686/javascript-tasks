let orderList = JSON.parse(localStorage.getItem("allOrders")); //use let to update the list later: remove order
const orderDetail = document.querySelector("#order-detail");
const searchBtn = document.querySelector("#search");
const sort = document.querySelector("#sort");

searchBtn.addEventListener("keyup", searchOrder);
sort.addEventListener("change", sortOrder);
updateDisplay();
//update local storage
const updateLS = () => {
  localStorage.setItem("allOrders", JSON.stringify(orderList));
};

function updateDisplay() {
  const orderListUpdated = JSON.parse(localStorage.getItem("allOrders"));
  orderDetail.innerHTML = "";
  orderListUpdated.forEach((order) => {
    let li = document.createElement("li");
    li.id = order.id; //so we can update list later
    li.className = "order-item"; //for css
    li.innerHTML = displayTemplate(order);

    // status and background color are corrected when reload the page
    let select = li.querySelector(".status");
    select.value = order.status;
    // status background
    for (let child of select.children) {
      if (select.value == child.value) {
        select.style.backgroundColor = child.getAttribute("color");
      }
    }

    //show remove button when order is delivered
    if (select.value == "delivered") {
      li.querySelector(".rm").style.display = "block";
    }
    orderDetail.appendChild(li);
  });
}

function displayTemplate(order) {
  // can also use: ${[...order.toppings, ...order.extras].join(", ")}
  let display = `
  User ID:<strong> ${order.id} </strong><br>
  Customer Name: <strong>${order.customerName} </strong><br>
  Pancake Type: <strong>${order.selectedPancake} </strong><br>
  Toppings & Extras: <strong>${order.toppings
    .concat(order.extras)
    .join(", ")} </strong><br>
  Delivery Method: <strong>${order.deliveryMethod} </strong><br>
  Total Price: <strong>${order.totalPrice} </strong><br>
  Status:
  <select class="status">
    <option color="yellow" value="waiting" >waiting</option>
    <option color="#B6FFFA" value="ready">ready</option>
    <option color="#00FF9C" value="delivered">delivered</option>
  </select>
  <button class="rm">Remove order</button>
  `;
  return display;
}

// set color for status options
orderDetail.addEventListener("change", updateStatus);

function updateStatus(e) {
  e.preventDefault();
  if (e.target.classList.contains("status")) {
    let chosenStatus = e.target.options[e.target.selectedIndex];

    // change background color
    e.target.style.backgroundColor = chosenStatus.getAttribute("color");

    // update it to localStorage
    let li = e.target.parentElement;
    orderList.forEach((order) => {
      // important: only == not ===, different types
      if (order.id == li.id) {
        order.status = chosenStatus.value;
      }
    });

    // update status to localStorage
    updateLS();
    updateDisplay();
    // console.log(localStorage.getItem("allOrders"));
  }
}

const list = orderDetail.querySelectorAll("li");

// Search Order by anything
function searchOrder(e) {
  let searchText = e.target.value.trim().toLowerCase();
  list.forEach((order) => {
    let orderText = order.textContent.toLowerCase();
    if (orderText.includes(searchText)) {
      order.style.display = "block";
    } else {
      order.style.display = "none";
    }
  });
}

// sort order by status

function sortOrder() {
  console.log(sort.value);
  list.forEach((order) => {
    let status = order.querySelector(".status");
    // console.log(status.value);
    if (sort.value == "all" || sort.value == status.value) {
      order.style.display = "block";
    } else {
      order.style.display = "none";
    }
  });
}

// Allow removing order when delivered

orderDetail.addEventListener("click", removeOrder);

// in case has a page that tracks all removed order
// let removedOrder = [];

function removeOrder(e) {
  if (e.target.classList.contains("rm")) {
    let closestList = e.target.parentElement;
    console.log(e.target.parentElement);
    orderDetail.removeChild(closestList);
    //update order array
    orderList.forEach((order) => {
      if (closestList.id == order.id) {
        orderList = orderList.filter((o) => o !== order);
        // removedOrder.push(order);
        
        //update local Storage
        updateLS();
        //save removed Order to local storage
        localStorage.setItem("removedOrder", JSON.stringify(removedOrder));
        console.log(localStorage.getItem("removedOrder"));
      }
    });
  }
}
