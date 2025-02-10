/* 
Create a form with a required name and email field.
Write JavaScript to:
- Prevent form submission if either field is empty.
- Display an error message if fields are missing. 
*/

const name=document.querySelector('#name');
const email=document.querySelector('#email');
const button=document.querySelector('button');
function noSubmit(){
    if (name==="" || email===""){
        event.preventDefault();
        alert("Enter all required fields.");
    }
}
button.addEventListener('click', noSubmit);