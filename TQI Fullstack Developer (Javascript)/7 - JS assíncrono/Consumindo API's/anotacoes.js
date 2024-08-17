// API - Application Programming Interface
// Uma API é uma forma de intermediar os resultados do back-end com o que é apresentado no front-end. Você consegue acessá-la por meio de URLs.

//JSON: JavaScript Object Notation, é muito comum que API's retornem seus dados no formato .json.

// fetch
fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json))
// retorna uma promisse

// pode fazer operações no banco (POST, GET, PUT, DELET, ect)
fetch("https://endereco-api.com/", {
    method: "GET",
    cache: "no-ache",
})
    .then(response => response.json())
    .then(json => console.log(json))
// retorna uma promise