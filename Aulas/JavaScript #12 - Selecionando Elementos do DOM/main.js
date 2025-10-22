// Aula 12 — Manipulação de DOM
// ------------------------------
// Nesta aula, aprendemos a:
// - Selecionar elementos HTML com diferentes métodos
// - Modificar conteúdo e propriedades de elementos
// - Trabalhar com seletores modernos do DOM

window.console.log("Eu sou o console!");

// ---------------------------------------
// 1) SELECIONAR UM ELEMENTO PELO ID
// ---------------------------------------
// getElementById() retorna o elemento HTML com o ID especificado.
// Exemplo de elemento no HTML: <h1 id="add-user">Add user</h1>

/*
const addUserText = document.getElementById("add-user");
console.log(addUserText); // <h1 id="add-user">Add user</h1>

// Modifica o texto do elemento
addUserText.innerText = "Adicionar usuário";
*/

// ---------------------------------------
// 2) SELECIONAR UM ELEMENTO COM querySelector()
// ---------------------------------------
// querySelector() é mais moderno e permite usar seletores de CSS.
// Para ID → usa # | Para classes → usa .

const addUserText = document.querySelector("#add-user");
console.log(addUserText); // h1#add-user

// Altera o conteúdo de texto do elemento
addUserText.textContent = "Adicionar usuário";

// ---------------------------------------
// 3) SELECIONAR ELEMENTOS DENTRO DE OUTROS
// ---------------------------------------
// Podemos combinar seletores para acessar elementos aninhados.
// Exemplo de estrutura HTML:
// <div class="container">
//   <form id="my-form">...</form>
// </div>

const myForm = document.querySelector(".container #my-form");
console.log(myForm); // seleciona o formulário dentro da div.container

// ---------------------------------------
// 4) SELECIONAR MÚLTIPLOS ELEMENTOS
// ---------------------------------------
// querySelectorAll() retorna uma NodeList com todos os elementos
// que correspondem ao seletor informado.
// Pode ser percorrida com forEach().

const allItems = document.querySelectorAll(".item");
console.log(allItems); // mostra todos os elementos com a classe .item

// Acessar um elemento específico da lista
console.log(allItems[1]); // segundo elemento da NodeList

// Também é possível usar seletores combinados:
const specificItems = document.querySelectorAll(".items .item");
console.log(specificItems);
