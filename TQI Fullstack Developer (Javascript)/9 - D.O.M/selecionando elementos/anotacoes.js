// Estrutura html: tag, id, classe.
document.getElementById("titulo");
document.getElementsByTagName("li");
document.getElementsByClassName("contaier");

// selecionar elementos com duas classes, ou dois ids
document.querySelectorAll(".primeira-classe .segunda-classe");

//selecionar um elemento li com a classe opcao
document.querySelectorAll("li .opcao");

//Adicionar e deletar elementos

document.createElement(element) // cria um elemento html
document.removeChild(element) //remove elemento do elemento pai
document.appendChild(element) //adiciona um elemento
document.replaceChild(novo, velho) //substitui um elemento por um novo
