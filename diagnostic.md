# JS Basics Diagnostic

You should save your answers in this Diagnostic.md file, except for your answer to
question 5 which should be saved in the file `bin/diagnostic.js`.

Assume all code executes in strict mode.

## Question 1

Please list the JavaScript primitives and give one example of each.

```md
Type | Examples
---- | ----------------
Number | `-0`, `NaN`, `Infinity`
String | `''`, `"The non-empty string."`
Boolean | `true`, `false`
null | `null`
undefined | `undefined`
```

## Question 2

```js
let c = 5;
let d = 2;
c = c + d;

```

After this code executes, what is the value of c?  Please identify the
operators in the last line of this program `c = c + d;` and explain what they
do.

```js
c = 7
= reassigns the value of c
+ makes that value the addition of c and d
```

## Question 3

```js
let x = 4;
let y = 3;
x = y;
y = 10;
```

After each line of code executes, what are the values of x and y?  Do the variables change?  Do their values?

```js
x = 4
y = 3
x = 3
y = 10
The variables do not change, but their values do.
```

## Question 4

```js
let weather;
weather = "sunny";
weather === "sunny";
```

What are the values of these expressions?  Explain your answers.

```js
let weather;  // undefined
weather = "sunny"; // "sunny"
weather === "sunny"; // true
```

## Question 5

```js
const ask = require('../lib/ask.js');

let answer = '';

while (answer !== '5') {
  if (answer < 1 || answer > 10) {
   console.log('Please try a number between 1 and 10');
 } else if (answer !== '') {
   console.log('That\'s not it!');
 }
  answer = ask("Guess my secret? ");
}

console.log("You guessed it!");
```

Change the code from this question so that it tests for a number of your choice
between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
<= 10, use `console.log` to display a message saying that the guess needs to
be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.
You can test the code with `node bin/diagnostic.js` in your Terminal.
