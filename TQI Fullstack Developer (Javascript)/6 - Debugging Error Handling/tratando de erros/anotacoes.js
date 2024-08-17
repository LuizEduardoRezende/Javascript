// Explicar a diferença do trow e return
// Implementação de try/catch

// THROW
// utilizado para retornar erros, ao invés de return "String inválida", utilize throw "String inválida".

function verficaPalindromo(string){
    if(!string) throw "String Inválida";

    return string === string.split("").reverse().join("");
}

// console.log(verficaPalindromo("sovos"));

// Try .. catch
// 
function tryCatchExemplo(string) {
    try {
        verficaPalindromo(string);
    }
    catch(e){
        console.log(e);
        throw e;
    }
    finally {
        console.log("A string enviada foi: " + string);
    }
}

tryCatchExemplo("");

// FINALLY
// executa de qualquer maneira, mesmo acontecendo ou não o erro.
