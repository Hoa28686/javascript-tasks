/*
Create an HTML file with a <p> element and a button.
Write JavaScript to toggle the visibility of the paragraph each time the button is clicked.
 */

const para= document.querySelector('#para');
const button= document.querySelector('#button');



function show(){
    para.style.display ="none";
}
// para.style.display ="none";


button.addEventListener('click', show);