/* 
Create a form with a required name and email field.
Write JavaScript to:
- Prevent form submission if either field is empty.
- Display an error message if fields are missing. 
*/

const name=document.querySelector('#name');
const email=document.querySelector('#email');
const button=document.querySelector('button');
const message=document.querySelector('span')
function noSubmit(){
    if (name.value ==="" || email.value===""){
        event.preventDefault();
        message.style.display="block";
        // alert("Enter all required fields.");
    }
}
button.addEventListener('click', noSubmit);