/* 
Write a function named getDayName:
Take a parameter day.
Use a switch statement to:
Return the name of the day (1 = "Monday", 2 = "Tuesday", etc.).
Use default to return "Invalid day" for invalid values.
Call the function with valid and invalid day numbers. 
*/

const getDayName = day => {
    switch(day){
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day");
    }
}

getDayName(1);
getDayName(2);
getDayName(3);
getDayName(4);
getDayName(5);
getDayName(6);
getDayName(7);
getDayName(20);
getDayName(-5);
getDayName(0.5);
getDayName('t');
getDayName('hi');
getDayName(1.2);