/* Create a variable description and assign it the value " JavaScript is Fun and powerful! ".
Perform the following:
Trim the extra spaces using .trim().
Convert the string to lowercase.
Check if it includes the word "fun".
Replace "powerful" with "amazing".
Print the final string and whether it includes "fun" using console.log().
Example output:
"Final description: javascript is fun and amazing!"
"Does it include 'fun'? true"
 */

let description = " JavaScript is Fun and powerful! ";
let final = description.trim().toLowerCase().replace('powerful', 'amazing');

console.log(`Final descripttion: ${final}`);
console.log(`Does it include 'fun'? ${final.includes('fun')}`);