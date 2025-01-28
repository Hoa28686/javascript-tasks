/* 
Write a function named calculateAverageUntilZero:
- Continuously prompt the user to input numbers.
- Stop asking for inputs when the user enters 0.
- Calculate and log the average of all entered numbers in the console once the loop ends.
 */
const prompt=require('prompt-sync')();

const calculateAverageUntilZero = () => {
    let input;
    let array =[];
    let sum = 0;
    while (input !=0){
        input = Number(prompt('Enter a number: '));
        array.push(input);
        sum += input;
    }
    console.log('Length of array: ', array.length);
    console.log('The average of all entered numbers is ', (sum/(array.length-1)).toFixed(2));
}
calculateAverageUntilZero();