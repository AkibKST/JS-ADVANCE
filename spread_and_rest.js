// ----SPREAD_OPERATOR---
const myArray = [1, 2, 3];

// const myCopiedArray = [myArray[0], myArray[1], myArray[2]];
const myCopiedArray = [...myArray];

myArray.push(4);
myCopiedArray.push(5);
console.log(myArray);
console.log(myCopiedArray);

// ---REST_OPERATOR---
