// Exercise 1: Determine array length and conditional check
let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];

/*
Create a function called myAlphabetLength that logs the length of the myAlphabet array.
If the length is 5 or more, log: "Array length is sufficient".
Otherwise, log: "Array length is too short."
*/
// Write your function here
console.log('1. ')
const myAlphabetLength = () => {
  let length = myAlphabet.length;
  console.log("Array length:", length);
  if (length >= 5) {
    console.log("Array length is sufficient");
  } else {
    console.log("Array length is too short.");
  }
};
myAlphabetLength();

// Exercise 2: Iterate over the planets array and log each planet with its index
const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];

/*
Log each planet in the planets array along with its index.
Expected outcome:
"Planet: Mercury, Index: 0"
...
"Planet: Jupiter, Index: 4"
*/
// Write your code here
console.log('2. ')
planets.forEach((p, i) => {
  console.log(`Planet: ${p}, Index: ${i}`);
});

// Exercise 3: Log array items with their types using mixedValues array
const mixedValues = [42, "Hello", true, { name: "Fox" }, null, undefined];

/*
Iterate over the mixedValues array, logging each item, its index, and data type.
Expected outcome:
"Item: 42, Index: 0, Type: number"
...
"Item: undefined, Index: 5, Type: undefined"
*/
// Write your code here
console.log('3. ')
mixedValues.forEach((item, index) => {
  console.log(`Item: ${item}, Index: ${index}, Type: ${typeof item}`);
});
// Exercise 4: Log each item of myArr without using a loop
let myArr = [1, "Dog", 3.14, false];

/*
Log each item in myArr without explicitly using a loop.
Expected outcome: 1, "Dog", 3.14, false
*/
// Write your code here
console.log('4. ')
console.log(myArr.join(', '))
// Exercise 5: Find common animal species between reserve1Animals and reserve2Animals
let reserve1Animals = ["Fox", "Deer", "Owl", "Bear"];
let reserve2Animals = ["Bear", "Wolf", "Eagle", "Fox"];

/*
Identify and log any animal species found in both reserve1Animals and reserve2Animals.
Expected outcome:
"Common species: Fox"
"Common species: Bear"
*/
// Write your code here
console.log('5. ')
let common=reserve1Animals.filter(a=>reserve2Animals.includes(a));
common.forEach(c=>console.log(`Common species: ${c}`));
// Exercise 6: Log each letter of names from the animalNames array
let animalNames = ["Lion", "Tiger", "Panda"];

/*
For each item in the animalNames array, log every letter.
Expected outcome:
"Letters in 'Lion': L, i, o, n"
...
"Letters in 'Panda': P, a, n, d, a"
*/
// Write your code here
console.log('6. ')
animalNames.forEach(a=>{
    let nameAndLetter=[];
    for(letter of a){nameAndLetter.push(letter)};
    console.log(`Letter in ${a}: ${nameAndLetter.join(', ')}`);
})

// method2: use split
// animalNames.forEach(a=>console.log(`Letter in ${a}: ${a.split('').join(', ')}`));
// 

// Exercise 7: Filter only positive temperatures from the temperatures array
let temperatures = [-10, 5, -3, 15, -8, 20, 2];

/*
Write a function getPositiveTemperatures that returns a new array
containing only temperatures greater than 0 from the temperatures array.
Expected outcome: [5, 15, 20, 2]
*/
// Write your function here
console.log('7. ')
function getPositiveTemperatures(temperatures){
    let positive= temperatures.filter(t=>t>0);
    return positive;
    // return temperatures.filter(t=>t>0);
}
console.log(getPositiveTemperatures(temperatures));


// Exercise 8: Find the index of "Fox" in the zooAnimals array
let zooAnimals = ["Elephant", "Giraffe", "Panda", "Fox", "Kangaroo"];

/*
Find and store the index of "Fox" in the zooAnimals array.
Expected outcome: "Index of Fox: 3"
*/
// Write your code here
console.log('8. ')
let index=[];
zooAnimals.forEach((a,i)=>{
    if(a==='Fox'){
        index.push(i);
    }
})
console.log('Index of Fox: ',index.join(', '))
// Exercise 9: Try to find the index of an animal not in zooAnimals
/*
Find the index of "Penguin" in the zooAnimals array.
If it's not found, log "Penguin is not in the zoo."
Expected outcome: -1
*/
// Write your code here
console.log('9. ')
let indexPen=zooAnimals.indexOf('Penguin');
console.log(indexPen)
if (indexPen==-1){
    console.log("Penguin is not in the zoo.")};
