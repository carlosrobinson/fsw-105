var lightSwitch = [
    [2, 5, 435, 4, 3], 
    [1, 1, 1, 1, 3],
    [9, 3, 4, 2]
]



var sum = lightSwitch[0].reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0 )
if(sum % 2 === 0) {
    console.log(lightSwitch[0], "// lights Off")
} else {
    console.log(lightSwitch[0], "// lights On")
}

var sum = lightSwitch[1].reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0 )
if(sum % 2 === 0) {
    console.log(lightSwitch[1], "// lights Off")
} else {
    console.log(lightSwitch[1], "// lights On")
}

var sum = lightSwitch[2].reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0 )
if(sum % 2 === 0) {
    console.log(lightSwitch[2], "// lights Off")
} else {
    console.log(lightSwitch[2], "// lights On")
}