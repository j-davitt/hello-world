alert('ANNOYING!');

    
function pageWelcome(){
    let usersName = prompt('What is your name?');
    if (usersName == ''){
        alert("You didn't type a name");
        usersName = prompt('I must know your name. What is it?');
    }
    if (confirm('All your base are belong to us ' + usersName)) {
        document.write('BWAHAHAHA all your base are belong to us ' + usersName);
    } else {
        document.write('I really wish all your base are belong to us ' + usersName);
    }
}


