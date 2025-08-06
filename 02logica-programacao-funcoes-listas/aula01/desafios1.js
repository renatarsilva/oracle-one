// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function IMC(altura, peso) {
  let alturaMetros = altura / 100;
  let verificarIMC = peso / (alturaMetros * alturaMetros);
  console.log(` O seu IMC é ${verificarIMC}`);
}

IMC(180, 78);

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function fatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * fatorial(numero - 1);
  }
}

console.log(fatorial(2));

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais.
//  Para isso, considere a cotação do dólar igual a R$4,80.

function cambio(dolar) {
  let real = dolar * 4.8;
  console.log(real);
}

cambio(prompt("Digite o valor"));

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function sala(base, altura) {
  let area = base * altura;
  let perimetro = 2 * (base + altura);
  console.log(area, perimetro);
}
sala(2, 5);

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function circulo(raio) {
  let pi = 3.14;
  let area = pi * (raio * raio);
  let perimetro = 2 * pi * raio;
  console.log(`A area é ${area}, e o perimetro ${perimetro}`);
}

circulo(prompt("Digite o raio"));

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function tabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} X ${i} = ${numero * i}`);
  }
}
tabuada(5);
