alert("Boas vindas ao jogo do número secreto");

//Declarar varivel

let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);

let chute = 0;
let tentativas = 0;

// condicao;

while (chute != numeroSecreto) {
  chute = prompt(`Escolha um número entre 1 a ${numeroMaximo}`);
  tentativas++;

  if (chute == numeroSecreto) {
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
  }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(
  `Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`
);
