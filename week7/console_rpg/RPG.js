const readlineSync = require('readline-sync');
const playerName = readlineSync.question("Only the chosen one may enter. Who are you?");
readlineSync.question("Greetings " + playerName + ". So you are the chosen one?  We shall see. Press Enter to begin your trials.");

const monsters = ['vampire', 'wraith', 'killer clown', 'werewolf', 'radioactive zombie', 'swamp monster']
const items = ['small health posion', 'magna sword', 'ice sword', 'chain mail' ];
let userHealth = 40;
let trophy = [];
let userLoot = items[Math.floor(Math.random() * items.length)];
const options = ["Walk", "Exit", "Print"];


function gameTime() {
    let monsterHealth = 40;
    const monster = monsters[Math.floor(Math.random() * monsters.length )];
    const attackRange = Math.floor(Math.random() * (5) + 3);
    const monsterAttack = Math.floor(Math.random() * (4) + 3);


    const index = readlineSync.keyInSelect(options, 'Choose wisely');
    if(options[index] == "Exit") {
        return userHealth = 0;
    } else if(options[index] == "Print") {
        console.log(playerName + ' You Win! \n' + userHealth + "\nitems: " + trophy)
    } else if(options[index] == "Walk") {
        let key = Math.random();
        if(key <= .3) {
            console.log('Walking....');
        } else if(key >= .3){
            console.log(monster + ' appeared.')
            do {
                const player = readlineSync.question('Choose wisely. Enter "r" to run or "a" to attack. ')

                switch(player) {
                    case 'r': //run
                        const run = Math.random();
                        if(run < .2) {
                            console.log("You Coward " + monster + " dealt you a blow of " + monsterAttack + " hits!")
                        } else {
                            console.log(" You have escaped! ");
                            break
                        }

                    case 'a': //attack

                        userHealth -= monsterAttack;
                        console.log(playerName + " you attacked " + monster + " with " + attackRange + " hits!")
                        
                        monsterHealth -= attackRange;
                        console.log(monster + " attack you with " + monsterAttack + " hits!")
                        if(userHealth <= 0) {
                            console.log( monster + " has killed you " + playerName);
                        }else if(monsterHealth <= 0) {
                            console.log(playerName + " you killed the " + monster + "\n " + "you gained a " + userLoot);
                            let loot = Math.random();
                            if(loot >= 0) {
                                trophy.push(userLoot);
                            } 
                        }

                }
            }
            while(monsterHealth > 0 && userHealth > 0)
        }
    }
}
 
while(userHealth > 0) {
    restoreUserHealth = function() {
        playerAlive = true;
        userHealth = 40; 
    };
    restoreUserHealth()
    gameTime();
}