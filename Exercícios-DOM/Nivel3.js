

const botao1 = document.getElementById("botao1");
const botao2 = document.getElementById("botao2");
const botao3 = document.getElementById("botao3");
const paragrafo = document.getElementById("paragrafo");
const saudacao = document.querySelector("h1");
const nome = document.getElementById("nome");


botao1.addEventListener("click", function () {
    paragrafo.classList.add("ola");

});

botao2.addEventListener("click", function () {
    paragrafo.classList.remove("ola");

});

botao3.addEventListener("click", function () {
    const nomes = nome.value;
    saudacao.textContent = `Ola, ${nomes}` ;
    nome.value = '';
    
});


