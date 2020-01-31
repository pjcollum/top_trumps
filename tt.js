class TopTrumps {
    constructor(name, attack) {
        this._name = name;
        this._attack = attack;
    }
    get name() {
        return this._name;
    }
    get attack() {
        return this._attack
    }
}

const deck1 = [
    ManUtd = new TopTrumps("Manchester United", 80),
    Newcastle = new TopTrumps("Newcastle", 55),
    Norwich = new TopTrumps("Norwich", 10)
]
const deck2 = [
    Everton = new TopTrumps("Everton", 65),
    Watford = new TopTrumps("Watford", 40),
    Burnley = new TopTrumps("Burnley", 30),
]

// console.log(deck1);
// console.log(deck2);

//let turn;

//const playGame = () => {
    //for (let turn = 0; turn < deck1.length; turn++) {
        if (deck1[0].attack < deck2[0].attack) {
            const holdingPile = deck1.shift()
            console.log(holdingPile);
            
            console.log(`Deck 1 length: ${deck1}`)
            console.log(`Deck 2 length: ${deck2}`)
            deck2.push(holdingPile)
            console.log(holdingPile);
            
            console.log(`Deck 2 length: ${deck2.length}`);
        }
        else if (deck2[0].attack < deck1[0].attack) {
            const holdingPile = deck2.shift()
            deck1.push(holdingPile);
            console.log(holdingPile);
            console.log(`Deck 1 length: ${deck1}`)
            console.log(`Deck 2 length: ${deck2}`)
        }
   //}
//}
//playGame()