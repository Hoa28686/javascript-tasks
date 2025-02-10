const type=document.querySelector('#type');
const topping=document.querySelector('.topping');
const extra=document.querySelector('.extra');
const totalPrice=document.querySelector('#totalPrice');
const totalDisplay=document.querySelector('#totalPriceDisplay');
// console.log(type.value);

console.log(topping.value);

console.log(extra.value);
// console.log(totalDisplay.value);
total=0;
function selection(){
    totalPrice.textContent=totalDisplay.textContent= type.value +"€";
}
type.addEventListener("change", selection);

// for (i=0, i<topping.length;i++){
//     if (topping[i].checked)
// }
// topping.addEventListener('click', ()=>{
//     if (topping.checked==true){
//         total+=topping.value;
//         totalPrice.textContent=totalDisplay.textContent= total +"€"

//     };
// });
// topping.addEventListener('click', ()=>{
//     let checked= document.querySelector('input[type="checkbox"]:checked');
    
//     total=total+checked.value;
//     console.log(total);
// })

