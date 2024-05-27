//Vetores ou Arrays

//declaração
let array = ['string', 1, true]; 
//console.log(array);

//pode guardar vários tipos de dados
let array2 = ['string', 1, true, ['array1'], ['array2'], ['array3'], ["array4"]]
//console.log(array2[1]);

//forEach
//array2.forEach(function(item, index){console.log(item, index)})

//push e pop (final do array)
//array2.push('novo item');
//array2.push(3);
//array2.push([4,5,6]);
//console.log(array2);
//array2.pop();
//console.log(array2);

//Shift (tira do começo do array)
//Unshift (insere no inicio)

//indexOf retorna o índece de algum valor
//console.log(array2.indexOf(true));

//splice remove ou substitui um item pelo indíce
//array2.splice(0,3, 'teste');
//array2.splice(0,3);//
//console.log(array2);

//slice() - retorna uma parte de um array já existente
let novoArray = array2.slice(0,4);
//console.log(novoArray);

//Objetos = Struct em C
let object = {
    string: 'string',
    number: 1,
    boolean: true,
    array: ["array"],
    objectInterno: { objectInerno: ["objectInterno"], boolean: false}
}

//console.log(object.objectInterno.boolean);

//desestruturação
var string = object.string;

var number = object.number;

//desestruturação usando chaves
var {string, boolean, objectInterno} = object;