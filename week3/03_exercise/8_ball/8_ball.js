function random_number(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function answer(){
    switch(random_number(1,8)){
        case 1:
            return "Yes, definitely!";
            break;
        case 2:
            return "It is certain.";
            break;
        case 3:
            return "Reply hazy, try again.";
            break;
        case 4:
            return "Ask again later.";
            break;
        case 5:
            return "Better not tell you now.";
            break;
        case 6:
            return "My sources say no.";
            break;
        case 7:
            return "Outlook not so good.";
            break;
        case 8:
            return "Signs point to yes.";
            break;
    }
}

function magic8Ball(){
    let question = prompt('Ask a yes or no quesstion: ');
    console.log(`You asked: ${question}`);
    answer();
    alert(`The answer is ${answer()}`);
}

magic8Ball();

