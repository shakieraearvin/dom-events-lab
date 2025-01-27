/*-------------------------------- Constants --------------------------------*/

const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');

/*-------------------------------- Variables --------------------------------*/
let currentValue = ''; 
let previousValue = '';  
let operator = ''


/*----------------------------- Event Listeners -----------------------------*/

  buttons.forEach((button) => {

    button.addEventListener( 'click', (event) => {
        console.log(event.target.innerText);

        if (!isNaN (buttonValue) || buttonValue === ".") {
            clickedNumber(buttonValue);
        } 
        if (['+', '-', '*', '/'].includes(buttonValue)) {
            clickedOperator(buttonValue);
        }
        if (buttonValue === '=') {
            calculateResult(); 
          }
    });

  })

/*-------------------------------- Functions --------------------------------*/
function clickedNumber(number) {
    currentValue += number; 
    display.innerText = currentValue; 
  }

  function clickedOperator(op) {
    if (currentValue === '') return; 
    previousValue = currentValue; 
    operator = op; 
    currentValue = ''; 
  }

  function calculateResult() {
    if (currentValue === '' || previousValue === '') return; 

    const current = parseFloat(currentValue); 
    const previous = parseFloat(previousValue); 
  
    let result;
    switch (operator) {
      case '+':
        result = previous + current;
        break;
      case '-':
        result = previous - current;
        break;
      case '*':
        result = previous * current;
        break;
      case '/':
        result = previous / current;
        break;
      default:
        return;
    }
  
    currentValue = result.toString(); 
    previousValue = ''; 
    operator = ''; 
    display.innerText = currentValue; 
  }
  function clearCalculator() {
    currentValue = '';
    previousValue = '';
    operator = '';
    display.innerText = '0'; 
  }

