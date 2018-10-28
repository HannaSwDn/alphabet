// DOM variables
let input = document.getElementById("input");
let result = document.getElementById("result");
// global variables
let alphabet = ['abcdefghijklmnopqrstuvwxyz'];
let userInput = [];
let userTime;
// variables to calculate how long it takes for user to type the whole alphabet
let a, b, c, d;

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
        result.innerHTML = `You typed the whole alphabet in ${userTime} seconds!`;
        input.value = "";
        userInput = [];
    }
});
