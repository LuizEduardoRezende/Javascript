// Switch/case
// ele compara o tipo e o valor, ou seja, (===)

// For .. in
// utilizado em objetos
function forInExemplo(obj){
    for(prop in obj){
        console.log(prop); //mostra a chave
        console.log(obj[prop]); //mostra o valor da chave
    }
}

const person = {
    name: "Luiz",
}

//forInExemplo(person);

// For .. of
// loop para estrutura iteráveis(arrays, strings).

function logLetras(palavra){
    for(letra of palavra){
        console.log(letra);
    }
}

const palavra = "abacaxi";
logLetras(palavra);

/* While
while (num <= 5){

}
*/

/* Do ... while
do {

} while(num <= 5);
*/