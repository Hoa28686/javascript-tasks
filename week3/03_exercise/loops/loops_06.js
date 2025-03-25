/* 
Write a function named askToContinue:
- Prompt the user to enter a number.
- Then, ask: "Do you want to continue giving numbers? (y/n)".
- If the user answers "y", ask for another number.
- If the user answers "n", stop asking and log the average of all entered numbers in the console. 
*/


const askToContinue=()=>{
    
    let answer='y';
    let array =[];
    let sum =0;
    while(answer == 'y'){
        let input = Number(prompt('Enter a number: '));
        array.push(input);
        sum+=input;
        answer = prompt("Do you want to continue giving numbers? (y/n) ");
        while (answer != 'y' && answer != 'n'){
            answer =prompt("Answer y or n: ");

        }
    }
    
    console.log('The average of all entered numbers is ',sum/(array.length));


}
askToContinue();