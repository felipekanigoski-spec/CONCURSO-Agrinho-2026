// Banco de dados espacial de perguntas (Fatos ou Deepfakes/Fake News)
const bancoQuestoes = [
    {
        texto: "Um vídeo mostra um político famoso declarando guerra aos alienígenas, mas o áudio está levemente dessincronizado e ele não pisca os olhos. Isso é um sinal de...",
        eVerdadeiro: false // É uma Deepfake/Falso
    },
    {
        texto: "Para ter certeza se uma imagem do espaço é real ou gerada por IA, devemos buscar a mesma notícia em portais científicos confiáveis (como o da NASA).",
        eVerdadeiro: true // Verdadeiro
    },
    {
        texto: "Robôs automatizados (bots) nas redes sociais conseguem espalhar notícias falsas mais rápido do que uma nave na velocidade da luz.",
        eVerdadeiro: true // Verdadeiro
    }
];

let questaoAtual = 0;

function carregarQuestao() {
    const elementoTexto = document.getElementById("texto-pergunta");
    const elementoResultado = document.getElementById("resultado-scanner");
    
    elementoResultado.innerText = ""; // Limpa resposta anterior
    
    if (questaoAtual < bancoQuestoes.length) {
        elementoTexto.innerText = bancoQuestoes[questaoAtual].texto;
    } else {
        elementoTexto.innerText = "👽 Treinamento Concluído! Seu sistema de defesa contra desinformação está 100% calibrado.";
        document.querySelector(".botoes-quiz").style.display = "none";
    }
}

function verificarResposta(respostaUsuario) {
    const elementoResultado = document.getElementById("resultado-scanner");
    const respostaCorreta = bancoQuestoes[questaoAtual].eVerdadeiro;

    if (respostaUsuario === respostaCorreta) {
        elementoResultado.style.color = "#39ff14"; // Verde Neon
        elementoResultado.innerText = "🛸 Acertou! Escudos ativados contra a mentira.";
    } else {
        elementoResultado.style.color = "#ff3333"; // Vermelho Alerta
        elementoResultado.innerText = "💥 O raio da desinformação te atingiu! Mais atenção da próxima vez.";
    }

    // Avança para o próximo teste após 2.5 segundos
    questaoAtual++;
    setTimeout(carregarQuestao, 2500);
}

// Inicia o simulador assim que a página carrega
window.onload = carregarQuestao;
