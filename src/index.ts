import "./index.css";

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('calculator_form') as HTMLFormElement;
    const input = form.querySelector('input[name="numer_input"]') as HTMLInputElement;
    const clearButton = form.querySelector('.clear_all') as HTMLButtonElement;
    const numberButtons = form.querySelectorAll('.num') as NodeListOf<HTMLButtonElement>;
    const operationButtons = form.querySelectorAll('.operation_btn') as NodeListOf<HTMLButtonElement>;
    const equalsButton = form.querySelector('.button') as HTMLButtonElement;

    let currentInput = '';
    let previousInput = '';
    let operation = '';

    const updateInput = (value: string) => {
        currentInput += value;
        input.value = currentInput;
    };

    numberButtons.forEach(button => {
        button.addEventListener('click', (e: Event) => {
            e.preventDefault();
            updateInput(button.textContent || '');
        });
    });

    operationButtons.forEach(button => {
        button.addEventListener('click', (e: Event) => {
            e.preventDefault();
            if (currentInput === '') return;
            operation = button.textContent || '';
            previousInput = currentInput;
            currentInput = '';
        });
    });

    equalsButton.addEventListener('click', (e: Event) => {
        e.preventDefault();
        if (currentInput === '' || previousInput === '' || operation === '') return;

        let result: number;
        const prev = parseFloat(previousInput);
        const curr = parseFloat(currentInput);

        switch (operation) {
            case '+':
                result = prev + curr;
                break;
            case '-':
                result = prev - curr;
                break;
            case '*':
                result = prev * curr;
                break;
            case '/':
                result = prev / curr;
                break;
            default:
                return;
        }

        input.value = result.toString();
        currentInput = result.toString();
        previousInput = '';
        operation = '';
    });

    clearButton.addEventListener('click', (e: Event) => {
        e.preventDefault();
        currentInput = '';
        previousInput = '';
        operation = '';
        input.value = '';
    });
});
