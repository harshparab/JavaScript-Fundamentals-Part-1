/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
*/

/*
const massOfMark = 78;
const heightOfMark = 1.69;

const massOfJohn = 92;
const heightOfJohn = 1.95;

const bmiOfMark = (massOfMark / heightOfMark ** 2).toFixed(2);
const bmiOfJohn = (massOfJohn / heightOfJohn ** 2).toFixed(2);

const markHigherBMI = bmiOfMark > bmiOfJohn;

console.log(bmiOfMark);
console.log(bmiOfJohn);
console.log(markHigherBMI);
*/

const massOfMark = 95;
const heightOfMark = 1.88;

const massOfJohn = 85;
const heightOfJohn = 1.76;

const bmiOfMark = (massOfMark / heightOfMark ** 2).toFixed(2);
const bmiOfJohn = (massOfJohn / heightOfJohn ** 2).toFixed(2);

const markHigherBMI = bmiOfMark > bmiOfJohn;

console.log(bmiOfMark);
console.log(bmiOfJohn);
console.log(markHigherBMI);

if (markHigherBMI) {
    console.log(`Mark's BMI (${bmiOfMark}) is higher than John's (${bmiOfJohn})!`)
}
else {
    console.log(`Mark's BMI (${bmiOfMark}) is lower than John's (${bmiOfJohn})!`)
}
