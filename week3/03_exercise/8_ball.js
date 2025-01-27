function magic8Ball(){
    let question = prompt('Ask a yes or no quesstion: ');
    console.log(`You asked: ${question}`);
}

magic8Ball();

function random_number(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function answer(){
    switch(random_number(1,8)){
        case 1:
            return "Yes, definitely!";
            break;
        case 2:
            console.log("It is certain.");
            break;
        case 3:
            console.log("Reply hazy, try again.");
            break;
        case 4:
            console.log("Ask again later.");
            break;
        case 5:
            console.log("Better not tell you now.");
            break;
        case 6:
            console.log("My sources say no.");
            break;
        case 7:
            console.log("Outlook not so good.");
            break;
        case 8:
            console.log("Signs point to yes.");
            break;
    }
}
alert(answer());


