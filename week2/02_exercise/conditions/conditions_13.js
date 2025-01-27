/* 
Write a function named planAdventure:
Take three parameters: isWeekend, isSunny, and likesFoxes.
Use logical operators:
If it’s the weekend AND sunny AND likes foxes, return "Perfect day for a fox adventure!"
If it’s the weekend OR sunny, return "Good day, but not perfect."
Otherwise, return "Maybe another day."
Call the function with different combinations of conditions. 
*/

const planAdventure = (isWeekend, isSunny, likesFoxes) => {
    if (isWeekend == 'weekend' && isSunny == 'sunny' && likesFoxes == 'likes foxes'){
        console.log("Perfect day for a fox adventure!");
    } else if (isWeekend == 'weekend' || isSunny == 'sunny'){
        console.log("Good day, but not perfect.");
    } else {
        console.log("Maybe another day.");
    }
}

planAdventure('weekend','sunny','likes foxes'); //"Perfect day for a fox adventure!"
planAdventure('weekend','rainy','likes foxes'); 
planAdventure('tisdag','sunny','likes foxes');
planAdventure('weekend','sunny','likes cats'); //"Perfect day for a fox adventure!"
planAdventure('week','sun','likes foxes');