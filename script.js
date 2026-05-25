//functions for add, subtract, multiply, and divide.
const addFunction = (x,y) => x+y;
const subtractFunction = (x,y) => x-y;
const multiplyFunction = (x,y) => x*y;
const divideFunction = (x,y) => x/y;

//OUR HTML ELEMENTS!!!

//numbers
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

//operators
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');

//display
const display = document.getElementById('display');

//arrays to store numbers, operators, and operator text;
let numElements = [one,two,three,four,five,six,seven,eight,nine,zero];
let operatorElements = [add,subtract,multiply,divide];
let x = operatorElements.map((i)=>i.textContent);

//variables for numbers in operation and operator.
const numOneClick = 
    numElements.forEach((element)=>{
        element.addEventListener('click',()=> {
            if(!(display.textContent.split('').includes(...x))){
                display.innerText = `${display.innerText}` + `${element.textContent}`;
            } else if (display.textContent.split('').includes(...x)){
                display.innerText = `${display.innerText}` + '';
            } 
            
        });
    })  
    storeVariableOne = ()=>{
        let indexOfOperator = display.innerText.split('').indexOf(...x);
        let numOneString = display.innerText.split('').slice(0,indexOfOperator).join('');
        return numOneString;
    };
    storeVariableOne();


            

const numTwoClick = 
    numElements.forEach((element)=>{
        element.addEventListener('click',()=> {
            if(display.textContent.split('').includes(...x)){
                display.innerText = `${display.innerText}` + `${element.textContent}`;
            } else if (!(display.textContent.split('').includes(...x))){
                 display.innerText = `${display.innerText}` + '';
            }          
        });
    })
    storeVariableTwo= ()=>{
        let indexOfOperator = display.innerText.split('').indexOf(...x);
        let numOneString = display.innerText.split('').slice(indexOfOperator).join('');
        return numOneString;
    };
    storeVariableTwo();



const operatorVar = 

    operatorElements.forEach((element)=>{

        element.addEventListener('click',()=> {
            if(!(display.textContent.split('').includes(...x))){
               return display.innerText = `${display.innerText}` + `${element.textContent}`; 
            } else if (display.textContent.split('').includes(...x)){
                element.style.backgroundColor = 'red';
                return display.innerText = `${display.innerText}` + '';
            }
            });
    });

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