// ----SPREAD_OPERATOR---
const myArray = [1, 2, 3];

// const myCopiedArray = [myArray[0], myArray[1], myArray[2]];
const myCopiedArray = [...myArray];

myArray.push(4);
myCopiedArray.push(5);
console.log(myArray);
console.log(myCopiedArray);

// ---REST_OPERATOR---
const myAddFunction = (firstNum, secondNum, ...rest) =>{
    console.log(firstNum);
    console.log(secondNum);
    console.log(rest);

    let sum = 0;
    rest.forEach((num)=>{
        sum = sum + num;
    });
    console.log(sum);
};

myAddFunction(1, 2, 3, 4, 5, 6);

// and with function

const myObj = {
    name: "Akib",
    position: "Software Engineer"
}

const myAnotherObj = {
    age : 25,
    location: "Kushtia" 
}

const myFinalObj ={
    ...myObj,
    ...myAnotherObj
}

console.log(myFinalObj);
