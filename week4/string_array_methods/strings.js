//  A function that will return any given string into all caps followed by the same string all lowercase.

function capilizeAndLowercase(myCapLowerstring) {
    var myString = "hello";
    var upperCaseString = myString.toUpperCase();
    var lowerCaseString = upperCaseString.toLowerCase();
    return myCapLowerstring = upperCaseString + lowerCaseString
}
var result = capilizeAndLowercase("hello")
console.log(result)

// A function that returns a number half the length, and rounded down. You'll need to use Math.floor().

function findMiddleIndex(midIndex) {
    var x = Math.floor(2) 
   for(var i = 0; i < midIndex.length; i++) {
    return midIndex = (midIndex.length) / (x) - .5      
   }
}

 var result1 = findMiddleIndex("Hello")
 var result2 = findMiddleIndex("Hello world")
 console.log(result1)
 console.log(result2)

 //A function that uses slice() and the other functions you've written to return the first half of the string.

 function returnFirstHalf(myStringHalf) {
     for(var i = 0; i < myStringHalf.length; i++) {
        var a = "Hello"
        var b = a.slice(0, 2) 
        var c = "Hello World"
        var d = c.slice(0, 6)
        if(myStringHalf === a) {
            return b
        } else if(myStringHalf === c) {
            return d
        }
     }
 }
var result1 =  returnFirstHalf("Hello")
var result2 = returnFirstHalf("Hello World")
 console.log(result1)
 console.log(result2)

//  a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased. (If the string length is odd, capitalize the shorter of the first half.)

function capitalizeAndLowercase(myStringHalf) {
     var x = "Hello"
    var y = "Hello world"
    // var myStringHalf = myStringHalf.length / (x) - .5
    for(var i = 0; i < myStringHalf.length; i++) {
        if(myStringHalf[i] % 2 !== 0 && myStringHalf === x  ) {
            return  x.slice(0, 2).toUpperCase() + myStringHalf.slice(2)
        } else if(myStringHalf[i] % 2 !== 0 && myStringHalf === y) {
            return  y.slice(0, 6).toUpperCase() + myStringHalf.slice(6) 
        }
 }
}
var result3 = capitalizeAndLowercase("Hello")
var result4 = capitalizeAndLowercase("Hello world")
console.log(result3)
console.log(result4)