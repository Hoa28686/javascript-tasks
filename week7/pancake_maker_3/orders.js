let orderList = JSON.parse(localStorage.getItem("allOrders")); //use let to update the list later: remove order
const orderDetail = document.querySelector("#order-detail");
const searchBtn = document.querySelector("#search");
const sort = document.querySelector("#sort");

searchBtn.addEventListener("keyup", searchOrder);
sort.addEventListener("change", sortOrder);
updateDisplay();

//1. update local storage
const updateLS = () => {
  localStorage.setItem("allOrders", JSON.stringify(orderList));
};

//display orders
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


// template for each order
function displayTemplate(order) {
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

//2.  set color for status options and update status
orderDetail.addEventListener("change", updateStatus);

function updateStatus(e) {
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
    location.reload(); //so the page the sort function(task4) right away
  }
}

const list = orderDetail.querySelectorAll("li");

//3.  Search Order by anything
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

// 4. sort order by status

function sortOrder() {
  list.forEach((order) => {
    let status = order.querySelector(".status");
    if (sort.value == "all" || sort.value == status.value) {
      order.style.display = "block";
    } else {
      order.style.display = "none";
    }
  });
}

//5. Allow removing order when delivered

orderDetail.addEventListener("click", removeOrder);


function removeOrder(e) {
  if (e.target.classList.contains("rm")) {
    let closestList = e.target.parentElement;
   
    orderDetail.removeChild(closestList);
    //update order array
    orderList.forEach((order) => {
      if (closestList.id == order.id) {
        orderList = orderList.filter((o) => o !== order);
      
        //update local Storage
        updateLS();

      }
    });
  }
}
