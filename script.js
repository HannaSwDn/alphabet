// DOM variables
let input = document.getElementById("input");
let result = document.getElementById("result");
let nameDiv = document.getElementById("name");
// global variables
let alphabet = ['abcdefghijklmnopqrstuvwxyz'];
let userInput = [];
let userTime;
// variables to calculate how long it takes for user to type the whole alphabet
let a, b, c, d;

const getName = () => {
    userName = document.getElementById("userName").value;
    nameDiv.style.opacity = '0';
}

input.addEventListener('keypress', event => {
    // we want to start the timer when user presses the a key, since it is the first letter of the alphabet
    if (event.key == 'a') {
        a = new Date();
        b = a.getTime();
    }

    if (event.keyCode == 13) {
        // setting userInput to the value of input
        userInput = input.value;
        c = new Date();
        d = c.getTime();
        userTime = Math.abs(b - d);
        // checks if userInput is equal to alphabet
        if (userInput == alphabet) {
            result.innerHTML = `You typed the whole alphabet in ${userTime} seconds!`;
        } else {
            result.innerHTML = `Try again ${userName}...`;
        }
        input.value = "";
        userInput = [];
    }
});
