function mostrar(id) {
  document.querySelectorAll(".card").forEach(c => {
    c.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

function responder(resp) {
  const r = document.getElementById("resultado");

  if (!resp) {
    r.textContent = "✔ Correto! Vídeos podem ser manipulados por IA.";
    r.style.color = "#00ffcc";
  } else {
    r.textContent = "❌ Errado! Nem tudo na internet é verdadeiro.";
    r.style.color = "#ff4d4d";
  }
}
