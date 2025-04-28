const a = document.querySelector("button");
const b = document.getElementById("caixa");
const c = document.querySelector("p");
a.addEventListener("click",function(){

    a.textContent = 'Clicado!';
    b.innerHTML = "<strong>Texto em negrito</strong>";
    c.style.color = "green" ;
    c.style.fontSize = "20px";
    c.style.backgroundColor = "yellow";
    c.style.borderRadius = "20px";
   

})

