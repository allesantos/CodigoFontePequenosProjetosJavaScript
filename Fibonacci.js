function isFibonacci(num) {
    let a = 0, b = 1, temp;
    while (a < num) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return a === num;
}

function checkFibonacciNumber(number) {
    if (isFibonacci(number)) {
        console.log(`${number} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${number} não pertence à sequência de Fibonacci.`);
    }
}

// Exemplo de uso
let numero = 21;
checkFibonacciNumber(numero);
