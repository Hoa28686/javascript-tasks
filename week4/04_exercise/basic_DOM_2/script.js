/*
Use an HTML file with an <input> field, a <button>, and a <ul> list with the ID fruitList.
Write JavaScript to:
- Retrieve the value from the input field when the button is clicked.
- Create a new <li> element and set its text content to the input field's value.
- Append the <li> element to the list.
- Clear the input field after adding the fruit.
*/

const fruit_list = document.querySelector('#fruitList')
const input=document.querySelector('#fruitInput');

const button=document.querySelector('#addFruitBtn')

function add_list() {
    const new_fruit=document.createElement('li');
    new_fruit.textContent = input.value;
    fruit_list.append(new_fruit);
    input.value='';

}


button.addEventListener('click', add_list)


