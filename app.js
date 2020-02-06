
// let deck1 = [200, 190, 200, 220, 330, 550]
// let deck2 = [3, 67, 1, 5, 44, 7]


class TopTrumps {
    constructor(name, attack, defence) {
        this._name = name;
        this._attack = attack;
        this._defence = defence;
    }
    get name() {
        return this._name;
    }
    get attack() {
        return this._attack;
    }
    get defence(){
        return this._defence;
    }
}

const deck1 = [
    ManUtd = new TopTrumps("Manchester United", 9, 12),
    Newcastle = new TopTrumps("Newcastle", 38, 34),
    Norwich = new TopTrumps("Norwich", 7, 45),
    Arsenal = new TopTrumps("Arsenal", 80, 88),
    PSG = new TopTrumps("PSG", 67, 99)

]
const deck2 = [
    Everton = new TopTrumps("Everton", 15, 33),
    Watford = new TopTrumps("Watford", 69, 23),
    Burnley = new TopTrumps("Burnley", 93, 66),
    Barcelona = new TopTrumps("Barcelona", 46, 89),
    RealMadrid = new TopTrumps("Real Madrid", 77, 50)
]


const playGame = (counter) => {

    if (deck1[0].attack < deck2[0].attack) {        //attack loop
        console.log(`Player Two won round ${counter}`);

        //move losing card to back of winners deck
        deck2.push(deck1[0])    //push index from player two to end of player one index
        deck1.shift()               //removes first index

        // move winners card to back of deck
        let card = deck2.shift()
        deck2.push(card);

        console.log(`Deck 1: ${JSON.stringify(deck1)}`);
        console.log(`Deck 2: ${JSON.stringify(deck2)}`);
    } else {
        console.log(`Player one won round ${counter}`);
        deck1.push(deck2[0])        //push index from player one to end of player 2 index

        deck2.shift()           //removes first index

        let card1 = deck1.shift()
        deck1.push(card1)


        console.log(`Deck 1: ${JSON.stringify(deck1)}`);
        console.log(`Deck 2: ${JSON.stringify(deck2)}`);
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