// 1. Sistema de Abas Interativas (Seção Sobre)
function mudarAba(event, nomeAba) {
    // Esconde todos os conteúdos das abas
    const conteudos = document.getElementsByClassName("tab-content");
    for (let i = 0; i < conteudos.length; i++) {
        conteudos[i].classList.remove("active");
    }

    // Remove a classe 'active' de todos os botões
    const botoes = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < botoes.length; i++) {
        botoes[i].classList.remove("active");
    }

    // Mostra a aba atual e adiciona a classe active ao botão que foi clicado
    document.getElementById(nomeAba).classList.add("active");
    event.currentTarget.classList.add("active");
}

// 2. Validação e Envio do Formulário (Simulador)
function validarFormulario(event) {
    // Evita o recarregamento padrão da página ao enviar o formulário
    event.preventDefault();

    // Pega os valores digitados pelo aluno
    const nome = document.getElementById("nome").value;
    const escola = document.getElementById("escola").value;
    const projeto = document.getElementById("projeto").value;
    const caixaMensagem = document.getElementById("mensagem-sucesso");

    // Cria uma lógica de sucesso dinâmica
    if(nome && escola && projeto) {
        caixaMensagem.innerHTML = `🚀 Sucesso! Olá ${nome}, seu projeto para o Colégio ${escola} foi pré-registrado com sucesso para o Agrinho 2026!`;
        caixaMensagem.classList.remove("hidden");
        
        // Limpa o formulário após o envio
        document.getElementById("form-agrinho").reset();
        
        // Esconde a mensagem de sucesso automaticamente após 7 segundos
        setTimeout(() => {
            caixaMensagem.classList.add("hidden");
        }, 7000);
    }
}

// 3. Efeito Visual: Alterar link ativo no menu ao rolar a página
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');
    
    let atual = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Verifica qual seção está visível na tela
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            atual = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(atual)) {
            link.classList.add('active');
        }
    });
});
