const orderList = JSON.parse(localStorage.getItem("allOrders"));
const orderDetail = document.querySelector("#order-detail");
const searchBtn=document.querySelector('#search');
const sort=document.querySelector('#sort');


searchBtn.addEventListener('keyup',searchOrder);
sort.addEventListener('change',sortOrder);
updateDisplay();


function updateDisplay(){
  const orderListUpdated = JSON.parse(localStorage.getItem("allOrders"));
  orderDetail.innerHTML="";
  orderListUpdated.forEach((order) => {
    let li = document.createElement("li");
    li.id = order.id; //so we can update list later
    li.innerHTML = displayOrder(order);
    
    // status and background color are corrected when reload the page
    let select=li.querySelector('.status');
    select.value=order.status;
    // status background
    for (let child of select.children){
      if(select.value == child.value){
        select.style.backgroundColor=child.getAttribute('color');
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
orderDetail.addEventListener('change', updateStatus);


function updateStatus(e) {
  e.preventDefault();
  if (e.target.classList.contains('status')){

    let chosenStatus = e.target.options[e.target.selectedIndex];

    // change background color
    e.target.style.backgroundColor = chosenStatus.getAttribute('color');

    // update it to localStorage
    let li =e.target.parentElement;
    orderList.forEach((order) => {
      // important: only == not ===, different types
      if (order.id == li.id) {
        order.status = chosenStatus.value;
      }})

    // update status to localStorage
    localStorage.setItem("allOrders", JSON.stringify(orderList));

    console.log(localStorage.getItem("allOrders"));
}
}

// Search Order by anything
function searchOrder(e){
  let searchText=e.target.value.trim().toLowerCase();
  let list =orderDetail.querySelectorAll('li');
  list.forEach(order=>{
    let orderText=order.textContent.toLowerCase();
    if(orderText.includes(searchText)){
      order.style.display='block';
    }else{
      order.style.display="none";
    }
  })
}


// sort order by status

function sortOrder(){
  console.log(sort.value);
  let list =orderDetail.querySelectorAll('li');
  list.forEach(order=>{
    let status=order.querySelector('.status')
    // console.log(status.value);
    if(sort.value==status.value){
      order.style.display='block';
    }else{
      order.style.display="none";
    }
  })
}


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