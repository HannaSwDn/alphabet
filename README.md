### I made this to practice commit messages :)

## It is a test that the user can take to see how fast he can type the whole alphabet.
How it works:<br>
When the user types the letter a in the input element, the timer will begin. The user has to type the whole alphabet in the right order, that's why the timer will only start on the letter a.<br>
When he finish typing and presses enter, the timer will stop and if he has written correctly, it will display how many seconds it took to write the whole alphabet. If you have written incorrectly, you can try again :)

# Problems I had in this project:
First problem: Writing good commit messages.<br>
Second problem: How to get the time it took from where the user started to type in the input element, to when the user finished typing<br>
Third problem: Comparing the array "alphabet" to the array "userInput", they were always different from each other.

# How I solved the problems:
First problem: I wrote many commits and I think they have gotten at least a little bit better after this project.<br><br>
Second problem: I first made a variable that would be the timer, and with setInterval I incremented it every tenth of a second. I then realized that was not the best way to do it because I wanted a timer that was more precise.
So instead I searched on google "how to get the current time in JavaScript" and that led me to use new Date() and getTime(). In the end, I used this code to get the starting time of the timer:<br>
a = new Date();<br>
b = a.getTime();<br>
Where b is the starting time. To get the end time of the timer (when user press enter), I wrote this code:<br><br>
c = new Date();<br>
d = c.getTime();<br>
userTime = Math.abs(b - d) / 1000;<br>
Where userTime is the final time it took for the user to type the whole alphabet.<br><br>
Third problem: I had no idea how to solve this until I thought that maybe they are different datatypes. So I used this:<br>
console.log(typeof alphabet);<br>
console.log(typeof userInput);<br>
And the output was that alphabet was an object while userInput was a string. I then remembered that === is used when you wanna compare both value and datatype, while == is used to compare only value, and not datatype. Since object and string are different datatypes,  I just removed one = from my if statement, and that made it work.<br>
