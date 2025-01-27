/* 
Write a function named canEnterEvent:
Take two parameters: age and hasID.
If age is 18 or older AND hasID is true, return "You can enter the event."
Otherwise, return "You cannot enter."
Call the function with different combinations of age and hasID. 
*/

const canEnterEvent = (age, hasID) => {
    if (age >= 18 && (hasID)){
        console.log("You can enter the event.");
    }else{
        console.log("You cannot enter.");
    }
}

canEnterEvent(18, true);
canEnterEvent(18, false);
canEnterEvent(17, true);
canEnterEvent(17, false);
canEnterEvent(200, true);
canEnterEvent(200, false);