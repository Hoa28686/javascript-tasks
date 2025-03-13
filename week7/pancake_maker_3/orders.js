const orderList = JSON.parse(localStorage.getItem("allOrders"));
const orderDetail = document.querySelector("#order-detail");



updateDisplay();

function updateDisplay(){
  const orderListUpdated = JSON.parse(localStorage.getItem("allOrders"));
  orderDetail.innerHTML="";
  orderListUpdated.forEach((order) => {
    let li = document.createElement("li");
    li.id = order.id; //so we can update list later
    li.innerHTML = displayOrder(order);
    let select=li.querySelector('.status');
    select.value=order.status;
    for (let i of select.children){
      if(select.value == i.value){
        select.style.backgroundColor=i.getAttribute('color');
      }
    }
    orderDetail.appendChild(li);
    })
  };


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
    <option color="yellow" value="waiting" >waiting</option>
    <option color="#B6FFFA" value="ready">ready</option>
    <option color="#00FF9C" value="delivered">delivered</option>
  </select>
  <button class="rm">Remove order</button>
  `;
  return display;
}

// set color for status options
orderDetail.addEventListener('change', changeColor);


function changeColor(e) {
  e.preventDefault();
  if (e.target.classList.contains('status')){

    let chosenStatus = e.target.options[e.target.selectedIndex];

    // change background color
    e.target.style.backgroundColor = chosenStatus.getAttribute('color');

    // update it to localStorage
    chosenStatus.setAttribute('selected',true);
    let li =e.target.parentElement;
    orderList.forEach((order) => {
      // important: only == not ===, different types
      if (order.id == li.id) {
        order.status = chosenStatus.value;
        console.log(e.target);
      }})
    localStorage.setItem("allOrders", JSON.stringify(orderList));

    console.log(localStorage.getItem("allOrders"));
    console.log(li);
}
}


// function updateStatus(e) {
    // if(e.target.classList.contains('status')){
    //     const li = e.target.closest("li");

    // }
//   orderList.forEach((order) => {
//     // important: only == not ===, different types
//     if (order.id == li.id) {
//       order.status = e.target.options[e.target.selectedIndex].textContent;
//     }
//   });
//   localStorage.setItem("allOrders", JSON.stringify(orderList));
//   console.log(localStorage.getItem("allOrders"));
//   // console.log(orderList);
// }


// //remove delivered orders
// orderDetail.addEventListener("click", removeOrder);
// function removeOrder(e) {
//   e.preventDefault();
//   if (e.target.classList.contains("rm")) {
//     const li = e.target.closest("li");
//     const selectedStatus = li.querySelector(".status");
//     if (selectedStatus.value === "#00FF9C") {
//       // hide
//       li.style.display = "none";
//     }
//   }
// }
// localStorage.setItem("allOrders", JSON.stringify(orderList));
//   console.log(localStorage.getItem("allOrders"));
// // search order by name or id

// // sort order: according to status