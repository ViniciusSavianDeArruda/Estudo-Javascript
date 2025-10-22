// Aula 14 — Eventos no DOM
// --------------------------
// Nesta aula, aprendemos:
// - O que são eventos e como usá-los
// - Como ouvir cliques e capturar dados de formulários
// - Como prevenir o comportamento padrão do navegador
// - Como manipular elementos após um evento

window.console.log("Eu sou o console!");

// ---------------------------------------
// 1) CONCEITO DE EVENTOS
// ---------------------------------------
// Eventos são ações do usuário (como clique, digitação, envio de formulário, etc.)
// que podem ser "ouvidas" pelo JavaScript para executar uma função em resposta.

// ---------------------------------------
// 2) SELECIONANDO ELEMENTOS
// ---------------------------------------

const submitButton = document.querySelector("#submit-button");
const myForm = document.querySelector("#my-form");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");

const items = document.querySelector(".items");
const body = document.querySelector("body");

// ---------------------------------------
// 3) ADICIONANDO EVENTOS
// ---------------------------------------
// addEventListener() escuta um evento e executa uma função quando ele ocorre.
// Estrutura básica: elemento.addEventListener('evento', função)

submitButton.addEventListener("click", function (e) {
    // Impede o comportamento padrão do botão (recarregar a página)
    e.preventDefault();

    // Captura os valores dos campos de entrada
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    // ---------------------------------------
    // VALIDAÇÃO SIMPLES
    // ---------------------------------------
    // Se algum campo estiver vazio, exibe um alerta e interrompe o código
    if (nameValue === "" || emailValue === "") {
        return alert("Please fill out all the fields!");
    }

    // ---------------------------------------
    // MODIFICAÇÕES VISUAIS APÓS O CLIQUE
    // ---------------------------------------

    // Muda a cor de fundo do formulário
    myForm.style.background = "red";

    // Muda a cor de fundo da página
    body.style.background = "blue";

    // Atualiza os elementos da lista com os valores do formulário
    items.firstElementChild.textContent = nameValue;
    items.children[1].textContent = emailValue;
});

// ---------------------------------------
// 4) EVENTO DE MUDANÇA DE INPUT (EXEMPLO)
// ---------------------------------------
// O evento "change" é disparado quando o usuário altera o valor de um campo.
// Ele pode ser usado para detectar digitação, seleção etc.

/*
nameInput.addEventListener("change", function (e) {
    console.log(e.target.value); // mostra o novo valor no console
});
*/

// ---------------------------------------
// RESUMO:
// ---------------------------------------
// - addEventListener() é usado para reagir a ações do usuário.
// - e.preventDefault() impede o comportamento padrão (ex: enviar formulário).
// - Podemos usar eventos para validar entradas e alterar o DOM dinamicamente.
