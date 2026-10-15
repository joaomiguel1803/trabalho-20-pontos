const perguntas = [
  {
    texto: "O que você pensa sobre a inteligência artificial?",
    opcoes: ["Tenho curiosidade", "Tenho medo"]
  },
  {
    texto: "Você usaria IA nos estudos?",
    opcoes: ["Sim, para aprender", "Não, tenho receio"]
  },
  {
    texto: "Como vê o futuro da IA?",
    opcoes: ["Com entusiasmo", "Com preocupação"]
  }
];

let atual = 0;
let pontos = 0;

function comecarQuiz() {
  atual = 0;
  pontos = 0;
  document.getElementById("inicio").hidden = true;
  document.getElementById("resultado").hidden = true;
  document.getElementById("quiz").hidden = false;
  mostrarPergunta();
}

function mostrarPergunta() {
  document.getElementById("pergunta").textContent =
    perguntas[atual].texto;

  const opcoes = document.getElementById("opcoes");
  opcoes.innerHTML = "";

  perguntas[atual].opcoes.forEach((texto, indice) => {
    const botao = document.createElement("button");
    botao.textContent = texto;
    botao.onclick = () => responder(indice);
    opcoes.appendChild(botao);
  });
}

function responder(indice) {
  if (indice === 0) pontos++;
  atual++;

  if (atual < perguntas.length) {
    mostrarPergunta();
  } else {
    document.getElementById("quiz").hidden = true;
    document.getElementById("resultado").hidden = false;
    document.getElementById("mensagem").textContent =
      pontos >= 2
        ? "Você tem fascínio pela inteligência artificial!"
        : "Você vê a IA com mais cautela. Continue aprendendo!";
  }
}
