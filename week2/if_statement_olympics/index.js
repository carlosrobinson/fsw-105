//Preliminaries//
if (5 > 3) {
console.log("is greater than");
}

if ( "cat".length == 3) {
        console.log("is the length")
}
    
if ("cat" != "dog") {
    console.log(" not the same")
}

//Bronze Medal//
var person = {
    name: "Bobby",
    age: 12
  }
if (person.age == 18) {
      console.log(person.name + " " + "Is allowed to go to the movie")
} else {
      console.log(person.name + " " + "is not allow to go to the movie")
  }
if (person.name[0] == "B" && person.age == 18) {
    console.log(person.name + " " + "Is allowed to go to the movie")
}else {
    console.log(person.name + " " + "is not allow to go to the movie")
}

//Silver Metal//
if (1 === "1") {
    console.log("Strict")
}else if (1 == "1") {
    console.log("Loose or abstract")
} else {
    console.log("Not equal at all")
}
//Gold Medal//
person.age == 18 ? console.log("Yes"): console.log("No");

if (typeof "dog" === "string") {
    console.log("string")
} else {
    console.log("Not a string")
}