// Criar uma função que exibe "Olá, mundo!" no console.

function olaMundo(params) {
  console.log("Olá, mundo!");
}

olaMundo();

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function saudacao(nome, idade) {
  console.log(`Olá, ${nome}, sua idade é ${idade}`);
}

saudacao("Maki", 29);

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function dobro(numero) {
  resultado = numero * 2;
  console.log(resultado);
}

dobro(2);

// Criar uma função que recebe três números como parâmetros e retorna a média deles.

function conta(numero1, numero2, numero3) {
  media = (numero1 + numero2 + numero3) / 3;
  console.log(media);
}
conta(20, 20, 20);

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function maior(num1, num2) {
  if (num1 > num2) {
    console.log(num1);
  } else {
    console.log(num2);
  }
}

maior(10, 20);

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function gemeo(numero) {
  multiplicacao = numero * numero;
  console.log(multiplicacao);
}
gemeo(3);
