
class TopTrumps {
    constructor(name, attack) {
        this._name = name;
        this._attack = attack;
    }
    get name() {
        return this._name;
    }
    get attack() {
        return this._attack;
    }

}


let fullDeck = [
    ManUtd = new TopTrumps("Manchester United", 50),
    Newcastle = new TopTrumps("Newcastle", 50),
    Norwich = new TopTrumps("Norwich", 40),
    Arsenal = new TopTrumps("Arsenal", 65),
    PSG = new TopTrumps("PSG", 85),
    Everton = new TopTrumps("Everton", 50),
    Watford = new TopTrumps("Watford", 44),
    Burnley = new TopTrumps("Burnley", 12),
    Barcelona = new TopTrumps("Barcelona", 91),
    RealMadrid = new TopTrumps("Real Madrid", 90)
]

let arrayShuffle = function (fullDeck) {
    let newPos;
    let temp;

    for (let i = fullDeck.length - 1; i > 0; i--) {
        newPos = Math.floor(Math.random() * (i + 1));
        temp = fullDeck[i];
        fullDeck[i] = fullDeck[newPos];
        fullDeck[newPos] = temp;
    }
    return fullDeck;
}

let newArray = arrayShuffle(fullDeck);
// console.log(newArray);

let deck1 = newArray.splice(0, 5)
let deck2 = newArray
// console.log(`This is deck 1: ${deck1}`);
// console.log(`This is deck 2: ${deck2}`);
// console.log(`Deck 1: ${JSON.stringify(deck1)}`);
// console.log(`Deck 2: ${JSON.stringify(deck2)}`);


let holdingPile = []

const playGame = () => {

    if (deck1[0].attack < deck2[0].attack) {        //attack loop
        //console.log(`Player Two won round ${counter}`);

        //move losing card to back of winners deck
        deck2.push(deck1[0])    //push index from player two to end of player one index
        deck1.shift()               //removes first index

        // move winners card to back of deck
        let card = deck2.shift()
        deck2.push(card);

        if (holdingPile.length > 0) {
            deck2.push([...holdingPile]);       //push holding pile to back of player two
            holdingPile = [];
            
            
        }
       

        console.log(`Deck 1: ${JSON.stringify(deck1)}`);
        console.log(`Deck 2: ${JSON.stringify(deck2)}`);
    } else if (deck1[0].attack > deck2[0].attack) {
         //console.log(`Player one won round ${counter}`);
        deck1.push(deck2[0])        //push index from player one to end of player 2 index
        deck2.shift()           //removes first index

        let card1 = deck1.shift()
        deck1.push(card1)

        if (holdingPile.length > 0) {
            deck1.push([...holdingPile]);       //push holding pile to back
            holdingPile = [];
            
        }

        console.log(`Deck 1: ${JSON.stringify(deck1)}`);
        console.log(`Deck 2: ${JSON.stringify(deck2)}`);
    } else {
        holdingPile.push(deck1[0], deck2[0])
        console.log(holdingPile);
        deck1.shift();
        deck2.shift();

    }

     console.log(`Deck One length: ${deck1.length}`);
     console.log(`Deck Two length: ${deck2.length}`);

    if (deck1.length == 0) {
        console.log("Player Two wins");
        return true

    } else if (deck2.length == 0) {
        console.log("Player One wins");
        return true
    } else {
        return false
    }
}
let counter = 1;
while (true) {

    let gameEnded = playGame(counter);


    if (gameEnded) {
        break   //stops loop running
    }
    counter++
}
