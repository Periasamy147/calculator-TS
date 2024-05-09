let expression: string = '';

function appendToDisplay(value: string) {
    expression += value;
    const display = document.getElementById('display') as HTMLInputElement | null;
    if (display) {
        display.value = expression;
    }
}

function clearDisplay() {
    expression = '';
    const display = document.getElementById('display') as HTMLInputElement | null;
    if (display) {
        display.value = '0';
    }
    const resultElement = document.getElementById('result');
    if (resultElement) {
        resultElement.textContent = '';
    }
}

function calculate() {
    const display = document.getElementById('display') as HTMLInputElement | null;

    if (!display) return;

    try {
        const result = eval(expression);
        display.value = result.toString(); // Update display with the result
    } catch (error) {
        display.value = 'Invalid Expression';
    }
}
