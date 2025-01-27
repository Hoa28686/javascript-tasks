/* 
Write a function named findFox:
Take two parameters: hasFox and foxName.
If hasFox is true AND foxName equals "Fiona", return "Fiona the fox is here!"
Otherwise, return "No foxes found."
Call the function with different fox names. 
*/

const findFox = (hasFox, foxName) => ((hasFox) && foxName == 'Fiona') ? console.log("Fiona the fox is here!") : console.log("No foxes found.");

findFox(true, 'Fiona');
findFox(false, 'Fiona');
findFox(true, 'Emmi');
findFox(false, 'Fia');
findFox(true, 'Me');