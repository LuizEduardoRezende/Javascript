let um = "um";

//console.log(typeof(um));

// Tipos primitivos de dados, são tipos que não tem métodos dentro deles.
// exemplos: numbers, strings, boolean, null, undefined

// Tipos não primitivos: objects, arrays

// STRINGS

let fisrtName = "Luiz";
let lastName = "Rezende";

let fullName = `Nome completo: ${fisrtName} ${lastName}`;

let concatenado = fisrtName.concat(" ", lastName)
let concatenado2 = fisrtName + " " + lastName;
//console.log(concatenado2);
//console.log(concatenado);

let exemplo1 = "blablabla";
let exemplo2 = new String("blablabla");

//console.log(exemplo1);
//console.log(exemplo2);

//console.log(fisrtName[0]);

for( i = 0; i < fisrtName.length; i++){
    //console.log(fisrtName[i]);
}

let printandoAspas = " \" ";
//console.log(printandoAspas);

let frase = "Olá, tudo bem ?";

//console.log(frase.split(" "));

//console.log(frase.includes("tudo"));
//console.log(frase.startsWith("O"));
//console.log(frase.endsWith("?"));

let fraseModificada = frase.replace(",", "!");
//console.log(fraseModificada);

// NUMBERS

//console.log( 5 / 3);

fiveByThree = 5 / 3;

//console.log( Math.floor( fiveByThree) );
//console.log( Math.ceil( fiveByThree) );

// BOOLEAN

let validation = 3 === 0;
//console.log(validation);

// ARRAY 

let array1 = []
let array2 = [1, 2, 3];

array2.push(4);
array2[1] = 3;

//console.log(array2);

array2.every(item => item === 5);
array2.some(item => item === 5);
array2.reverse();

// OBJETOS
// objetos possuem chaves e valores, como na struct em c.

let obj = {
}

obj.name = "Luiz";
obj.age = 20;

//console.log( Object.values(obj) );
//console.log( Object.keys(obj) );

let person = {
    name: "Julia",
    age: 20,
    adress: "Rua 2"
}

person["numberOfSiblings"] = 3;

let mom = "nameOfMom"
person[mom] = "Maria";

//console.log( person );

// Empty, null e undefined
// todos retornam algo falso, se for verificar em booleano

// empty: declarou uma variável mas não atribuiu um valor a ela.

// null: um valor que não existe, ou seja, ela não foi inicializado.

// undefined: um valor que não foi declarado.

let abacaxi = null;
console.log( abacaxi === null );

//falsy values: valore que retornam falso, mas não são exatamente iguais ao false do booleano.

