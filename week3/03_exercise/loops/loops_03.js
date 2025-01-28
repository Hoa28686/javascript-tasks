/* 
Write a function named calculateAverageSpeed:
- Continuously prompt the user to input distance (in kilometers) and time (in hours).
- After each input, calculate and log the average speed in the console.
- Stop asking for inputs when the user enters 0 for distance. 
*/

const prompt=require('prompt-sync')();
const calculateAverageSpeed = () => {
    let distance;
    while (distance != 0){
        distance = prompt('Distance in kilometers: ');
        if (distance == 0){
            break;
        }
        let time = prompt('Time in hours: ');
        let speed = (distance/time).toFixed(2);
        console.log('The speed is: ', speed);
        
    }
}

calculateAverageSpeed();