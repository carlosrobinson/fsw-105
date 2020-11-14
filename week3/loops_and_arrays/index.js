var movieProspects = [ 
    {
        name: "Mike",
        age: 12,
        gender: "male"
    }, {
        name: "Madeline",
        age: 80,
        gender:"female" 
    }, {
        name: "Cheryl",
        age: 22,
        gender: "female"
    }, {
        name: "Sam",
        age: 30,
        gender: "male"
    }, {
        name: "Suzy",
        age: 4,
        gender: "female"
    }
]

// "Is old enough " or "Not old enough"
for(let i = 0; i < movieProspects.length;i++) {
    var personAge = movieProspects[i].age;
    var personName = movieProspects[i].name; 
    var personGender = movieProspects[i].gender;
    if(personAge >= 18){
        console.log( "is old enough ")
    } else if(personAge < 18){
        console.log("not old enough")
    }
}

//personalized message
for(let i = 0; i < movieProspects.length;i++){
    var personAge = movieProspects[i].age;
    var personName = movieProspects[i].name; 
    var personGender = movieProspects[i].gender;
    if(personAge >= 18) {
        console.log(personName + " " + "is old enough to see Mad Max.")
    } else if(personAge < 18) {
        console.log(personName + " " + "not old enough to see Mad Max.")
    }
}

//Male or Female
for(let i = 0; i < movieProspects.length;i++){
var personAge = movieProspects[i].age;
var personName = movieProspects[i].name; 
var personGender = movieProspects[i].gender;
   if(personAge >= 18) {
        switch(personGender){
            case "male" :
                personGender = "He"
                break
            case "female" :
                personGender = "She"
                break
        } 
        console.log(personName + " " + " is old enough." + " " + personGender + "" + "'s " +  "good to see Mad Max Fury Road.")
    } 

    if(personAge < 18 ) {
        switch(personGender) {
            case "male" :
                personGender = "him"
                break
            case "female" :
                personGender = "her"
                break
        } 
        console.log(personName + " " + "is not old enough to see Mad Max Fury Road, don't let" + " " + personGender 
        + " " + "in.")
    } 
}

    // A for loop that iterates through 101 numbers
var numbers = 101
for(var i = 0; i < 101; i++) {
    if(i % 2 === 0) {
        console.log(i, "even")
    } else {
        console.log(i, "odd")
    }
}