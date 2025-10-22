// Aula 13 — Manipulando Elementos do DOM
// ---------------------------------------
// Nesta aula, aprendemos a:
// - Remover elementos do DOM
// - Modificar texto e conteúdo HTML de elementos
// - Alterar estilos com JavaScript

window.console.log("Eu sou o console!");

// ---------------------------------------
// 1) REMOVER ELEMENTOS
// ---------------------------------------
// querySelector() seleciona o primeiro elemento que corresponde ao seletor informado.
// Aqui, selecionamos o elemento <ul> com a classe .items.

const items = document.querySelector(".items");

// Remove a lista inteira (comentado para não apagar tudo automaticamente)
// items.remove();

/*
// Remove apenas o primeiro elemento filho (primeiro <li>)
items.firstElementChild.remove();

// Remove apenas o último elemento filho (último <li>)
items.lastElementChild.remove();
*/

// ---------------------------------------
// 2) MODIFICAR TEXTO DE ELEMENTOS
// ---------------------------------------
// Podemos acessar elementos específicos da lista usando `children[index]`.

items.children[0].textContent = "Item UM"; // modifica o primeiro <li>

// ---------------------------------------
// 3) INSERIR HTML DENTRO DE UM ELEMENTO
// ---------------------------------------
// innerHTML substitui o conteúdo interno de um elemento por HTML novo.

items.lastElementChild.innerHTML = "<h1>Hello world!</h1>";

// ---------------------------------------
// 4) MODIFICAR ESTILOS COM JAVASCRIPT
// ---------------------------------------
// É possível alterar estilos diretamente pela propriedade `style`.
// Essa abordagem altera apenas o elemento selecionado e não o CSS global.

const button = document.querySelector(".btn");

// Muda a cor de fundo do botão
button.style.background = "red";

// Muda a cor do texto
button.style.color = "blue";
