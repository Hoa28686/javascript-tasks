const ul=document.querySelector('#animalList');
const add = document.querySelector('#newAnimalName');
const addBtn= document.querySelector('#addAnimal');
const type=document.querySelectorAll('#newAnimalType');

let animals=['Fox', 'Bear', 'Eagle'];

// Display list of animals

function display(){
    ul.innerHTML='List of animals in our zoo: '; //use innerHTML instead of textContent so the list is not repeated
    animals.forEach(a=> {
        const li=document.createElement('li');
        li.textContent=a;
        ul.append(li);
    })
}
display()


// add new animal to the list
addBtn.addEventListener('click', addAnimal);

function addAnimal() {
    animals.push(add.value.toLowerCase());
    add.value=''; //clear input field
    display();
}

// filter animal type
