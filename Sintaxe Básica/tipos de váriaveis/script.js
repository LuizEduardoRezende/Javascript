//tipos primitivos


//boolean
var bool = false;
//console.log(typeof(bool));

// number
var num = 1;
//console.log(typeof(num));

// string
var nome = 'diana';
//console.log(typeof(nome));

//funções
var funcao = function funcao() {

}
//console.log(typeof(funcao));


//Como declarar variaveis

//var:
//É de escopo global e local, pode ter seu valor alterado
var variavel = 'darius';
variavel = 'knight';

//let:
//É de escopo local de bloco, pode ter seu valor alterado
let variavel2 = 'kled';
variavel2 = 'garen';

//const:
//É de escopo local de bloco, somente leitura, não pode ser alterada, valor inical é obrigadtório.
const constante = 'lux';
//console.log(constante);

//Comparação
var comparacao = '0' == 0;
//console.log(comparacao);

//Comparação indêntica
var comparacaoIdentica = '0' === 0;
//console.log(comparacaoIdentica);

//Divisão Real vs Divisão Inteira (resto da divisão inteira)
var divisaoReal = 6 / 2;
//console.log(divisaoReal);

var divisaoInteira = 6 % 2;
console.log(divisaoInteira);

//Operadores &&, ||, !
var e = true && false;

var ou = true || false;

var naoFalso = !false;

