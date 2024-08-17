// Element.classList, para verificar quais classes um elemento possui.
<div id="meu-elemento" class="classe">

</div>

const meuElemento = document.getElementById("meu-elemento");

meuElemento.classList.add("novo-estilo")
// adiciona a classe novo-estilo no elemento

meuElemento.classList.remove("classe")
//remove a classe "classe"

meuElemento.classList.toggle("dark-mode")
//adiciona a classe "dark-mode" caso ela não faça parte da lista e remove ela caso ela faça. Funciona como um interruptor para a classe.

meuElemento.style.color = "blue";
//muda a cor do texto dentro desse elemento pra blue
