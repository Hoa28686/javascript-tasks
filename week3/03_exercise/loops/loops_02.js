/* 
Write a function named logEvenNumbers:
- Use a loop to display all even numbers less than 100 in the pattern: 2, 98, 4, 96, ..., 50.
Display all numbers in a single line in the console.; 
*/
let result = '';
const logEvenNumbers = () => {
    for (i=2; i<51; i+=2){
        result = result +' '+ i 
        if (i<50){result += ' ' + (100-i)};
    }
    console.log(result);
}

logEvenNumbers();


//while loops:
result2 = '';
const logEvenNumbers2 = () => {
    let i=2;
    while (i<51){
        result2 = result2 + ' ' +i;
        if (i<50){result2 += ' ' + (100-i)};
        i+=2;
    }
    console.log(result);
}
logEvenNumbers2();