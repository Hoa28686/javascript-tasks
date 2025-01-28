/* 
Write a function named buildGroceryList:
- Prompt the user to input grocery items one by one.
- Stop when the user types "done".
Log the complete grocery list in the console.
 */
const prompt=require('prompt-sync')();
const buildGroceryList=()=>{
    let input;
    let array=[];
    while (input != 'done'){
        
        input = prompt('Enter grocery item: ');
        if (input != 'done') array.push(input);
    }
    console.log('Grocery list:')
    for(i of array) {
        console.log(`-> ${i}`);
    }
}

buildGroceryList();