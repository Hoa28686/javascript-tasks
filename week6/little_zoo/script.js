const ul=document.querySelector('#animalList');
const addInput = document.querySelector('#newAnimalName');
const addBtn= document.querySelector('#addAnimal');
const types=document.querySelector('#filterType');
const search=document.querySelector('#searchAnimal');
const sortBtn=document.querySelector('#sortAnimals');


let animals=[
    {name:'fox',type:'Mammal', age: 3, color:'brown'},
    {name:'lion',type:'Mammal', age: 1,color:'white'},
    {name:'bear',type:'Mammal', age: 5,color:'black'},
    {name:'cheetah',type:'Mammal', age: 2,color:'blue'},
    {name:'wolf',type:'Mammal', age: 5,color:'white'},
    {name:'elephant',type:'Mammal', age: 3,color:'grey'},
    {name:'giraffe',type:'Mammal', age: 3,color:'yellow'},
    {name:'kangaroo',type:'Mammal', age: 3,color:'pink'},
    {name:'kangaroo',type:'Mammal', age: 5,color:'blue'},
    {name:'panda',type:'Mammal', age: 3,color:'green'},
    {name:'eagle',type:'Bird', age: 3,color:'brown'},
    {name:'chicken',type:'Bird', age: 2,color:'red'},
    {name:'duck',type:'Bird', age: 4,color:'purple'},
    {name:'swan',type:'Bird', age: 2,color:'black'},
    {name:'turtle',type:'Reptiles', age: 1,color:'orange'},
    {name:'snake',type:'Reptiles', age: 2,color:'green'},
    {name:'lizard',type:'Reptiles', age: 4,color:'white'},
    {name:'frog',type:'Amphibians', age: 1,color:'blue'},
    {name:'salmon',type:'Fish', age:3,color:'red'},
    {name:'tuna',type:'Fish', age: 2,color:'yellow'}
];

// Display list of animals

function display(animals){
    ul.innerHTML='List of animals in our zoo: '; //use innerHTML instead of textContent so the list is not repeated when updating
    animals.forEach(a=> {
        const li=document.createElement('li');
        li.textContent=`${a.name} [${a.type}] ${a.age} ${a.color}`;
        ul.appendChild(li);
        //create delete button
        const btn=document.createElement('button');
        btn.className='deleteBtn';
        btn.textContent='x';
        btn.style.lineHeight='10px';
        li.appendChild(btn);
        // btn.addEventListener('click', ()=>{ul.removeChild(li)});
    })

}

display(animals)


// add new animal to the list
addBtn.addEventListener('click', addAnimal);

function addAnimal() {
    animals.push(addInput.value.trim().toLowerCase());
    addInput.value=''; //clear input field
    display();
}

//4. filter animal by type
types.addEventListener('change', filterAnimal);
function filterAnimal(){
    const filtered=animals.filter(a=>a.type===types.value);
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
search.addEventListener('input', searchAnimal);
function searchAnimal(){
    let searchText=search.value.trim().toLowerCase();
    const matchAnimal=animals.filter(a=>a.name.toLowerCase().includes(searchText));
    display(matchAnimal);
    
}

//6. remove animal from the list


//7. sort animal from the list
sortBtn.addEventListener('click', sortAnimals);
function sortAnimals(){
    animals.sort((a1,a2)=>(a1.name<a2.name)? -1:1);
    // animals.sort((a1,a2)=>(a1.name<a2.name)? -1:((a1.name>a2.name)?1:0));
    display(animals);
}