// Exercise 10: Replace "Giraffe" with "Cheetah" in zooAnimals
/*
Replace "Giraffe" with "Cheetah" in the zooAnimals array.
Expected outcome: ['Elephant', 'Cheetah', 'Panda', 'Fox', 'Kangaroo']
*/
// Write your code here
console.log('10. ')
zooAnimals.splice(zooAnimals.indexOf('Giraffe'),1,"Cheetah");
console.log(zooAnimals)
// Exercise 11: Sort the safariAnimals array alphabetically
let safariAnimals = ["Zebra", "Leopard", "Elephant", "Gazelle"];

/*
Sort the safariAnimals array in alphabetical order.
Expected outcome: ['Elephant', 'Gazelle', 'Leopard', 'Zebra']
*/
// Write your code here
console.log('11. ')
safariAnimals.sort();
console.log(safariAnimals);
// Exercise 12: Reverse the order of the safariAnimals array
/*
Reverse the order of the safariAnimals array.
Expected outcome: ['Zebra', 'Leopard', 'Gazelle', 'Elephant']
*/
// Write your code here
console.log('12. ')
safariAnimals.reverse();
console.log(safariAnimals);
// Exercise 13: Check if "Tiger" is in zooAnimals
/*
Check if the zooAnimals array includes "Tiger".
Expected outcome:
true (if the array contains "Tiger")
false (if it does not)
*/
// Write your code here
console.log('13. ')
console.log(zooAnimals.includes('Tiger'));
// Exercise 14: Find all occurrences of "John" in attendees
let attendees = ["John", "Sarah", "John", "Alex", "John"];

/*
Find all positions where "John" appears in the attendees array.
Expected outcome: [0, 2, 4]
*/
// Write your code here
console.log('14. ')
let position=[];
attendees.forEach((a,i)=>{
    if(a==='John'){
        position.push(i);
    }
})
console.log(position);
// Exercise 15: Convert all names in attendees array to uppercase
/*
Create a new array where every name in attendees is written in uppercase.
Expected outcome: ['JOHN', 'SARAH', 'JOHN', 'ALEX', 'JOHN']
*/
// Write your code here
console.log('15. ')
let upper=attendees.map(a=>a.toUpperCase());
console.log(upper);
// Exercise 16: Merge forestAnimals and farmAnimals arrays
let forestAnimals = ["Deer", "Bear", "Wolf"];
let farmAnimals = ["Cow", "Sheep", "Goat"];

/*
Merge forestAnimals and farmAnimals into a new array.
Expected outcome: ['Deer', 'Bear', 'Wolf', 'Cow', 'Sheep', 'Goat']
*/
// Write your code here
console.log('16. ')
let merge=forestAnimals.concat(farmAnimals);
console.log(merge);
// Exercise 17: Remove first and last elements from birdSpecies
let birdSpecies = ["Eagle", "Owl", "Hawk", "Sparrow", "Penguin"];

/*
Remove the first and last elements from the birdSpecies array.
Expected outcome: ['Owl', 'Hawk', 'Sparrow']
*/
// Write your code here
console.log('17. ')
birdSpecies.shift();
birdSpecies.pop();
console.log(birdSpecies);
// Exercise 18: Use `splice` to remove and replace elements in numbers
let numbers = [10, 20, 30, 40, 50];

/*
Use splice to remove "30" and replace it with "25" and "27".
Expected outcome: [10, 20, 25, 27, 40, 50]
*/
// Write your code here
console.log('18. ')
numbers.splice(2, 1, 25, 27);
console.log(numbers);
// Exercise 19: Increase each price by 10% using `map`
let prices = [5, 10, 15, 20];

/*
Create a new array where each price is increased by 10%.
Expected outcome: [5.5, 11, 16.5, 22]
*/
// Write your function here
console.log('19. ')
let ten = prices.map((p) => p * 1.1);
console.log(ten);
// Exercise 20: Filter words longer than 5 letters using `filter`
let words = ["apple", "banana", "cherry", "kiwi", "strawberry"];

/*
Create a new array containing only words longer than 5 letters from the words array.
Expected outcome: ['banana', 'cherry', 'strawberry']
*/
// Write your function here
console.log('20. ')
let filterArray = words.filter((w) => w.length > 5);
console.log(filterArray);
