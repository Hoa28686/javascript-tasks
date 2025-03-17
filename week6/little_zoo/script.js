const ul = document.querySelector("#animalList");
const addBtn = document.querySelector("#addAnimal");

const types = document.querySelector("#filterType");
const search = document.querySelector("#searchAnimal");
const sortBtn = document.querySelector("#sortAnimals");

// 1. Array of animals
let animals = [
  { name: "cheetah", type: "Mammal" },
  { name: "wolf", type: "Mammal" },
  //   { name: "elephant", type: "Mammal" },
  //   { name: "kangaroo", type: "Mammal" },
  { name: "panda", type: "Mammal" },
  { name: "eagle", type: "Bird" },
  { name: "chicken", type: "Bird" },
  //   { name: "swan", type: "Bird" },
  //   { name: "turtle", type: "Reptiles" },
  //   { name: "snake", type: "Reptiles" },
  //   { name: "lizard", type: "Reptiles" },
  //   { name: "frog", type: "Amphibians" },
  //   { name: "salmon", type: "Fish" },
  //   { name: "tuna", type: "Fish" },
];

//2.  Display animals

function display(animals) {
  ul.innerHTML = ""; //use innerHTML instead of textContent so the list is not repeated when updating
  animals.forEach((a) => {
    const li = document.createElement("li");
    li.innerHTML = `
    ${a.name} - ${a.type}
    <button class="remove-btn">x</button>`;
    ul.appendChild(li);
  });
}
display(animals);

//3.  add new animal to the list
addBtn.addEventListener("click", addAnimal);

function addAnimal() {
  const newName = document.querySelector("#newAnimalName");
  const newType = document.querySelector("#newAnimalType");
  const newNameText = newName.value.trim().toLowerCase();

  if (!newNameText) {
    alert("Please fill animal name!");
  } else if (newType.value == "") {
    alert("Please select animal type!");
  } else {
    animals.push({ name: newNameText, type: newType.value });
    display(animals);

    //clear input field
    newName.value = "";
    newType.value = "";
  }
}

//4. filter animal by type
types.addEventListener("change", filterAnimal);

function filterAnimal() {
  const filtered = animals.filter(
    (a) => a.type === types.value || types.value === "All"
  );
  display(filtered);
}

//5. search animals
// search.addEventListener('keyup', searchAnimal);
// function searchAnimal(){
//     let searchText=search.value.trim().toLowerCase();
//     const  lists=document.querySelectorAll('li');
//     lists.forEach(i=>{
//         const liItems=i.textContent.toLowerCase();
//         if(liItems.includes(searchText)){
//             i.style.display='block';
//         }else{
//             i.style.display='none';
//         }
//     })
// }

// Method2: use filter to create new function
search.addEventListener("keyup", searchAnimal);

function searchAnimal() {
  let searchText = search.value.trim().toLowerCase();
  if (!ul.textContent.includes(searchText)) {
    ul.innerHTML = "No animals found.";
  } else {
    const matchAnimal = animals.filter((a) =>
      a.name.toLowerCase().includes(searchText)
    );
    display(matchAnimal);
  }
}

// 6. remove animal from the list, but the zoo will has it back when page refreshes
ul.addEventListener("click", removeAnimal);

// function removeAnimal(e) {
//   if (e.target.classList.contains("remove-btn")) {
//     let li = e.target.parentElement;
//     ul.removeChild(e.target.parentElement);
//   }
// }

function removeAnimal(e) {
  e.preventDefault();
  if (e.target.classList.contains("remove-btn")) {
    let li = e.target.parentElement;

    // method1: use index
    // const index=animals.findIndex(a => li.textContent.includes(`${a.name} - ${a.type}`));
    // animals.splice(index,1);

    // method2:use filter
    animals = animals.filter(
      (a) => !li.textContent.includes(`${a.name} - ${a.type}`)
    );

    display(animals);
  }
}

//7. sort animal from the list
sortBtn.addEventListener("click", sortAnimals);
function sortAnimals() {
  animals.sort((a1, a2) => (a1.name < a2.name ? -1 : 1));
  // animals.sort((a1,a2)=>(a1.name<a2.name)? -1:((a1.name>a2.name)?1:0));
  display(animals);
}
