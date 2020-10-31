var lightSwitch = [
    [2, 5, 435, 4, 3],
    [1, 1, 1, 1, 3],
    [9, 3, 4, 2]
]

for (let i = 0; i < lightSwitch.length;i++) {
    var flipTheSwitch = lightSwitch[i];
  for(j = 0; j < lightSwitch[i].length; j++){
       // var count = lightSwitch[i]
     if( lightSwitch[i] % 2 === 0) {
        console.log(flipTheSwitch, "lights off")
    } else {
        console.log(flipTheSwitch, "lights on")
            
      }
       // console.log(flipTheSwitch)         
    }
}