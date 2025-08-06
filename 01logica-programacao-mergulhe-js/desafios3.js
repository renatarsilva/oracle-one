// Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

console.log("Seja bem vindo");

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

let nome = "Maki";
console.log(`Seja bem vinda ${nome}`);

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

let nome1 = "Maki";
alert("Seja bem vinda " + nome1);

// Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

let linguagem = prompt("Qual a sua linguagem favorita?");

console.log(`A linguagem favorita do usuário é ${linguagem}`);

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

let valor1 = 5;
let valor2 = 10;
let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

let valor3 = 10;
let valor4 = 5;
let resultado1 = valor3 - valor4;

console.log(`A diferença entre ${valor3} e ${valor4} é igual a ${resultado1}`);

// Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

let ano = parseInt(prompt("Digite seu ano de nascimento: "));
let anoAtual = 2025;
let idade = anoAtual - ano;

let verificar = idade > 18 ? "Você pode dirigir" : "Você não pode dirigir";
console.log(`voce tem ${idade} e ${verificar}`);

// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

let numero = parseInt(prompt("Digite um número: "));

if (numero % 2 == 0) {
  alert("O número é par");
} else {
  alert("O número é impar");
}

// Use um loop while para imprimir os números de 1 a 10 no console.

let contagem = 1;

while (contagem <= 10) {
  console.log(contagem);
  contagem++;
}

// Crie uma variável "nota" e atribua um valor numérico a ela.
// Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

let nota = parseInt(prompt("Digite sua nota"));

let verificar1 = nota >= 7 ? "aprovado" : "reprovado";
console.log(verificar1);

// Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

let aleatório = parseInt(Math.random() * 100 + 1);
alert(aleatório);

// Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

let aleatorio2 = parseInt(Math.random() * 10 + 1);
console.log(aleatorio2);

// Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

let aleatorio3 = parseInt(Math.random() * 1000 + 1);
console.log(aleatorio3);
