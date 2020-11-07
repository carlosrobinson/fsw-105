//Write a function that accepts two numbers as parameters, and returns the sum.
function mySum(num1, num2) {
    return num1 + num2;
}
var result = mySum(15, 21);
console.log(result)


// Write a function that accepts three numbers as parameters, and returns the largest of those numbers.

function greatestNum(myArray) {
    var myNum = myArray[0];
    for( var i = 0; i < myNum; i++) {
        if(myArray[i] > myNum) {
          myNum = myArray[i];
        }
    }
    return myNum;
}
console.log(greatestNum([450, 55, 122]));

// Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");

function oddNum(anyNum) {
    if(anyNum % 2 === 0){
        return "even"
    } else if(anyNum % 2 !== 0){
        return"odd"
    }
}
console.log(oddNum(50))

// Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). 
//If the string is more than twenty characters long, return the first half of the string.
function checkNewString(myString) {
    var x = (myString.length / 2)
    var y = (myString.length / 2) - 1
    for( var i = 0; i < myString.length; i++) {
        if( myString.length <= 20) {
            return myString.concat(myString)
        } else if( myString.length >= 20  && myString.length % 2 === 0) {
            return myString.substring(0, x)
        } else if( myString.length >= 20  && myString.length % 2 !== 0){
            return myString.substring(0, y)
        }
    }
}

var res = checkNewString("return the first half of the string")
console.log(res);