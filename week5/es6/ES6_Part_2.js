/*Replace all the vars with let and const. Alter the code however necessary to make sure 
this continues to work (so the pet's name isn't "John", but instead "spot" is returned). 
You only need to delete var and insert let and const.
John is the pet owner, and his name should be stored differently than the other names.*/
const owner ={
     ownerName:  "John",
     age:  101
}

const {ownerName} = owner


function runForLoop(pets) {
    let petObjects = []
    for(let i = 0; i < pets.length; i++) {
        let pet = `{ type: ${pets} 
        name}`;
        if(pets[i] === "cat") {
             name = "fluffy"
        } else {
            name =  "spot"
        }
        console.log("pet name:  ", name)
        pets = name
        petObjects.push(pets)
    }
    console.log("man name: ", ownerName)
    return petObjects
}
runForLoop(["cat", "dog"])


/*Re-write this .map() using an arrow function:
Be aware that if JavaScript sees a { directly after the => it will think it's starting a function,
 and not starting an object, so the : will be an unexpected symbol. */

 const carrots = ["bright orange ", "ripe ", "rotten "]

 function mapVegetables(arr) {
     return arr.map((carrot) =>  `{type: ${"carrot"} ,  name: ${carrot}}`)
 }
console.log(mapVegetables(carrots))

//  /*Re-write this .filter() using an arrow function: */

 const people = [
     {
         name: "Princess Peach ",
         friendly: false
     }, 
     {
         name: "Luigi",
         friendly: true
     },
     {
         name: "Mario",
         friendly: true
     },
     {
         name: "Bowser",
         friendly: false
     }
 ]

 function filterForFriendly(arr) {
      return arr.filter((person) => person.friendly)

 }
console.log(filterForFriendly(people))

//4) Re-write the following functions to be arrow functions:

const doMathSum = (a , b)  => a + b
var produceProduct = (a, b) =>  a * b
console.log(doMathSum(15, 25))
console.log(produceProduct(8, 9))

//Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:
 
function printString(firstName = "kat" ,lastName = "Stark"  ,age = 40) {
    return "Hi" + " " + firstName + " " + lastName + " " + "how does it feel to be" + " " + age 
    
}
console.log(printString("John", "Doe", 100))

//Use template literals to build the string from #5
function printString(firstName = "kat" ,lastName = "Stark"  ,age = 40) {
    return (`Hi ${firstName} ${lastName} how does it feel to be ${age}`)  
}
console.log(printString("John", "Doe", 100 ))


//Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.

const animals = [
   {
    type: "dog",
    name: "theodore"
   },
   {
       type: "cat",
       name: "whiskers"
   },
   {
       type: "pig",
       name: "piglette"
   },
   {
       type: "dog",
       name: "sparky"
   }
];

function filterForDogs(arr) {return arr.filter(animal => animal.type === "dog")
}
console.log(filterForDogs([
    {
     type: "dog",
     name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ]))

 //Using template literals, write a function that takes location and name parameters and outputs a message formatted like this:

 const passenger = {
     name1: "Janice",
     location:"Hawaii" 
 }
 const {name1, location} = passenger
 console.log(`${"Hi" + " " + name1 + "! " + "Welcome to" + " " + location + "." + " I hope you enjoy your stay. Please ask the president of" + " " + location + " " + "if you need anything."}`)