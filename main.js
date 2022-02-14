const prompt = require('prompt-sync')();

let guess1 = Number(prompt("I'm thinking of a number bewtween 1 and 100. Try to guess it: "));
let guess2 = 0;
let guess3 = 0;
let n = Math.round(Math.random() * 100);

if (guess1 === n) {
    console.log("Congratulations, ", n, "is correct!")
} else

if (guess1 < n) {
    guess2 = Number(prompt("Sorry too low! Try guess again: "));
} else

if (guess1 > n) {
    guess2 = Number(prompt("Sorry too high! Try guess again: "));
} 

if (guess1 !== n) {

    if (guess2 === n) {
    console.log("Congratulations, ", n, "is correct!")
    } else

    if (guess2 < n) {
    guess3 = Number(prompt("Sorry too low! Try guess again: "));
    } else

    if (guess2 > n) {
    guess3 = Number(prompt("Sorry too high! Try guess again: "));
    } 
}

if (guess2 !== n) {
    if (guess3 === n) {
    console.log("Congratulations, ", n, "is correct!");
    } else

    if (guess3 < n) {
    console.log("Sorry too low! I was thinking of ", n);
    } else

    if (guess3 > n) {
    console.log("Sorry too high! I was thinking of ", n);
    }
}