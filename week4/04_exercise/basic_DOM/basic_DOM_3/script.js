/*
Create an HTML file with an <input> field and a <div> with the ID displayText.
Write JavaScript to:
- Continuously update the <div> with the input field's value as the user types.
- Use the input event for real-time updates.
*/
const input=document.querySelector('#live_input');
const display= document.querySelector('#displayText');

// function show_live(event) {
//     display.textContent=`You typed: ${event.target.value}`;
// }
function show_live() {
    display.textContent=`You typed: ${input.value}`;
}

input.addEventListener('input',show_live);