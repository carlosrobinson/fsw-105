var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"]

//Remove the last item from the vegetable array.
vegetables.pop()
//console.log(vegetables)

//Remove the first item from the fruit array.
fruit.shift()
//console.log(fruit)

//Find the index of "orange."
var indexOfOrange = fruit.indexOf("orange")
//console.log(indexOfOrange)

//Add that number to the end of the fruit array.
var newItem = fruit.push(1)
//console.log(newItem)

//Use the length property to find the length of the vegetable array.
var vegLength = vegetables.length
//console.log(vegLength)

//Add that number to the end of the vegetable array.
var newItem2 = vegetables.push(3)

//Put the two arrays together into one array. Fruit first. Call the new Array "food"
var arrOne = fruit
var arrTwo = vegetables
var food = arrOne.concat(arrTwo)
//console.log(food)

//Remove 2 elements from your new array starting at index 4 with one method
var newFoodArr = food
var removeItems1 = newFoodArr.splice(4, 2) 
//var removedItems2 = food.splice(",")
//console.log(newFoodArr)

//Reverse your array.
var reverseArr = newFoodArr.reverse(removeItems1)
//console.log(reverseArr)

//Turn the array into a string and return it.
//var splitArr = reverseArr.split("");
var joinedArr = reverseArr.join(",");
console.log(joinedArr)
// console.log("fruit", fruit);
// console.log("vegetables", vegetables)();