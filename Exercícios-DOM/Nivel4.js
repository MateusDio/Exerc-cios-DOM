const a = document.getElementById("conta");
const b = document.querySelector("h3");
let c = 0;
const d = document.getElementById("caixa");
const email = document.getElementById("email");
const nome = document.getElementById("nome");
const enviar = document.getElementById("enviar");
const erro = document.getElementById("erro");
d.style.backgroundColor = "blue";

a.addEventListener("click", function () {
    c++;
    b.textContent = 'Contador: ' + c;

});

d.onmouseover = function() {
    d.style.backgroundColor = "red";
};

d.onmouseout = function(){

d.style.backgroundColor = "blue";

};

enviar.addEventListener("click", function () {
    if (email.value.trim() === "") {
        erro.textContent = 'Erro!!! Você deve preencher o campo do Email!';
    } else {
        erro.textContent = ''; 
        
        
    }
});
