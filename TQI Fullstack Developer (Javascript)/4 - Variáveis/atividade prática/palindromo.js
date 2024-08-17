function verifica_palin( string ){
    if(!string) return;
    
    let str = string.toLowerCase(); //converte tudo em minúsculo

    if(str.includes(" ") === false){
        //frase sem espaços

        //invertendo a string
        /*
        let array = str.split("");
        let reverseArray = array.reverse();
        let reverseString = reverseArray.join("");
        */
        let reverseString = inverte_string(str);

        return str === reverseString;
    }
    else{
        //frase com espaços

        //retirando os espaços
        let palavrasSeparadas = str.split(" ");
        let fraseSemEspaco = palavrasSeparadas.join("");

        //invertendo a string
        /*
        let array = fraseSemEspaco.split("");
        let reverseArray = array.reverse();
        let reverseString = reverseArray.join("");
        */
        let reverseString = inverte_string(fraseSemEspaco);

        return fraseSemEspaco === reverseString;
    }
}

function inverte_string(string){
    //inverte string sem espaço
    let reverseArray = [];
    let array = string.split("");
    let j = string.length - 1;

    for( let i = 0; i < array.length; i++){
        reverseArray[i] = array[j];
        j--;
    }

    let reverseString = reverseArray.join("");
    return reverseString;
}

console.log(verifica_palin(" aa sovos aa   "));

