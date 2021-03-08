let firstNum = prompt ("Enter the first number between 0 - 20");
let secNum = prompt ("Enter the second number between 0 - 20");


    
if ((firstNum > 20) || (secNum > 20)) {
    console.log ("The numbers you have key in are out-of-range");
} else if (firstNum > secNum) {
    console.log ("The numbers you have enter in ascending order are " + secNum + "," + firstNum);
} else {
    console.log ("The numbers you have enter in ascending order are " + firstNum + "," + secNum);
}
