'use strict';
//We'll learn about require later in the course
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
