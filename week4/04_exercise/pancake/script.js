const type=document.querySelector('#type');
const topping=document.querySelectorAll('.topping');
const extra=document.querySelectorAll('.extra');
const totalPrice=document.querySelector('#totalPrice');
const totalDisplay=document.querySelector('#totalPriceDisplay');

let sum1=5;
let sum2=0;
function update_sum(){
    totalPrice.textContent=totalDisplay.textContent = sum1+sum2+"€";
    // console.log(sum1+sum2);
}
function pancake_type(){
    sum1= Number(type.value);
    update_sum();
}
type.addEventListener("change",pancake_type);

topping.forEach(i=>{
    i.addEventListener('change', ()=>{
        if(i.checked){
            sum2+=Number(i.value);
        } else{
            sum2-=Number(i.value);
        }
        update_sum();
})})

extra.forEach(i=>{
    i.addEventListener('change', ()=>{
        if(i.checked){
            sum2+=Number(i.value);
        } else{
            sum2-=Number(i.value);
        }
        update_sum();
})})


