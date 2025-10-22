// Aula 03 — Listas (Arrays)
// --------------------------
// Nesta aula, aprendemos a trabalhar com listas (arrays) no JavaScript.
// Arrays armazenam múltiplos valores em uma única variável.

// Exemplo básico
window.console.log("Eu sou o console!");

// ---------------------------------------
// Criação de um array
// ---------------------------------------

const names = ["Maria", "Francisca", "Joana", 10, false];

// Arrays podem conter diferentes tipos de dados (string, número, boolean).

// Acessando um elemento pelo índice
// Os índices começam em 0.
const chica = names[1];
console.log(chica); // Francisca

// ---------------------------------------
// Métodos de adição e remoção
// ---------------------------------------

// Adiciona um valor ao final da lista
names.push("Joaquim");
console.log(names);

// Adiciona outro valor ao final
names.push("Luiz");
console.log(names);

// Adiciona um valor no início da lista
names.unshift("Benjamin");
console.log(names);

// Remove o último valor da lista
names.pop();
console.log(names);

// ---------------------------------------
// Alterando e localizando valores
// ---------------------------------------

// Altera o valor na posição 3
names[3] = "Ana";
console.log(names);

// Retorna o índice (posição) do elemento "Joaquim"
console.log(names.indexOf("Joaquim"));

// ---------------------------------------
// Ordenando e analisando o array
// ---------------------------------------

// Ordena a lista em ordem alfabética
const sortedNames = names.sort();
console.log(sortedNames);

// Exibe a quantidade total de itens
console.log(names.length);

// Verifica se a variável é um array
const namesIsArray = Array.isArray(names);
console.log(namesIsArray);
