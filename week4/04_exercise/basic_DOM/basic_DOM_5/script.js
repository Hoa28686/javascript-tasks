/*
Create an HTML file with:
- A <button> to change the background color.
- A <input> field for users to enter a color.
- A <p> element where the text color changes based on the input.

Write JavaScript to:
- Change the background color to a random color when the button is clicked.
- Update the paragraph’s text color to match the user’s input value
*/
const button =document.querySelector('#background');
const input=document.querySelector('#input');
const p=document.querySelector('#p');

function changeBackground() {
    const r=Math.floor(Math.random()*256);//0-255
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);
    document.body.style.backgroundColor=button.style.color=`rgb(${r},${g},${b})`;
    
}
button.addEventListener('click', changeBackground);

function changeText(){
    p.style.color=input.value;
}
input.addEventListener('input', changeText);