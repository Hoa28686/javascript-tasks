/*
Write a function named canVote:
Take an age as a parameter.
Return true if the age is 18 or older, otherwise false.
Print "Eligible to vote" or "Not eligible to vote" based on the result of the function. 
*/

const canVote = age => {
    if (age >= 18){
        console.log("Eligible to vote");
        return true;
    }else {
        console.log("Not eligible to vote");
        return false;
    }
}

canVote(18);
canVote(19);
canVote(20);
canVote(17);
canVote(-17);
canVote(18.2);
