// Aula 10 — Funções
// ------------------
// Nesta aula, aprendemos:
// - O que são funções e como declará-las
// - Diferença entre `return` e `console.log()`
// - Parâmetros com valor padrão
// - Funções de seta (Arrow Functions)

window.console.log("Eu sou o console!");

// ---------------------------------------
// 1) FUNÇÕES TRADICIONAIS
// ---------------------------------------
// Uma função é um bloco de código que executa uma ação específica.
// Ela pode receber parâmetros e retornar valores.

function sum(a, b) {
    console.log(a + b); // apenas exibe o resultado
}
sum(2, 10);

// ---------------------------------------
// 2) FUNÇÃO COM RETURN
// ---------------------------------------
// O `return` envia um valor de volta para quem chamou a função.
// É útil quando queremos armazenar o resultado em uma variável.

function sumReturn(a, b) {
    return a + b;
}

const sumValue = sumReturn(2, 2);
console.log(sumValue); // 4

// ---------------------------------------
// 3) PARÂMETRO COM VALOR PADRÃO
// ---------------------------------------
// Podemos definir um valor padrão para um parâmetro.
// Caso ele não seja informado, o valor padrão será usado.

function sumDefault(a, b = 10) {
    return a + b;
}

const sumValue1 = sumDefault(2);
console.log(sumValue1); // 12

// ---------------------------------------
// 4) ARROW FUNCTIONS
// ---------------------------------------
// Arrow functions são uma forma mais curta e moderna de declarar funções.
// Elas são muito usadas em funções anônimas e callbacks.

const sumArrow = (a, b = 10) => {
    return a + b;
};

// Quando o corpo da função tem apenas uma linha de retorno,
// podemos omitir as chaves e o `return`.
const sumArrow2 = (a, b = 10) => a + b;

const sumValueArrow = sumArrow2(2);
console.log(sumValueArrow); // 12
