function calculater (firstNum, secondNum, operator) {
    let calculate = "";
    if (operator === "+") {
        calculate = firstNum + secondNum;
    } else if (operator === "-") {
        calculate = firstNum - secondNum;
    } else if (operator === "*") {
        calculate = firstNum * secondNum;
    } else if (operator === "/") {
        calculate = firstNum / secondNum;
    }
    return calculate

}

// let firstNum = parseInt (prompt ("What is the first number? "));
// let secondNum = parseInt (prompt ("What is the second number? "));
//let operator = prompt ("What is the operator?");
// Had commented out the prompt, so that it will not keep popping out

console.log (calculater(firstNum, secondNum, operator))