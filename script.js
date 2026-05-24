//functions for add, subtract, multiply, and divide.
const addFunction = (x,y) => x+y;
const subtractFunction = (x,y) => x-y;
const multiplyFunction = (x,y) => x*y;
const divideFunction = (x,y) => x/y;

//variables for numbers in operation and operator.
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const zero = document.getElementById('0');
const display = document.getElementById('display');
let numElements = [one,two,three,four,five,six,seven,eight,nine,zero];

const numOne =
    numElements.map((element)=>{
        element.addEventListener('click',()=> {
            display.innerText = `${display.innerText}` + `${element.textContent}`;
            });
    });

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