// declarar variavel numero secreto que recebe a funcao 'Gerar numero aleatorio'
let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);

let tentativas = 1;

// funcao exibir numero na tela, declaro a funcao, escrevo dois parametros tag e texto
// declaro a varival campo, e essa variavel recebe a selecao do html
function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

exibirTextoNaTela("h1", "Jogo do número secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");

// funcao verificar chute, declaro a variavel chute, que recebe o input lá do html,
// se o chute for igual ao numero secreto, eu chamo a funcao exibirTextoNaTela e coloco o texto

function verificarChute() {
  let chute = document.querySelector("input").value;
  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou");
    let palavraTentativa = tentativas > 1 ? "Tentativas" : "Tentativa";
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela("p", mensagemTentativas);
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O número secreto é menor");
    } else {
      exibirTextoNaTela("p", "O número secreto é maior");
    }
    tentativas++;
  }
}

// funcao 'gerar numero aleatorio', vai retornar um inteiro gerado pelo random, entre 1 e 10
function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}
