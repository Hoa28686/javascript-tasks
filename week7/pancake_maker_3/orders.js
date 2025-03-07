const orderList= JSON.parse(localStorage.getItem('orders'));
console.log(orderList);
// const seeAll=document.querySelector('#all-orders');

const orderDetail=document.querySelector('#order-detail');

orderList.forEach(order=>{
  let ul=document.createElement('ul');
  for (let title in order){
    let li=document.createElement('li');
    li.style.listStyle='none';
    while((title!=='Toppings')&&(title!=='Extras')){
        li.textContent= `${title}: ${order[title]}`;
    }
    ul.appendChild(li);
  }
  orderDetail.appendChild(ul);
})
