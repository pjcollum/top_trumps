// class TopTrumps{
//     constructor(name, attack){
//         this._name = name;
//         this._attack = attack;
//     }
//     get name 
// }
let playerOne = [2, 19, 20, 22, 33, 55]
let playerTwo = [3, 57, 1, 5, 4, 7]
let turn
// const cardDeck

// const cardDeck(attack) => {
//     "Man City" = 90;
//     "Everton" = 60;
//     "Watford" = 40;
//     "Burnley" = 20;
// }
const playGame = () => {
    for (let turn = 0; turn < playerOne.length; turn++) {
        if (playerOne[0] < playerTwo[0]) {
            console.log(`Player Two won round ${turn}`);
            playerTwo.push(playerOne[0])        //push index from player one to end of player 2 index
            playerTwo.push()
            playerOne.shift()           //removes first index
            console.log(playerOne);
            console.log(playerTwo);
        }
        else {
            console.log(`Player one won round ${turn}`);
            playerOne.push(playerTwo[0])    //push index from player two to end of player one index
            playerOne.push()
            playerTwo.shift()               //removes first index
            console.log(playerOne);
            console.log(playerTwo);
        }

        // console.log(`Player One score: ${playerOne.length}`);
        // console.log(`Player Two score: ${playerTwo.length}`);
    }
    if (playerOne.length == 0){
        console.log("Player Two wins");
        return true
        
    }else if(playerTwo.length == 0){
        console.log("Player One wins");
        return true
    } else{
        return false
    }
}

while(true){
let gameEnded = playGame();

if (gameEnded){
    break   //stops loop running
}



}