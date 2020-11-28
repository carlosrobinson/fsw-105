const readlineSync = require("readline-sync");
const yourName = readlineSync.question("What is your name?");
const welcomeMessage = `Welcome ${yourName}, Now ..........ESCAPE OR DIE`
console.log(welcomeMessage);

//set Boolean
let playerAlive = true;
let foundKey = false;

//Play Game
while(playerAlive == true) {
    menuID = readlineSync.keyIn('Press 1 to put hand in the hole \n Press 2 to find the key \n Press 3 to open the door ', {limit: '$<1-3>'});
    if(menuID == 1) {
        console.log(`HAHAHAH..Wrong answer ${yourName} your DEAD. GAME OVER`)
    } 
    else if(menuID == 2 && foundKey == false ) {
        console.log(`${yourName}, you found the key. Proceed to Menu option 3.`)
        foundKey = true;
    } 
    else if(menuID == 2 && foundKey == true) {
        console.log(`${yourName}, You already have the key, Proceed to Menu Optin 3`)
    } else if(menuID == 3 && foundKey == false) {
        console.log(`${yourName}, You do not have the key, Please return to Menu option 2 first`)
    }
    else if(menuID == 3 && foundKey == true) {
        console.log(`${yourName}, you found the key and have escape the room. You Win`)
        playerAlive = false;
    }
}