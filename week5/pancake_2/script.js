const type=document.querySelector('#type');
const totalPrice=document.querySelector('#totalPrice');
const totalDisplay=document.querySelector('#totalPriceDisplay');
const pancake_form = document.querySelector('#pancakeForm');
const seeBtn = document.querySelector('#seeOrder');
const summary= document.querySelector('#orderSummary.p');

let sum1=5;
let sum2=0;
function update_sum(){
    totalPrice.textContent=totalDisplay.textContent = sum1+sum2+"€";
    console.log(sum1+sum2);
}

const print=['Classic - 5€'];
const array=[{name:'',value:''}];
pancake_form.addEventListener('change', (event)=>{
    let target=event.target
    if (target.id==="type"){
        sum1=Number(type.selectedOptions[0].dataset.price);
        print[0]= type.selectedOptions[0].textContent;
    }
    
    if ((target.classList.contains('topping')) || (target.classList.contains('extra'))){
        const price= target.dataset.price;
        const text =target.parentNode.textContent.replace(/\s+/g,' ');
        if (target.checked){
            array.push({name:text, value:price});
        } else {
            const index= array.findIndex(i => i.name==text)
            array.splice(index,1);
        } 
        sum2=array.reduce((sum2,i)=> sum2+Number(i.value),0);
        
        
        
    }
    
    update_sum();

   
   
})



// seeBtn.addEventListener('click',()=>{
//     summary.appendChild()
// })