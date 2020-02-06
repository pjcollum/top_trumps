let arry = ['cat', 'dog', 'car', 'ball', 'bat', 'abc'];

let arrayShuffle = function (arr) {
    let newPos;
    let temp;

    for (let i = arr.length - 1; i > 0; i--) {
        newPos = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[newPos];
        arr[newPos] = temp;
    }
    return arr;
}

let newArray = arrayShuffle(arry);
console.log(newArray);

let deck1 = newArray.splice(0, 3)
let deck2 = newArray.splice(0, 3)
console.log(deck1);
console.log(deck2);
