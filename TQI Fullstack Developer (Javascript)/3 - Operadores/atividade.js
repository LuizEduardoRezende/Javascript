function compara(num1, num2) {
    return num1 == num2;
}

function soma(num1, num2) {
    return num1 + num2;
}

function compara_soma(num1, num2) {
    let flag_iguais;

    if (compara(num1, num2) == true) {
        flag_iguais = "são iguais";
    } else {
        flag_iguais = "não são iguais";
    }

    if (soma(num1, num2) < 9) {
        console.log(`Os números ${num1} e ${num2} ${flag_iguais}. Sua soma é ${soma(num1, num2)}, que é menor que 10 e menor que 20.`);
    }else if(soma(num1, num2) == 10){
        console.log(`Os números ${num1} e ${num2} ${flag_iguais}. Sua soma é ${soma(num1, num2)}, que é igual a 10 e menor que 20.`);
    }else if(soma(num1, num2) > 10 && soma(num1, num2) < 20) {
        console.log(`Os números ${num1} e ${num2} ${flag_iguais}. Sua soma é ${soma(num1, num2)}, que é maior que 10 e menor que 20.`);
    }else if(soma(num1, num2) == 20){
        console.log(`Os números ${num1} e ${num2} ${flag_iguais}. Sua soma é ${soma(num1, num2)}, que é maior que 10 e igual a 20.`);
    }else {
        console.log(`Os números ${num1} e ${num2} ${flag_iguais}. Sua soma é ${soma(num1, num2)}, que é maior que 10 e maior que 20.`);
    }

}

compara_soma(20, 20);