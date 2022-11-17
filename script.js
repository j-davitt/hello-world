

function pageWelcome() {
    let usersName = prompt('What is your name?');
    while (usersName == '' || usersName == null) {
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
function bourbonCounter() {
    let bottleCount = prompt('How many bottles? 1-5');
    while (bottleCount < 1 || bottleCount > 5) {
        bottleCount = prompt('Must be a number between 1 and 5');
    }
    for (i = 0; i < bottleCount; i++) {
        document.write("<img class='rating-pic' src='blantons.jpg' alt= 'beautiful bourbon' />");
    }
}
