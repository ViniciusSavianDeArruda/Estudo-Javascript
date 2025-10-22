// Aula 05 — Objetos
// ------------------
// Nesta aula, aprendemos:
// - Como criar e acessar objetos
// - Como adicionar propriedades
// - Como usar Destructuring
// - Como trabalhar com listas de objetos

window.console.log("Eu sou o console!");

// ---------------------------------------
// CRIAÇÃO DE OBJETOS
// ---------------------------------------
// Um objeto armazena dados em pares de chave e valor.
// Cada chave (propriedade) representa uma característica do objeto.

const person = {
    firstName: "Elvis",
    lastName: "Presley",
    age: 42,
    hobbies: ["cantar", "dançar", "atuar"],
    dog: {
        name: "Simba",
        age: 4
    }
};

// ---------------------------------------
// ACESSANDO PROPRIEDADES
// ---------------------------------------

const read = person.hobbies[2]; // acessa o terceiro hobby
console.log(read); // atuar

console.log(person.dog.age);  // 4
console.log(person.dog.name); // Simba

// ---------------------------------------
// DESTRUCTURING
// ---------------------------------------
// O Destructuring permite extrair várias propriedades de um objeto
// de forma simplificada, sem precisar acessar uma a uma.

const { 
    firstName: primeiroNome, // renomeando a propriedade
    lastName,
    age,
    hobbies,
    dog: { name: dogName } // acessando propriedade interna
} = person;

console.log(primeiroNome); // Elvis
console.log(lastName);     // Presley
console.log(age);          // 42
console.log(hobbies);      // ["cantar", "dançar", "atuar"]
console.log(dogName);      // Simba
console.log(person.dog.age); // 4

// ---------------------------------------
// ADICIONANDO NOVAS PROPRIEDADES AO OBJETO
// ---------------------------------------
// Podemos incluir novas propriedades diretamente.

person.country = "Estados Unidos";
console.log(person.country); // Estados Unidos

// ---------------------------------------
// LISTAS DE OBJETOS
// ---------------------------------------
// É comum ter uma lista (array) contendo vários objetos,
// por exemplo, uma lista de tarefas.

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
// ACESSANDO ITENS EM UMA LISTA DE OBJETOS
// ---------------------------------------

// Acessa o terceiro objeto da lista
const descriptionOfLastTodo = todos[2];
console.log(descriptionOfLastTodo);

// Acessa apenas a propriedade "description" do último item
const descriptionOfLastTodo1 = todos[2].description;
console.log(descriptionOfLastTodo1); // Treinar
