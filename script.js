// BANCO DE PERGUNTAS DO QUIZ
const perguntas = [
    {
        pergunta: "Como a Inteligência Artificial pode ajudar o produtor no campo?",
        alternativas: [
            { texto: "Prevendo pragas e analisando a saúde do solo por imagens.", correta: true },
            { texto: "Substituindo completamente o trabalho humano e a natureza.", correta: false },
            { texto: "Fazendo chover na hora exata que a planta precisa.", correta: false }
        ]
    },
    {
        pergunta: "Qual é o principal objetivo da agricultura sustentável?",
        alternativas: [
            { texto: "Produzir alimentos usando o máximo de recursos possível.", correta: false },
            { texto: "Preservar o meio ambiente para as próximas gerações enquanto produz alimentos.", correta: true },
            { texto: "Abandonar a tecnologia e voltar a plantar como antigamente.", correta: false }
        ]
    },
    {
        pergunta: "O uso de drones na lavoura serve principalmente para:",
        alternativas: [
            { texto: "Mapear a propriedade e aplicar insumos de forma precisa.", correta: true },
            { texto: "Espantar pássaros e animais silvestres.", correta: false },
            { texto: "Transportar a colheita pesada até a cidade.", correta: false }
        ]
    }
];

let indiceAtual = 0;
let pontos = 0;

function iniciarJogo() {
    indiceAtual = 0;
    pontos = 0;
    document.getElementById("jogo-tela").style.display = "block";
    document.getElementById("resultado-tela").style.display = "none";
    mostrarPergunta();
}

function mostrarPergunta() {
    const perguntaAtual = perguntas[indiceAtual];
    document.getElementById("pergunta-texto").innerText = perguntaAtual.pergunta;
    
    const caixaOpcoes = document.getElementById("caixa-opcoes");
    caixaOpcoes.innerHTML = ""; // Limpa as opções anteriores

    perguntaAtual.alternativas.forEach(alt => {
        const botao = document.createElement("button");
        botao.innerText = alt.texto;
        botao.classList.add("btn-opcao");
        botao.addEventListener("click", () => verificarResposta(botao, alt.correta));
        caixaOpcoes.appendChild(botao);
    });
}

function verificarResposta(botaoSelecionado, eCorreta) {
    // Bloqueia outros cliques enquanto carrega a próxima
    const botoes = document.querySelectorAll(".btn-opcao");
    botoes.forEach(b => b.disabled = true);

    if (eCorreta) {
        botaoSelecionado.classList.add("correto");
        pontos++;
    } else {
        botaoSelecionado.classList.add("errado");
        // Destaca a alternativa correta em verde para o aluno aprender
        botoes.forEach(b => {
            const perguntaAtual = perguntas[indiceAtual];
            perguntaAtual.alternativas.forEach(alt => {
                if(alt.correta && b.innerText === alt.texto) {
                    b.classList.add("correto");
                }
            });
        });
    }

    // Aguarda 1,5 segundos e avança
    setTimeout(() => {
        indiceAtual++;
        if (indiceAtual < perguntas.length) {
            mostrarPergunta();
        } else {
            mostrarResultado();
        }
    }, 1500);
}

function mostrarResultado() {
    document.getElementById("jogo-tela").style.display = "none";
    document.getElementById("resultado-tela").style.display = "block";
    
    const mensagem = document.getElementById("mensagem-final");
    mensagem.innerText = `Você acertou ${pontos} de ${perguntas.length} perguntas!`;
}

function reiniciarJogo() {
    iniciarJogo();
}

// Inicia o sistema ao abrir a página
window.onload = iniciarJogo;
