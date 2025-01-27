/* 
Write a function named canEat:
Take two parameters: isHungry and hasFood.
If both are true, return "Time to eat!".
If either is false, return "You need to find food!"
Call the function with different combinations of isHungry and hasFood. 
*/
const canEat = (isHungry, hasFood) => (isHungry) && (hasFood) ? console.log('Time to eat!') : console.log("You need to find food!");

canEat(true, false);
canEat(true, true);
canEat(false, false);
canEat(false, true);
