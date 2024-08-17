// Case types

// Original Variable as String 
//--> some awesome var

// Camel Case (mais utilizado no javascript) 
//--> someAwesomeVar

// Snake Case
//--> some_awesome_var

// Snake Upper Case
//--> SOME_AWESOME_VAR

// Esses acima são os 4 mais famosos e importantes

// Var: tem escopo global

// Let: tem escopo de bloco, esse bloco pode ser uma função, um if, um for, etc.

// Hoisting: atribuir um valor a uma variável antes de declarar ela. Pode ser utilizado no VAR.

numberOne = 1;
//console.log(numberOne + 2);

var numberOne;

// Redeclaração: pode ser feita com VAR.
// Reatribuição: pode ser feita com VAR e LET.


// Diferença dee VAR e LET:

var firstName = "João";
let lastName = "Souza";

if(firstName === "João") {
    var firstName = "Pedro";
    let lastName = "Silva";

    //console.log(firstName, lastName);
}

//console.log(firstName, lastName);

// CONSTANTES:
// são declaradas em SNAKE_UPPER_CASE
// escopo de bloco

const FIRST_NAME = "Luiz";
// FIRST_NAME = "João"; não é possível reatribuir nem redeclarar uma constante.


