const readlineSync = require('readline-sync');

const firstNum = readlineSync.questionInt("Please enter your fist number: ")
const secondNum = readlineSync.questionInt("Please enter your second number: ")
const inputOperator = readlineSync.question("What operation would you like to perform ? add/sub/mul/div: ")

//A function that adds two numbers and returns the result.
function addUserNum(num1, num2) {
    return (num1 + num2);
}
//A function that subtracts two numbers and returns the result.
function subUserNum(num1, num2) {
    return (num1 - num2);
}
//A function that multiplies two numbers and returns the result.
function mulUserNum(num1, num2) {
    return (num1 * num2);
}
//A function that divides two numbers and returns the result
function divUserNum(num1, num2) {
    return (num1 / num2);
}

//Operators
if(inputOperator == "add") {
    //add two numbers
    console.log(addUserNum(firstNum, secondNum));
} 
else if(inputOperator == "sub") {
    //subtract two numbers
    console.log(subUserNum(firstNum, secondNum))
}
 else if(inputOperator == "mul") {
    //multiply two numbers
    console.log(mulUserNum(firstNum, secondNum))
} 
else if(inputOperator == "div") {
    //divide two numbers
    console.log(divUserNum(firstNum, secondNum))
} 
else {
    console.log("Operation Not recognized. Please Try Again")
}