/* 
Create an HTML file with a button and a counter display.
Write JavaScript to count and display the number of times the button is clicked. 
*/
const button=document.querySelector('button');
const h1=document.querySelector('h1');

let i=0;
function count(){
    i++;
    h1.textContent = i;

}
button.addEventListener('click',count);