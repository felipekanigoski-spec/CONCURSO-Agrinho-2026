function mostrarSecao(id) {
  let secoes = document.querySelectorAll(".secao");

  secoes.forEach(secao => {
    secao.classList.remove("ativa");
  });

  document.getElementById(id).classList.add("ativa");
}

function responder(resposta) {
  let resultado = document.getElementById("resultado");

  if (resposta === false) {
    resultado.textContent = "✔️ Correto! Nem tudo na internet é real.";
    resultado.style.color = "lightgreen";
  } else {
    resultado.textContent = "❌ Incorreto! Vídeos podem ser manipulados.";
    resultado.style.color = "red";
  }
}
