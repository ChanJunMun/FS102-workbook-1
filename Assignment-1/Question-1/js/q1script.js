// let num1 = prompt("Please enter a number: ", "Example: 34");
// Had commented ou the prompt, so that the pop up don't keep appearing
let totalSum = 0;
let loopCount = "";

for (loopCount = 1; loopCount <= num1; loopCount++) {
  totalSum += loopCount;
}

let answer = totalSum / (loopCount - 1);
// console.log (loopCount);
console.log("The average of 0 to " + num1 + " is equal to " + answer);
