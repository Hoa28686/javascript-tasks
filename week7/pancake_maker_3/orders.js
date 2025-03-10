const orderList= JSON.parse(localStorage.getItem('allOrders'));
console.log(orderList);
// const seeAll=document.querySelector('#all-orders');

const orderDetail=document.querySelector('#order-detail');

orderList.forEach(order=>{
  let li=document.createElement('li');
  for(let key in order){
    li.innerHTML+=`${key}: ${order[key]} <br>`;
  }
  
  orderDetail.appendChild(li);

}
)
