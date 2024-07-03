import * as readlineSync from 'readline-sync';

function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

function main() {
    const firstNumber = parseFloat(readlineSync.question('Enter the first number: '));
    const secondNumber = parseFloat(readlineSync.question('Enter the second number: '));
    const operation = readlineSync.question('Enter the operation (+, -, *, /): ');

    let result: number;

    try {
        switch (operation) {
            case '+':
                result = add(firstNumber, secondNumber);
                break;
            case '-':
                result = subtract(firstNumber, secondNumber);
                break;
            case '*':
                result = multiply(firstNumber, secondNumber);
                break;
            case '/':
                result = divide(firstNumber, secondNumber);
                break;
            default:
                throw new Error('Invalid operation');
        }

        console.log(`Result: ${firstNumber} ${operation} ${secondNumber} = ${result}`);
    } catch (error: any) {
        console.error(error.message);
    }
}

main();
