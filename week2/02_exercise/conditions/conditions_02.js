/* 
Write a function named checkForFox:
Take a boolean parameter hasFox.
If hasFox is true, return "You have a fox as a pet!"
Otherwise, return "No fox detected!"
Call the function with true and false and print the result. 
*/
// const checkForFox = hasFox => {
//     if (hasFox) {
//         console.log("You have a fox as a pet!");
//     }
//     else{
//         console.log("No fox detected!");
//     }
// }


const checkForFox = hasFox => (hasFox) ? console.log("You have a fox as a pet!"): console.log("No fox detected!");
checkForFox(true);
checkForFox(false);