function verfifyArray(array, tamanho){
    try{
        if(!array && !tamanho)
            throw new ReferenceError("Parâmetros não especificados.");
        
        if(typeof array !== 'object')
            throw new TypeError("O array precisa ser do tipo objeto.");
        
        if(typeof tamanho !== 'number')
            throw new TypeError("O tamanho precisa ser do tipo número.");
        
        if(array.length !== tamanho)
            throw new RangeError("Tamanho especificado diferente do tamanho do array.");

        return array;
    }
    catch(e){
        if (e instanceof ReferenceError) {
            console.log("Esse erro é um ReferenceError!");
            console.log(e.message);
        } else if (e instanceof TypeError) {
            console.log("Esse erro é um TypeError!");
            console.log(e.message);
        } else if (e instanceof RangeError) {
            console.log("Esse erro é um RangeError!");
            console.log(e.message);
        } else {
            console.log("Tipo de erro não esperado:" + e.name + e.message);
        }
    }

}

let arr =[1, 2, 3, 4, 5];

verfifyArray([5, 2], 0);
//console.log(verfifyArray());