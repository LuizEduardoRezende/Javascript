const meuBotao = document.getElementsByTagName("button")[0];
const body = document.body;
const titulo = document.getElementsByTagName("h1")[0];
const main = document.getElementsByTagName("main")[0];
const footer = document.getElementsByTagName("footer")[0];

function modeSwitch(){
    main.classList.toggle("dark-mode");
    titulo.classList.toggle("dark-mode");
    meuBotao.classList.toggle("dark-mode");
    footer.classList.toggle("dark-mode");

    if(titulo.classList.contains("dark-mode")){
        titulo.textContent = "Dark Mode ON";
    } else {
        titulo.textContent = "Light Mode ON";
    }

    if(meuBotao.classList.contains("dark-mode")){
        meuBotao.textContent = "Light Mode";
    } else {
        meuBotao.textContent = "Dark Mode";
    }

}

meuBotao.addEventListener("click", modeSwitch);
