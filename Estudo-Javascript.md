# 🚀 Guia de Estudos em JavaScript

Este repositório reúne minhas anotações e estudos sobre JavaScript, organizados de forma progressiva — do básico ao avançado. Vou atualizando este guia conforme aprendo coisas novas.

---

## 🧭 Sumário
- [1. Interação com o Usuário](#-1-interação-com-o-usuário)
- [2. Conversão de Dados](#-2-conversão-de-dados)
- [3. Estruturas Condicionais](#-3-estruturas-condicionais-if-else-if-else)
- [4. Manipulação do DOM](#-4-manipulação-do-dom-html--js)
- [5. Selecionando Elementos do DOM](#-5-selecionando-elementos-do-dom-id-classe-tag-e-seletores)
- [6. Precedência de Operadores](#-6-precedência-de-operadores)
- [7. Estruturas de Repetição](#-7-estruturas-de-repetição)
- [8. Arrays](#-8-arrays)
- [9. Funções](#-9-funções)
- [10. Tipos de Dados](#-10-tipos-de-dados)
- [11. Objetos](#-11-objetos)
- [12. Spread Operator](#-12-spread-operator-)
- [13. Módulos (Import / Export)](#-13-módulos-import--export)
- [14. Métodos Modernos de Arrays](#-14-métodos-modernos-de-arrays)
- [15. Resumo Geral](#-15-resumo-geral)
- [Autor](#-autor)

---

## 🧩 1. Interação com o Usuário

### 📖 O que é
JavaScript permite interagir com o usuário, pedindo dados e mostrando mensagens na tela — útil para testes rápidos e pequenos exercícios.

### 💻 Métodos principais
- `window.prompt()` → abre uma caixa para o usuário digitar algo.
- `alert()` → exibe uma mensagem simples.

```js
let nome = window.prompt("Qual é o seu nome?");
alert("Bem-vindo ao curso de JavaScript, " + nome + "!");
```

📌 Observação: tudo que vem do prompt é string, mesmo que pareça número.

---

🔢 2. Conversão de Dados

### 📖 Por que converter
Quando pegamos entrada do usuário (string) e queremos fazer cálculos, precisamos transformar para número.

```js
let n1 = Number.parseFloat(prompt("Digite um número:"));
let n2 = Number.parseFloat(prompt("Digite outro número:"));
alert(`A soma é ${n1 + n2}`);
```

Conversores úteis:
- `Number.parseInt()` → converte para inteiro
- `Number.parseFloat()` → converte para decimal
- `String()` → converte número para texto

---

⚙️ 3. Estruturas Condicionais (if, else if, else)

### 📖 Uso
Sirvem para tomar decisões com base em comparações.

```js
if (num1 > num2) {
  alert("O primeiro número é maior");
} else if (num1 == num2) {
  alert("Os números são iguais");
} else {
  alert("O segundo número é maior");
}
```

⚖️ Operadores de comparação

| Símbolo | Significado               | Exemplo         | Resultado |
|--------:|--------------------------|-----------------|----------:|
| >       | Maior que                | 5 > 3           | true      |
| <       | Menor que                | 2 < 10          | true      |
| ==      | Igual (valor)            | '5' == 5        | true      |
| ===     | Igual (valor e tipo)     | '5' === 5       | false     |
| !=      | Diferente                | 10 != 5         | true      |

---

🧱 4. Manipulação do DOM (HTML + JS)

### 📖 O que é
O DOM (Document Object Model) é a representação da página HTML. Com ele eu consigo acessar elementos, alterar conteúdo, estilos e responder a eventos.

### 💻 Exemplo simples
```html
<div id="box">Clique em mim</div>

<script>
  const div = document.getElementById("box");
  div.addEventListener("click", () => {
    div.style.color = "blue";
    div.style.fontSize = "30px";
  });
</script>
```

---

🔎 5. Selecionando Elementos do DOM (id, classe, tag e seletores)

### 📌 Métodos que uso com frequência

| Método                        | O que retorna     | Tipo do retorno  | Quando usar      |
|-----------------------------:|------------------:|------------------:|------------------|
| `getElementById(id)`         | 1 elemento        | Element           | Para id únicos   |
| `getElementsByClassName(classe)` | Vários elementos | HTMLCollection    | Buscar por classe|
| `getElementsByTagName(tag)`  | Vários elementos  | HTMLCollection    | Buscar por tag   |
| `querySelector(seletor)`     | Primeiro que casar| Element           | Busca com CSS    |
| `querySelectorAll(seletor)`  | Todos que casarem | NodeList          | Busca com CSS    |
| `getElementsByName(name)`    | Vários por name   | NodeList          | Muito usado em formulários |

### 💻 Exemplos práticos

Por id:
```html
<h1 id="titulo">Olá</h1>
<script>
  const h1 = document.getElementById("titulo");
  h1.textContent = "Olá, Vinicius!";
</script>
```

Por classe:
```html
<p class="msg">Mensagem 1</p>
<p class="msg">Mensagem 2</p>
<script>
  const msgs = document.getElementsByClassName("msg");
  [...msgs].forEach(p => p.style.color = "blue");
</script>
```

Por tag:
```html
<ul><li>Item 1</li><li>Item 2</li></ul>
<script>
  const itens = document.getElementsByTagName("li");
  for (const li of itens) console.log(li.textContent);
</script>
```

Seletor CSS:
```html
<div class="card destaque"></div>
<script>
  const card = document.querySelector(".card.destaque");
  const todos = document.querySelectorAll("div.card");
</script>
```

Por atributo name:
```html
<input type="text" name="usuario">
<script>
  const campos = document.getElementsByName("usuario");
  campos[0].value = "vinicius";
</script>
```

---

➗ 6. Precedência de Operadores

### 📖 Resumo
Ordem em que o JavaScript resolve operações (do mais prioritário para o menos):
1. ()
2. **
3. *, /, %
4. +, -
5. Comparações (>, <, ==)
6. && (E lógico)
7. || (OU lógico)
8. = (atribuição)

---

🔁 7. Estruturas de Repetição

### 📖 Quando usar
Servem para executar um bloco de código várias vezes.

| Estrutura   | Quando usar                                 | Executa ao menos uma vez? |
|------------:|---------------------------------------------|--------------------------:|
| for         | Quando sabemos o número de repetições       | ❌                       |
| while       | Enquanto a condição for verdadeira          | ❌                       |
| do...while  | Executa uma vez antes de verificar          | ✅                       |

### 💻 Exemplo
```js
for (let i = 0; i < 5; i++) {
  console.log(`Passo ${i}`);
}
```

---

📦 8. Arrays

### 📖 O básico
Arrays guardam vários valores em uma única variável.

```js
let num = [1, 3, 6, 7, 8];
console.log(num[0]);
```

Métodos que uso:
- `.length` → tamanho do array
- `.push()` → adiciona valor no final
- `.sort()` → ordena (atenção: por padrão ordena como string)
- `.indexOf()` → mostra o índice de um valor

### 💻 Percorrendo arrays
```js
for (let pos in num) {
  console.log(`Posição ${pos} tem valor ${num[pos]}`);
}
```

---

🧮 9. Funções

### 📖 Conceito
Funções são blocos reutilizáveis que recebem parâmetros e podem retornar valores.

Função tradicional:
```js
function soma(a, b) {
  return a + b;
}
```

Function expression:
```js
let dobro = function(x) {
  return x * 2;
};
```

Arrow function:
```js
const soma = (a, b) => a + b;
```

Exemplo — fatorial:
```js
function fatorial(n) {
  let fat = 1;
  for (let c = n; c > 1; c--) fat *= c;
  return fat;
}
```

---

🧠 10. Tipos de Dados

### 📖 Resumo rápido
Primitivos guardam valor direto; tipos de referência guardam endereço na memória.

Primitivos:
| Tipo      | Exemplo            | Descrição       |
|---------:|--------------------|----------------:|
| number   | let idade = 20;    | Números         |
| string   | "Ana"              | Textos          |
| boolean  | true / false       | Lógicos         |
| null     | let carro = null;  | Valor nulo      |
| undefined| let x;             | Sem valor       |

Referência:
```js
let arr1 = [1,2,3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1); // [1,2,3,4]
```

---

👤 11. Objetos

### 📖 O que são
Objetos guardam pares chave:valor — úteis pra representar coisas do mundo real.

```js
const pessoa = { nome: "Ana", idade: 20 };
console.log(pessoa.nome);
```

Desestruturação:
```js
const { nome, idade } = pessoa;
console.log(nome, idade);
```

---

🌈 12. Spread Operator (...)

### 📖 Para que uso
Copiar arrays/objetos sem alterar o original — ajuda a evitar mutação.

```js
const arr = [1,2,3];
const copia = [...arr, 4];
```

```js
const obj = { nome: "Ana", idade: 20 };
const novo = { ...obj, cidade: "RS" };
```

---

📦 13. Módulos (Import / Export)

### 📖 Por que dividir
Módulos ajudam a organizar o código em arquivos menores e reutilizáveis (muito usado em projetos React e Node).

```js
// arquivo1.mjs
export const idade = 25;

// arquivo2.mjs
import { idade } from "./arquivo1.mjs";
```

---

🧩 14. Métodos Modernos de Arrays

`.map()` — cria um novo array transformando cada elemento:
```js
[1,2,3].map(n => n * 2); // [2,4,6]
```

`.filter()` — filtra elementos com base em uma condição:
```js
[1,2,3,4].filter(n => n % 2 === 0); // [2,4]
```

`.forEach()` — executa algo para cada item (não retorna novo array):
```js
[1,2,3].forEach(n => console.log(n));
```

---

✅ 15. Resumo Geral

O que aprendi e considero importante:
- Fundamentos: variáveis, tipos e operadores
- Controle: condicionais e loops
- Interação: DOM e eventos
- Estruturas: arrays e objetos
- Funções: parâmetros, retorno e arrow
- Recursos modernos: desestruturação, spread, map, filter, módulos

---

👨‍💻 Autor  
Vinicius Arruda  
Estudante de Sistemas de Informação – UFN  
📅 Última atualização: Outubro de 2025