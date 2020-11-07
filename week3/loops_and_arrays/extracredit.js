var lightSwitch = [
    [2, 5, 435, 4, 3], 
    [1, 1, 1, 1, 3],
    [9, 3, 4, 2]
]

for( var i = 0; i < lightSwitch.length; i++) {
    var mySwitch = lightSwitch[i].reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0 )
    if(mySwitch % 2 === 0) {
        console.log(lightSwitch[i], "// lights Off")
    } else {
        console.log(lightSwitch[i], "// lights On")
    }
}
