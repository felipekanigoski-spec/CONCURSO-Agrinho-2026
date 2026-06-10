// Função para forçar a rolagem suave até a seção correta
function rolarParaSeçao(idSeçao) {
    const elemento = document.getElementById(idSeçao);
    if (elemento) {
        // Pega a altura do cabeçalho para não cobrir o título da seção
        const alturaHeader = document.querySelector('header').offsetHeight;
        const posicaoElemento = elemento.offsetTop;
        
        window.scrollTo({
            top: posicaoElemento - alturaHeader,
            behavior: 'smooth'
        });
    }
}

// 1. Sistema de Abas Interativas (Seção Sobre)
function mudarAba(event, nomeAba) {
    const conteudos = document.getElementsByClassName("tab-content");
    for (let i = 0; i < conteudos.length; i++) {
        conteudos[i].classList.remove("active");
    }

    const botoes = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < botoes.length; i++) {
        botoes[i].classList.remove("active");
    }

    document.getElementById(nomeAba).classList.add("active");
    event.currentTarget.classList.add("active");
}

// 2. Validação e Envio do Formulário
function validarFormulario(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const escola = document.getElementById("escola").value;
    const projeto = document.getElementById("projeto").value;
    const caixaMensagem = document.getElementById("mensagem-sucesso");

    if(nome && escola && projeto) {
        caixaMensagem.innerHTML = `🚀 Sucesso! Olá ${nome}, seu projeto para o Colégio ${escola} foi pré-registrado com sucesso para o Agrinho 2026!`;
        caixaMensagem.classList.remove("hidden");
        
        document.getElementById("form-agrinho").reset();
        
        setTimeout(() => {
            caixaMensagem.classList.add("hidden");
        }, 7000);
    }
}
