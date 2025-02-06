// const balance = document.querySelector('#balance');
let balance = 20;
const showBalance =document.querySelector('#balance');
const depoBtn = document.querySelector('#depoBtn');
const add = document.querySelector('#deposit');
const withBtn = document.querySelector('#withBtn');
const take = document.querySelector('#withdraw');


function checkBalance() {
    showBalance.textContent=`User's balance: ${balance}`;
}

function deposit() {
    if(add.value >=0) {
        balance += Number(add.value);
        checkBalance();
    }
    else alert('Enter an amount greater than 0');
    
    
}
function withdraw() {
    if (balance >= take.value && take.value >= 0){
        balance -= Number(take.value);
        checkBalance();
        console.log(balance);
    }
    else if (take.value < 0) {
        alert('Enter an amount greater than 0.');
    }
    else alert('Not enough balance.');
}

checkBalance();
depoBtn.addEventListener('click', deposit);
withBtn.addEventListener('click', withdraw);