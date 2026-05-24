//functions for add, subtract, multiply, and divide.
const addFunction = (x,y) => x+y;
const subtractFunction = (x,y) => x-y;
const multiplyFunction = (x,y) => x*y;
const divideFunction = (x,y) => x/y;

//variables for numbers in operation and operator.
const numOne = "";
const numTwo = "";
const operatorVar = "";

const operate = function(numA,numB,operator){

    switch (operator) {
        case "add":
            console.log(addFunction(numA,numB));
            break;
        case "subtract":
            console.log(subtractFunction(numA,numB));
            break;
        case "multiply":
            console.log(multiplyFunction(numA,numB));
            break;
        case "divide":
            console.log(divideFunction(numA,numB));
            break;
    }
};