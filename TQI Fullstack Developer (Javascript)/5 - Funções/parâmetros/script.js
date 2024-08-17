// Valores padrão

//Antes, PRÉ-ES2015
function exponencial(array, num){
    if( num === undefined){
        num = 1;
    }

    //resto da função
}

//Depois, PÓS-ES2015
function exponencial(array, num = 1){
    //resto da função
}

// Objeto "argments"

function findMax(){
    let max = -Infinity;

    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }
    return max;
}

// Enviando elementos do arrays como parãmetros
function sum(x, y, z){
    return x + y + z;
}

const numbers = [1, 2, 3];

//console.log(sum(...numbers));

// Rest combina os argumentos em um array
function confereTamanho(...args) {
    console.log(args.length);
}

//confereTamanho(1, 2, 3, 4)

//Object destructuring 
const user = {
    id: 42,
    displayName: "dudu",
    fullname:{
        firstName: "Luiz",
        lastName: "Rezende";
    }
};

function userId({id}){
    return id;
}

function getFullName({fullname: {firstName: first, lastName: last}}){
    return `${first} ${last}`;
}