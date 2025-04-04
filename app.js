const qtdNumeros = document.getElementById("quantidade");
const doNumero = document.getElementById("de");
const ateNumero = document.getElementById("ate");
const exibirResultado = document.getElementById("resultado");
const botaoReiniciar = document.getElementById("btn-reiniciar");

function sortear() {
  const quantidade = parseInt(qtdNumeros.value);
  const de = parseInt(doNumero.value);
  const ate = Number(ateNumero.value);

  if (!quantidade || !de || !ate) {
    alert("Preencha os campos!");
    return;
  }

  const numerosSorteados = [];
  let numero;

  for (let i = 0; i < quantidade; i++) {
    numero = obterNumeroAleatorio(de, ate);

    while (numerosSorteados.includes(numero)) {
      numero = obterNumeroAleatorio(de, ate);
    }
    numerosSorteados.push(numero);
  }

  exibirResultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados}</label>`;
  alterarStatusBotao();
}

function obterNumeroAleatorio(minimo, maximo) {
  return Math.floor(Math.random() * (maximo - minimo)) + minimo;
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
  qtdNumeros.value = "";
  doNumero.value = "";
  ateNumero.value = "";
  exibirResultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;
}
