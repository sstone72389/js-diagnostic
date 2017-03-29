# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.
Boolean: true/false
number: 72389
string: "cheeseburgers are yummy"
undefined: a variable has been declared but not assigned a value
null: similar to undefined, but is an assignement value

## Question 2

```js
let c = 5
let d = 2
c = c + d

```

After this code executes, what is the value of c?  Please identify the operators in the last line of this program `c = c + d` and explain what they do.

c is now equal to 7 as we reasigned its value to that of c+d. The operators
being used are equals (=) and (+)

## Question 3

```js
let x = 4
let y = 3
x = y
y = 10
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

<!-- solution below -->

The variables themselves remain their respective, x and y. That said, their values
do in fact chnage. After the code executes, x = 3 and y = 10.

## Question 4

```js
let weather
weather = "sunny"
weather === "sunny"
```

What do these expressions evaluate to?  Explain your answers.

let weather simply declares the variable weather
weather = "sunny" assigns the value of sunny to the newly declared variable
weather === "sunny" is an equality comparison that checks as to whether
weather is, in fact equal to "sunny". It will evaluate to true.

## Question 5

```js
//We'll learn about require later in the course
const ask = require('../lib/ask.js')

let answer = 'not empty'

while (answer !== '') {
  answer = ask("Guess my secret? ")
  if (answer === 'SeCrEt') {
   console.log("You guessed it!")
   break
  }
}
```

Change the code from this question so that it tests for a number of your choice
between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
<= 10, use `console.log` to display a message saying that the guess needs to
be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.
You can test the code with `node bin/diagnostic.js` in your Terminal.
