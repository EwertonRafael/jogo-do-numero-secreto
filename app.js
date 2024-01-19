let mostrarNaTela = (tag, texto) => {
  let palavra = document.querySelector(tag);
  palavra.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
};
exibirMensagemInicial();

let gerarNumeroAleatorio = () => {
  return parseInt(Math.random() * 10 + 1);
};

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function verificarChute() {
  let chute = document.querySelector("input").value;
  if (chute == numeroSecreto) {
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    mostrarNaTela("h1", "Você Acertou!!!");
    let mensagemTentativa = `Descobriu o número secreto com ${tentativas} ${palavraTentativa}, parabéns.`;
    mostrarNaTela("p", mensagemTentativa);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else if (chute > numeroSecreto) {
    mostrarNaTela("p", "número secreto é menor.");
  } else {
    mostrarNaTela("p", "número secreto é maior.");
  }
  tentativas++;
  limparCampo();
}
function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}
function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

function exibirMensagemInicial() {
  mostrarNaTela("h1", "Jogo do número secreto");
  mostrarNaTela("p", "Entre com um numero de 1 a 10");
}
