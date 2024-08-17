// Função autoinvocável

(
    function(a, b){
        return a + b;
    }
)(1, 2);

// Callbacks

const calc = function(operacao, num1, num2){
    return operacao(num1, num2);
}

const soma = function(num1, num2) {
    return num1 + num2;
}

const resultSoma = calc(soma, 1, 2);