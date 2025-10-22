// Aula 07 — Estruturas de Repetição (Loops)
// ------------------------------------------
// Nesta aula, aprendemos as principais formas de repetir ações no JavaScript:
// - for
// - while
// - for...of
// - forEach
// - for...in

window.console.log("Eu sou o console!");

// ---------------------------------------
// FOR
// ---------------------------------------
// O loop `for` é usado quando sabemos quantas vezes queremos repetir o código.
// Ele possui três partes:
// 1. inicialização
// 2. condição de parada
// 3. incremento

for (let index = 0; index < 10; index++) {
    console.log(index); // imprime de 0 a 9
}

// Repetindo até 10 (inclusivo)
for (let index = 0; index <= 10; index++) {
    console.log(index);
}

// ---------------------------------------
// FOR COM LISTAS (ARRAYS)
// ---------------------------------------

const cars = ["Ferrari", "Tesla", "Mercedes"];

// Forma tradicional usando índices
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

// ---------------------------------------
// FOR...OF
// ---------------------------------------
// O `for...of` é uma forma mais simples de percorrer listas.
// Ele pega diretamente cada elemento do array sem precisar usar índices.

for (let car of cars) {
    console.log(car);
}

// ---------------------------------------
// forEach()
// ---------------------------------------
// O método `forEach()` executa uma função para cada elemento do array.
// É uma forma moderna e muito usada em JavaScript.

cars.forEach(function (car, index) {
    console.log(index); // mostra o índice do item
    console.log(car);   // mostra o valor do item
});

// ---------------------------------------
// WHILE
// ---------------------------------------
// O loop `while` repete o código enquanto a condição for verdadeira.
// É útil quando não sabemos exatamente quantas repetições serão necessárias.

let index = 0;

while (index < 10) {
    console.log("index é menor do que 10!");
    index++; // incrementa o valor para evitar loop infinito
}

// ---------------------------------------
// FOR...IN
// ---------------------------------------
// O `for...in` é usado principalmente para percorrer as propriedades de um objeto.

const person = {
    name: "Jane",
    age: 21,
};

// Mostra o nome das propriedades (chaves)
for (let property in person) {
    console.log(property); // name, age
}

// Mostra os valores das propriedades
for (let property in person) {
    console.log(person[property]); // Jane, 21
}
