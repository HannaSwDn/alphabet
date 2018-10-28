### I made this to practice commit messages :)

## It is a test that the user can take to see how fast he can type the whole alphabet.

# Problems I had in this project:
First problem: Writing good commit messages.<br>
Second problem: How to get the time it took from where the user started to type in the input element, to when the user finished typing

# How I solved the problems:
First problem: I wrote many commits and I think they have gotten at least a little bit better after this project.<br>
Second problem: I first made a variable that would be the timer, and with setInterval I incremented it every tenth of a second. I then realized that was not the best way to do it because I wanted a timer that was more precise.
So instead I searched on google "how to get the current time in JavaScript" and that led me to use new Date() and getTime(). In the end, I used this code to get the starting time of the timer:<br>
a = new Date();<br>
b = a.getTime();<br>
Where b is the starting time. To get the end time of the timer (when user press enter), I wrote this code:<br>
c = new Date();<br>
d = c.getTime();<br>
userTime = Math.abs(b - d) / 1000;<br>
Where userTime is the final time it took for the user to type the whole alphabet.