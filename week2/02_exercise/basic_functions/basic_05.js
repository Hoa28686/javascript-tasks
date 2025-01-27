/* Create a function named generateRandomNumber that:
Takes two parameters, min and max.
Returns a random integer between min and max (inclusive).
Call the function with the arguments 1 and 10.
Print the result using console.log().

Hint: Use Math.random(), Math.floor(), and simple math.

*/

function generateRandomNumber(min, max){
    let scale = Math.random() * (max - min +1);
    let floor = Math.floor(scale);
    return floor + min;
}
console.log(generateRandomNumber(1, 10));
console.log(generateRandomNumber(1, 10));
console.log(generateRandomNumber(1, 10));
console.log(generateRandomNumber(1, 10));
console.log(generateRandomNumber(1, 10));
console.log(generateRandomNumber(1, 10));
console.log(generateRandomNumber(1, 10));
console.log(generateRandomNumber(1, 10));
console.log(generateRandomNumber(1, 10));
console.log(generateRandomNumber(1, 10));
console.log(generateRandomNumber(1, 10));
console.log(generateRandomNumber(1, 10));
console.log(generateRandomNumber(1, 10));
console.log(generateRandomNumber(1, 10));
console.log(generateRandomNumber(1, 10));
console.log(generateRandomNumber(1, 10));