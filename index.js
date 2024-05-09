var expression = '';
function appendToDisplay(value) {
    expression += value;
    var display = document.getElementById('display');
    if (display) {
        display.value = expression;
    }
}
function clearDisplay() {
    expression = '';
    var display = document.getElementById('display');
    if (display) {
        display.value = '0';
    }
    var resultElement = document.getElementById('result');
    if (resultElement) {
        resultElement.textContent = '';
    }
}
function calculate() {
    var display = document.getElementById('display');
    if (!display)
        return;
    try {
        var result = eval(expression);
        display.value = result.toString(); // Update display with the result
    }
    catch (error) {
        display.value = 'Invalid Expression';
    }
}
