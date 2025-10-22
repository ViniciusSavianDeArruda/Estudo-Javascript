// Aula 11 — Classes e Herança
// -----------------------------
// Nesta aula, aprendemos:
// - Como criar classes em JavaScript
// - Como usar construtores e métodos
// - Diferença entre métodos normais e estáticos
// - Como funciona herança de classes (extends e super)

window.console.log("Eu sou o console!");

// ---------------------------------------
// 1) CLASSES E CONSTRUTOR
// ---------------------------------------
// Uma classe é um modelo (molde) para criar objetos com propriedades e métodos.
// O método `constructor()` é chamado automaticamente ao criar uma nova instância da classe.

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // Método comum: precisa ser chamado por uma instância da classe
    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }

    // Método estático: pode ser chamado diretamente da classe, sem instanciar
    static sayHello() {
        console.log("Helloooooooooo");
    }
}

// Criando (instanciando) um novo objeto da classe Person
const person = new Person("Jane", "Doe", 40);
console.log(person);

// Chamando um método de instância
person.getFullName();

// Chamando um método estático (diretamente da classe)
Person.sayHello();

// ---------------------------------------
// 2) HERANÇA ENTRE CLASSES
// ---------------------------------------
// Herança permite que uma classe (filha) herde atributos e métodos de outra (pai).

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} made some noise!`);
    }
}

// Criando uma instância de Animal
const animal = new Animal("Simba");
animal.speak(); // Simba made some noise!

// Criando uma classe Dog que herda de Animal
class Dog extends Animal {
    constructor(name) {
        // O método `super()` chama o construtor da classe pai (Animal)
        super(name);
    }

    // Sobrescrevendo (reescrevendo) o método speak()
    speak() {
        console.log(`${this.name} barked!`);
    }
}

// Instâncias independentes
const animal2 = new Animal("Tor");
const dog1 = new Animal("Bob"); // atenção: esse não é um Dog real
animal2.speak(); // Tor made some noise!
dog1.speak();    // Bob made some noise!

// Instância da classe Dog (herda de Animal)
const dog2 = new Dog("Claus");
dog2.speak(); // Claus barked!
