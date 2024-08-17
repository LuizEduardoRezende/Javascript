// Assincronicidade
// O Javascript normalmente acontece de maneira síncrona.

// PROMISES
// É um objeto de processamento assíncrono
// Inicialmente seu valor é desconhecido, e ela pode então ser resolvida ou rejeitada.
// Resolvida -> .then()
// Rejeitada -> .catch()
// Inicialmente a promise é pendente, depois pode ser rejeitada ou completada/resolvida

const myPromise = new Promise((resolve, reject) => {

    window.setTimeout(() => {
        resolve(console.log("Resolvida!"));
    }, 2000);

});

/*
await myPromise
    .then((result) => result + "passando pelo then")
    .then((result) => result + "e agora acabou!")
    .catch((err) => console.log(err.message));
*/

    
// ASSYNC/AWAIT
async function resolvePromise() {

    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve("Resolvida");
        }, 3000);
    });

    const resolved = await myPromise
        .then((result) => result + " passando pelo then")
        .then((result) => result + " e agora acabou!")
        .catch((err) => console.log(err.message));

    return resolved;
}

// Chamando a função de forma assíncrona
(async () => {
    const result = await resolvePromise();
    console.log(result);
})();

// Utilizando o try ... catch
async function resolvePromise2() {

    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve("Resolvida");
        }, 3000);
    });

    let result;
    try {
        result = await myPromise
            .then((result) => result + " passando pelo then")
            .then((result) => result + " e agora acabou!")
    }
    catch(err) {
        result = err.message;
    }

    return result;
}

// Chamando a função de forma assíncrona
(async () => {
    const result = await resolvePromise2();
    console.log(result);
})();