const para = document.querySelector('p');
console.log(para.textContent);

const para2 = document.querySelector('#id_2');
console.log(para2.textContent);

const para_5 = document.querySelectorAll('.para5');
console.log(para_5);
const para_class = document.getElementsByClassName('para5');
console.log(para_class);

for (i of para_5){
    console.log(i.textContent);
}
for (i of para_class){
    console.log(i.textContent);
}








// // function handleClick() {
// //     alert('Button was clicked');
// // }
// // document.getElementById('insertBtn').addEventListener("click", function() {alert('Button was clicked')})

// const button = document.getElementById('insertBtn');
// const para = document.getElementById('para');

// function display() {
//     const input = document.getElementById('input').value; //has to be inside display function, not outside
//     para.textContent = `You entered: ${input}`;
// }

// button.addEventListener('click', display);
// // button.addEventListener("click",handleClick);

























// function newFunction() {
//     alert('Some text.')
// } 

// newFunction();

// function function2() {
//     alert('I told you not to click');
// }
// const circle = document.getElementById('alert');
// console.log(circle.textContent);

// const heading = document.getElementsByTagName('h1');
// console.log(heading.innerHTML);

// const paragraph = document.getElementsByTagName();
