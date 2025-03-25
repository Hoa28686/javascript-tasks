/* 
Write a function named sumAndAverage:
- Ask the user to input ten numbers.
- Calculate and log:
    - The sum of the numbers.
    - The average of the numbers.
    - The smallest and largest numbers.
Display all results in the console.
*/


const sumAndAverage =() =>{
    let array_num= [];
    let sum = 0;
    console.log('Enter 10 numbers ');
    for (i=1; i<=10; i++){
        let input = Number(prompt(`${i}: `));
        sum += input;
        array_num.push(input);
    }
    console.log('Sum: ',sum);
    console.log('Average: ',sum/10);
    console.log('Smallest number: ',Math.min(...array_num));
    console.log('Largest number: ',Math.max(...array_num));
}

sumAndAverage();