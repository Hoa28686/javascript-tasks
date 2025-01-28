/* 
Write a function named findMinMax:
- Ask the user how many numbers they want to input.
- Then prompt them to enter that many numbers.
- Once all numbers are entered, determine and log:
- The smallest number.
- The largest number.
Display the results in the console. 
*/
const prompt=require('prompt-sync')();
const finMinMax = () => {
    let count = prompt('How many numbers they want to input: ');
    let array=[];
    for (i=1; i<=count; i++){
        let input = prompt(`${i}: `);
        array.push(input);
    }
    console.log('The smallest number: ', Math.min(...array));
    console.log('The largest number: ', Math.max(...array));
}
finMinMax();