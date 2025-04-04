const campoQuantidade = document.getElementById("quantidade");
const campoDe = document.getElementById("de");
const campoAte = document.getElementById("ate");
let botaoReiniciar = document.getElementById("btn-reiniciar");
let resultado = document.getElementById("resultado");

function sortear() {
  let quantidade = parseInt(campoQuantidade.value);
  let de = parseInt(campoDe.value);
  let ate = parseInt(campoAte.value);

  let sorteados = [];
  let numero;

  for (let i = 0; i < quantidade; i++) {
    numero = obterNumeroAleatorio(de, ate);

    while (sorteados.includes(numero)) {
      numero = obterNumeroAleatorio(de, ate);
    }
    sorteados.push(numero);
  }

  resultado.innerHTML = `<label class="texto__paragrafo"
              >Números sorteados: ${sorteados}</label
            >`;

  alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function alterarStatusBotao() {
  if (botaoReiniciar.classList.contains("container__botao-desabilitado")) {
    botaoReiniciar.classList.remove("container__botao-desabilitado");
    botaoReiniciar.classList.add("container__botao");
  }
}

function reiniciar() {
  botaoReiniciar.classList.remove("container__botao");
  botaoReiniciar.classList.add("container__botao-desabilitado");
  campoQuantidade.value = "";
  campoDe.value = "";
  campoAte.value = "";
  resultado.innerHTML = `<label class="texto__paragrafo"
              >Números sorteados: nenhum até agora</label
            >`;
}
