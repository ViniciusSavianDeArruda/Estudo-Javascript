// Aula 08 — Condicionais
// -----------------------
// Nesta aula, aprendemos a:
// - Usar estruturas condicionais (if, else if, else)
// - Trabalhar com operadores lógicos (&& e ||)
// - Usar o operador ternário
// - Aplicar a estrutura switch para múltiplos casos

window.console.log("Eu sou o console!");

// ---------------------------------------
// IF / ELSE — Condições básicas
// ---------------------------------------
// `===` verifica valor e tipo (comparação estrita)
// `==` verifica apenas o valor (comparação frouxa)

const sum = 1 + 1;

if (sum === 2) {
    console.log("Sum is 2!");
} else {
    console.log("Sum is NOT 2!");
}

// Aqui a comparação será falsa, pois "2" é string e sum é number.
if (sum === "2") {
    console.log("Sum is 2!");
} else {
    console.log("Sum is NOT 2!");
}

// ---------------------------------------
// ELSE IF — Múltiplas verificações
// ---------------------------------------

const summ = 1 + 2;

if (summ === 2) {
    console.log("Sum is 2!");
} else if (summ === 3) {
    console.log("Sum is 3!");
} else {
    console.log("Sum is NOT 2!");
}

// ---------------------------------------
// OPERADORES LÓGICOS — && e ||
// ---------------------------------------
// `&&` → verdadeiro se TODAS as condições forem verdadeiras
// `||` → verdadeiro se PELO MENOS uma condição for verdadeira

const sum1 = 2 + 2;
const sum2 = 3 + 10;

// Neste caso, sum1 === 4 é verdadeiro, mas sum2 === 6 é falso.
// Como usamos &&, o bloco não será executado.
if (sum1 === 4 && sum2 === 6) {
    console.log("sum1 is 4 and sum2 is 6");
}

// Aqui o bloco será executado, pois uma das condições é verdadeira.
if (sum1 === 4 || sum2 === 6) {
    console.log("sum1 is 4 or sum2 is 6");
}

// ---------------------------------------
// OPERADOR TERNÁRIO
// ---------------------------------------
// É uma forma curta de escrever um if/else simples.

const sum3 = 1 + 2;

// Forma tradicional:
/*
let number;
if (sum3 === 2) {
    number = 2; 
} else {
    number = 4;
}
*/

// Forma simplificada:
let number = sum3 === 2 ? 2 : 4;
console.log(number);

// ---------------------------------------
// SWITCH
// ---------------------------------------
// O switch compara o valor de uma variável com vários casos possíveis.
// É útil para múltiplas condições baseadas em igualdade.

const car = "Tesla";

switch (car) {
    case "Mercedes":
        console.log("Mercedes is beautiful");
        break;
    case "Ferrari":
        console.log("Ferrari is very red");
        break;
    case "Tesla":
        console.log("Tesla is very smart");
        break;
    default:
        console.log("Unknown car");
        break;
}
