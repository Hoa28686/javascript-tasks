/* 
Write a function named countEvenNumbers:
- Prompt the user to input 20 numbers one by one.
- After all numbers are entered, log how many of them were even.
Display the result in the console. 
*/


const countEvenNumbers = () => {
    console.log('Enter 20 numbers one by one');
    let even = '';
    for (i=1; i<=20; i++){
        let input = prompt(`Number${i}: `);
        if (input%2==0) even = even +' '+input;
    }
    console.log('Even numbers are: ',even);
}
countEvenNumbers();