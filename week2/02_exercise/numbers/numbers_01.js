/* 
Create two variables:
numString1 with the value "42".
numString2 with the value "3.14".
Use parseInt() to convert numString1 into an integer.
Use parseFloat() to convert numString2 into a floating-point number.
Print the results using console.log() with messages:
"The integer is 42."
"The floating-point number is 3.14."
*/

let numString1 = "42";
let numString2 = "3.14";


let num1 = parseInt(numString1);
let num1a = Number.parseInt(numString1);

let num2 = parseFloat(numString2);
let num2a = Number.parseFloat(numString2);


console.log('The inetger is ' + num1 + '.');
console.log('The inetger is ', num1a, '.');
console.log('The floating-point number is '+ num2 + '.');
console.log('The floating-point number is ', num2a, '.');