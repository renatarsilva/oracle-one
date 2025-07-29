alert("Boas vindas ao jogo do número secreto");

//Declarar varivel

let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);

let chute = 0;
let tentativas = 0;

// condicao;

while (chute != numeroSecreto) {
  chute = prompt("Escolha um número entre 1 a 100");
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
