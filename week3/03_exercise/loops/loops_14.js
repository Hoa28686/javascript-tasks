/* 
Write a function named createWordPyramid:
- Take a word (e.g., "code") as input.
- Use a loop to build a pyramid pattern:
    Example for "code":
    c
    co
    cod
    code
 */


const createWordPyramid=() =>{
    let word = prompt('Enter a word: ');
    let next_layer=[];
    console.log('length',word.length);
    for (i of word){
        next_layer.push(i);
        console.log(next_layer.join(''));
        }
}

createWordPyramid();
