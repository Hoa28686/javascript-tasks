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
    // console.log(sum1+sum2);
}

const print=['Classic - 5€'];
const array=[{name:'',value:''}];
pancake_form.addEventListener('change', (event)=>{
    let target=event.target
    if (target.id==="type"){
        sum1=Number(type.selectedOptions[0].dataset.price);
        print[0]= type.selectedOptions[0].textContent;
    }
    
    if ((target.class==='topping') || (target.class==='extra')||(target.class==='delivery')){
        let price= Number(target.dataset.price);
        let name =target.parentNode.textContent.replace(/\s+/g,' ');
        if (target.checked){
            array.push({name:name, value:price});
        } else {
             const index= array.findIndex(i => i.name==name)
            array.splice(index,1);
        } 

        array.forEach(i=> {console.log(i.name)})
    }
    // sum2=array.value.reduce((sum2,i)=> sum2+i,0)
    update_sum();
    
    // console.log(print);
})

// seeBtn.addEventListener('click',()=>{
//     summary.appendChild()
// })