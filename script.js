
    
function pageWelcome(){
    let usersName = prompt('What is your name?');
    if (usersName == ''){
        alert("You didn't type a name");
        usersName = prompt('I must know your name. What is it?');
    }
    let luckyNumber = Math.floor(Math.random() * 100);
    if (confirm('Would you like a lucky number, ' + usersName + '?')) {
        document.write('Welcome ' + usersName + '. Your lucky number is: ' + luckyNumber);
    } else {
        document.write('Welcome ' + usersName + '. This is where your lucky number would be.... IF YOU HAD ONE!');
    }
}


// lucky number generator

