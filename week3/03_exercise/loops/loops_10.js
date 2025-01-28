/* 
Write a function named countdownTimer:
- Take a number (e.g., 10) as input and simulate a countdown in the console.
Log each number in descending order until 0, and then log: "Time's up!".
 */
const prompt=require('prompt-sync')();
const countdownTimer =() =>{
    let count = Number(prompt('Enter a number to start the timer: '));
    for (let i=count; i>=0; i--){
        setTimeout(() => {
            console.log(i);
            if (i==0) console.log("Time's up!");
        }, (count-i)*1000);
        }
    
        
}
countdownTimer();