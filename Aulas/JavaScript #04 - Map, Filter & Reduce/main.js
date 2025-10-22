// Aula 04 — Map, Filter e Reduce
// -------------------------------
// Nesta aula, aprendemos três métodos fundamentais dos arrays:
// - map()     → transforma cada item de uma lista e retorna uma nova lista
// - filter()  → filtra elementos de uma lista com base em uma condição
// - reduce()  → reduz todos os elementos a um único valor (ex: soma total)

window.console.log("Eu sou o console!");

// ---------------------------------------
// MAP
// ---------------------------------------
// O método map() executa uma função em cada item da lista e
// retorna uma nova lista com os resultados.

const numbers = [1, 2, 3, 4, 5];

const numbersMultipliedByTwo = numbers.map(function (number) {
    return number * 2; // multiplica cada número por 2
});

console.log(numbersMultipliedByTwo); // [2, 4, 6, 8, 10]

// ---------------------------------------
// FILTER
// ---------------------------------------
// O método filter() cria uma nova lista contendo apenas
// os elementos que atendem a uma condição.

const ages = [8, 13, 27, 30, 22, 40];

// Filtra apenas as idades pares
const evenAges = ages.filter(function(age) {
    return age % 2 === 0; // se o resto da divisão por 2 for 0, é par
});

console.log(evenAges); // [8, 30, 22, 40]

// ---------------------------------------
// REDUCE
// ---------------------------------------
// O método reduce() reduz um array a um único valor,
// aplicando uma função acumuladora a cada elemento.

const sumOfAges = ages.reduce(function (accumulator, age) {
    return accumulator + age; // soma acumulador + idade atual
}, 0); // começa em 0

console.log(sumOfAges); // 140

// Também é possível começar o acumulador com outro valor inicial
const sumOfAgesStartingAt100 = ages.reduce(function (accumulator, age) {
    return accumulator + age;
}, 100); // começa em 100

console.log(sumOfAgesStartingAt100); // 240
