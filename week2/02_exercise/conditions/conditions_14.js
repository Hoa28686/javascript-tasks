/*
Write a function named rainAdvice:
Take a parameter isRaining.
Use a ternary operator to return:
"Stay indoors" if isRaining is true.
"Enjoy the outdoors!" otherwise.
Call the function with different values for isRaining. 
*/
const rainAdvice = isRaining => isRaining == true ? console.log("Stay indoors") : console.log("Enjoy the outdoors!");

rainAdvice(true);
rainAdvice(false);
