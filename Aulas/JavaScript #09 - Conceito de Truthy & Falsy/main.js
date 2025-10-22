// Aula 09 — Valores Truthy e Falsy
// ---------------------------------
// Nesta aula, aprendemos:
// - Como o JavaScript interpreta valores como verdadeiros (truthy) ou falsos (falsy)
// - Como usar o operador de negação (!) e dupla negação (!!)
// - Diferenças entre tipos de valores vazios e existentes

window.console.log("Eu sou o console!");

// ---------------------------------------
// CONCEITO
// ---------------------------------------
// O JavaScript converte automaticamente valores em "true" ou "false"
// quando usados em condições. Esses valores são chamados de *truthy* e *falsy*.
// O operador `!!` força essa conversão explicitamente.

// ---------------------------------------
// VALORES FALSOS (Falsy)
// ---------------------------------------
// São interpretados como `false` em comparações booleanas.
// Principais valores falsy:
// - false
// - 0
// - '' (string vazia)
// - null
// - undefined
// - NaN

const x = ''; // string vazia → falso
console.log(!!x); // false

const y = 0; // zero → falso
console.log(!!y); // false

const a = null; // nulo → falso
const b = undefined; // indefinido → falso
console.log(!!a); // false
console.log(!!b); // false

// ---------------------------------------
// VALORES VERDADEIROS (Truthy)
// ---------------------------------------
// Todos os outros valores diferentes dos acima são considerados verdadeiros.
// Exemplo: strings com conteúdo, listas (arrays), objetos e números diferentes de 0.

const list = []; // lista vazia ainda é truthy
console.log(!!list); // true

// O operador `!` inverte o valor lógico
console.log(!list); // false (nega o valor true da lista)

const object = {}; // objeto vazio também é truthy
console.log(!!object); // true

// ---------------------------------------
// VERIFICANDO SE UMA LISTA TEM VALORES
// ---------------------------------------
// Podemos combinar a propriedade `length` com condicionais.

if (list.length > 0) {
    console.log("A lista tem elementos:", list);
} else {
    console.log("A lista está vazia.");
}
