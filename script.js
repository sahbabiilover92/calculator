//functions for add, subtract, multiply, and divide.
const addFunction = (x, y) => x + y;
const subtractFunction = (x, y) => x - y;
const multiplyFunction = (x, y) => x * y;
const divideFunction = (x, y) => x / y;

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

//miscellaneous buttons
const equals = document.getElementById('btnEquals');
const clear = document.getElementById('btnClear');

//display
const display = document.getElementById('display');

//arrays to store numbers, operators, and operator text;
let numElements = [one, two, three, four, five, six, seven, eight, nine, zero];
let operatorElements = [add, subtract, multiply, divide];
const x = operatorElements.map((i) => i.textContent);

//variables for numbers in operation and operator.

//first variable click management.
const numOneClick =
    numElements.forEach((element) => {
        element.addEventListener('click', () => {
            if (display.innerText == 'ERROR'){
                return display.innerText = '';
            }
            let xPresent = (item)=> (item == x[0] || item == x[1] || item == x[2] || item == x[3]); 
            if (!(display.textContent.split('').some(xPresent))) { //fix this
                display.innerText = `${display.innerText}` + `${element.textContent}`;
            } else if (display.textContent.split('').some(xPresent)) {
                display.innerText = `${display.innerText}` + '';
            }

        });
    });
//first variable
const storeVariableOne = () => {
    let xIndex = ()=> {
        let newArray = display.innerText.split('');
        let filteredArray = newArray.filter((item) => {
            for (i of x) {
                if (i==item) {
                    return item;
                }
            }
        }); return filteredArray[0];
    }
    let indexOfOperator = display.innerText.split('').indexOf(xIndex()); //fix this
    let numOneString = display.innerText.split('').slice(0, indexOfOperator).join('');
    return numOneString;
};
storeVariableOne();

//second variable click management.
const numTwoClick =
    numElements.forEach((element) => {
        element.addEventListener('click', () => {
            let xPresent = (item)=> (item == x[0] || item == x[1] || item == x[2] || item == x[3]); 
            if (display.textContent.split('').some(xPresent)) { //fix thisy
                display.innerText = `${display.innerText}` + `${element.textContent}`;
            } else if (!(display.textContent.split('').some(xPresent))) {
                display.innerText = `${display.innerText}` + '';
            }
        });
    });

//second variable
const storeVariableTwo = () => {
    let xIndex = ()=> {
        let newArray = display.innerText.split('');
        let filteredArray = newArray.filter((item) => {
            for (i of x) {
                if (i==item) {
                    return item;
                }
            }
        }); return filteredArray[0];
    }
    let indexOfOperator = display.innerText.split('').indexOf(xIndex()); //fix this
    let numTwoString = display.innerText.split('').slice(indexOfOperator+1).join('');
    return numTwoString;
};
storeVariableTwo();

//operator click management.
const operatorVar =

    operatorElements.forEach((element) => {
        element.addEventListener('click', () => {
            let xPresent = (item)=> (item == x[0] || item == x[1] || item == x[2] || item == x[3]); 
            if (!(display.textContent.split('').some(xPresent))) { //fix this
                return display.innerText = `${display.innerText}` + `${element.textContent}`;
            } else if (display.textContent.split('').some(xPresent)) {
                // element.style.backgroundColor = 'red';
                // return display.innerText = `${display.innerText}` + '';
                let x = Number(storeVariableOne());
                let y = Number(storeVariableTwo());
                let z = storeOperator();

                const ourSolution = operate(x,y,z);
                display.innerText = `${ourSolution.toFixed(2)}`;
                return display.innerText = `${display.innerText}`+`${element.textContent}`;
            }
        });
    });

//operator variable
const storeOperator = () => {
    let xIndex = ()=> {
        let newArray = display.innerText.split('');
        let filteredArray = newArray.filter((item) => {
            for (i of x) {
                if (i==item) {
                    return item;
                }
            }
        }); return filteredArray[0];
    }
    let indexOfOperator = display.innerText.split('').indexOf(xIndex()); //fix this
    let operatorString = display.innerText.split('').slice(indexOfOperator, indexOfOperator+1).join('');
    return operatorString;
};
storeOperator();

//operate function
const operate = function (numA, numB, operator) {
    let multiply = x[2];
    let divide = x[3];

    switch (operator) {
        case "+":
            return addFunction(numA, numB);
            break;
        case "-":
            return subtractFunction(numA, numB);
            break;
        case multiply:
            return multiplyFunction(numA, numB);
            break;
        case divide:
            return divideFunction(numA, numB);
            break;
    }
};

//equal button click management
const findSolution = equals.addEventListener('click',()=>{
    let a = Number(storeVariableOne());
    let b = Number(storeVariableTwo());
    let c = storeOperator();

    let xIndex = ()=> {
        let newArray = display.innerText.split('');
        let filteredArray = newArray.filter((item) => {
            for (i of x) {
                if (item == x[3]) {
                    return item;
                }
            }
        }); return filteredArray[0];
    }
    let indexOfOperator = display.innerText.split('').indexOf(xIndex()); //finds divide
    let afterDivision = display.innerText.split('').slice(indexOfOperator+1).join('');
    
    if(display.innerText == '' || afterDivision=="0"){
        return display.innerText = 'ERROR';
    } 

    const ourSolution = operate(a,b,c);
    return display.innerText = `${ourSolution.toFixed(2)}`;
    
});
        

//clear button click management

const clearDisplay = clear.addEventListener('click',()=>{
    return display.textContent = '';
});
