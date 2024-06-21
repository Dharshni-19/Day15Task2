document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');

    document.addEventListener('keydown', function (event) {
        if (event.key >= '0' && event.key <= '9') {
            appendNumber(event.key);
        } else if (['+', '-', '*', '/', '%'].includes(event.key)) {
            appendOperator(event.key);
        } else if (event.key === 'Enter') {
            calculate();
        } else if (event.key === 'Backspace') {
            deleteLast();
        } else {
            alert('Only numbers are allowed');
        }
    });

    window.appendNumber = function (number) {
        display.value += number;
    };

    window.appendOperator = function (operator) {
        display.value += operator;
    };

    window.clearDisplay = function () {
        display.value = '';
    };

    window.deleteLast = function () {
        display.value = display.value.slice(0, -1);
    };

    window.calculate = function () {
        try {
            display.value = evaluateExpression(display.value);
        } catch {
            display.value = 'Error';
        }
    };

    window.evaluateExpression = function (expression) {
        return Function(return (${expression}))();
    };

    runTests();
});