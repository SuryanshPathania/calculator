const calculatorScreen = document.querySelector('.calculator-screen');
const calculatorKeys = document.querySelector('.calculator-keys');

let currentInput = '';
let operator = '';
let previousInput = '';

calculatorKeys.addEventListener('click', (event) => {
    if (!event.target.matches('button')) return;

    const buttonValue = event.target.value;

    if (buttonValue === 'RESET') {
        currentInput = '';
        previousInput = '';
        operator = '';
        calculatorScreen.value = '';
    } else if (buttonValue === 'DEL') {
        currentInput = currentInput.slice(0, -1);
        calculatorScreen.value = currentInput;
    } else if (buttonValue === '=') {
        if (previousInput && currentInput) {
            currentInput = calculate(previousInput, operator, currentInput);
            calculatorScreen.value = currentInput;
            previousInput = '';
            operator = '';
        }
    } else if (['+', '-', '*', '/'].includes(buttonValue)) {
        if (currentInput) {
            previousInput = currentInput;
            operator = buttonValue;
            currentInput = '';
        }
    } else {
        currentInput += buttonValue;
        calculatorScreen.value = currentInput;
    }
});

function calculate(previous, operator, current) {
    previous = parseFloat(previous);
    current = parseFloat(current);
    switch (operator) {
        case '+': return previous + current;
        case '-': return previous - current;
        case '*': return previous * current;
        case '/': return previous / current;
        default: return current;
    }
}
