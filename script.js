// DOM variables
let input = document.getElementById("input");
let result = document.getElementById("result");
let nameDiv = document.getElementById("name");
let header1 = document.getElementById("header1");
let timer = document.getElementById("timer");
// global variables
let alphabet = ['abcdefghijklmnopqrstuvwxyz'];
let userInput = [];
let userTime;
// variables to calculate how long it takes for user to type the whole alphabet
let a, b, c, d;

const getName = () => {
    if (document.getElementById("userName").value == "") {
        alert('please input your name :)');
    } else {
        userName = document.getElementById("userName").value;
        header1.innerHTML = `How fast can you type the alphabet, ${userName}?`;
        nameDiv.style.opacity = '0';
        setTimeout(function(){
            nameDiv.style.display = 'none';
        }, 500);
    }
}

input.addEventListener('keypress', event => {
    // we want to start the timer when user presses the a key, since it is the first letter of the alphabet
    if (event.key == 'a') {
        a = new Date();
        b = a.getTime();
        setInterval(function(){

        }, 10);
    }

    if (event.keyCode == 13) {
        // setting userInput to the value of input
        userInput = input.value;
        c = new Date();
        d = c.getTime();
        userTime = Math.abs(b - d) / 1000;
        // checks if userInput is equal to alphabet
        if (userInput == alphabet) {
            result.innerHTML = `You typed the whole alphabet in ${userTime} seconds!`;
            input.placeholder = `Can you beat ${userTime} seconds?`;
        } else {
            result.innerHTML = `Try again ${userName}...`;
        }
        input.value = "";
        userInput = [];
    }
});
