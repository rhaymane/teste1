const form = document.getElementById("formAnimal");
const lista = document.getElementById("listaAnimais");

let animais = [];

form.addEventListener("submit", function(event){

event.preventDefault();

const nome = document.getElementById("nome").value;
const especie = document.getElementById("especie").value;
const idade = document.getElementById("idade").value;
const descricao = document.getElementById("descricao").value;

const animal = {
nome,
especie,
idade,
descricao
};

animais.push(animal);

mostrarAnimais();

form.reset();

});

function mostrarAnimais(){

lista.innerHTML = "";

animais.forEach(function(animal){

const card = document.createElement("div");

card.classList.add("card");

card.innerHTML = `
<h3>${animal.nome}</h3>
<p>${animal.especie}</p>
<p>${animal.idade}</p>
<p>${animal.descricao}</p>
<button onclick="adotar('${animal.nome}')">Solicitar Adoção</button>
`;

lista.appendChild(card);

});

}

function adotar(nome){

alert("Solicitação enviada para adotar " + nome);

}