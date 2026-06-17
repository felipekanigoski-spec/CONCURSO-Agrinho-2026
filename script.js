function mostrarSecao(id) {
  document.querySelectorAll(".secao").forEach(secao => {
    secao.classList.remove("ativa");
  });

  document.getElementById(id).classList.add("ativa");
}

function responder(resposta) {
  const resultado = document.getElementById("resultado");

  if (resposta === false) {
    resultado.textContent = "✔ Correto! Nem tudo na internet é confiável.";
    resultado.style.color = "#00ff99";
  } else {
    resultado.textContent = "❌ Incorreto! Conteúdos podem ser manipulados por IA.";
    resultado.style.color = "#ff4d4d";
  }
}
