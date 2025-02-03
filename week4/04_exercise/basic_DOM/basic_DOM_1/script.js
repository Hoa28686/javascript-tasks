/* 
Use an HTML file with a <p> element that has the ID content.
Write JavaScript to select this element using getElementById.
Create a function that changes its text to "Hello, World!" when a button is clicked.
*/

const text = document.getElementById("content");
// console.log(text.textContent);
const button = document.getElementById("first_button");

function change_text() {
    console.log('Button was clicked');
    text.textContent ='Hello World!';
    button.textContent= 'I was clicked';
}

console.log(text.textContent);

function change_back() {
  
    text.textContent ='This is a paragraph.';
}