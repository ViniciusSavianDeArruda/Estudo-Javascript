// Aula 06 — JSON (JavaScript Object Notation)
// -------------------------------------------
// Nesta aula, aprendemos:
// - O que é JSON
// - Como converter dados JavaScript para JSON
// - Como converter JSON de volta para JavaScript
// - Por que isso é importante em aplicações web

window.console.log("Eu sou o console!");

// ---------------------------------------
// CONCEITO
// ---------------------------------------
// O JSON é um formato de dados usado para troca de informações entre sistemas.
// Ele é amplamente usado em APIs e na comunicação entre o front-end e o back-end.
// É sempre representado como uma *string* (texto).

// Exemplo de lista (array) de objetos JavaScript
const todos = [
    {
        id: 1,
        description: "Estudar programação",
        isCompleted: false,
    },
    {
        id: 2,
        description: "Ler",
        isCompleted: true,
    },
    {
        id: 3,
        description: "Treinar",
        isCompleted: true,
    },
];

// ---------------------------------------
// CONVERTENDO JAVASCRIPT → JSON
// ---------------------------------------
// Para enviar dados a um servidor (API), é necessário converter
// objetos ou listas em formato JSON, usando o método `JSON.stringify()`.

const todosJSON = JSON.stringify(todos);
console.log(todosJSON); // mostra os dados em formato de texto (string JSON)

// ---------------------------------------
// CONVERTENDO JSON → JAVASCRIPT
// ---------------------------------------
// Quando recebemos dados de uma API, eles normalmente chegam em formato JSON.
// Para manipulá-los em JavaScript, precisamos converter de volta
// usando o método `JSON.parse()`.

const todosList = JSON.parse(todosJSON);
console.log(todosList); // volta a ser uma lista de objetos JavaScript

// ---------------------------------------
// RESUMO
// ---------------------------------------
// JSON.stringify() → converte objeto para string (enviar para servidor)
// JSON.parse() → converte string JSON para objeto (usar no código)
