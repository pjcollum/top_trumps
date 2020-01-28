let arrayOne = [182, 186, 190, 200, 201, 202]
let arrayTwo = [160, 120, 100, 210, 228, 226]
let turn

for (let turn = 0; turn < arrayOne.length; turn++) {
    if (arrayOne[0] < arrayTwo[0]) {
        console.log("Array Two won");
        arrayOne.shift([0])
        arrayTwo.push(arrayOne[0])
        console.log(arrayOne);
        console.log(arrayTwo);
    }
    else {
        console.log("Array one won");
        arrayTwo.shift([0])
        arrayOne.push(arrayTwo[0])
        console.log(arrayOne);
        console.log(arrayTwo);
    }
    
console.log(`Player One score: ${arrayOne.length}`);
console.log(`Player Two score: ${arrayTwo.length}`);
}


