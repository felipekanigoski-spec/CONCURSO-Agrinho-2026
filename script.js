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

// 2. Validação e Envio do Formulário (Simulador de Inscrição)
function validarFormulario(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const escola = document.getElementById("escola").value;
    const projeto = document.getElementById("projeto").value;
    const caixaMensagem = document.getElementById("mensagem-sucesso");

    if(nome && escola && projeto) {
        caixaMensagem.innerHTML = `🚀 Sucesso! Olá ${nome}, seu projeto para o ${escola} foi pré-registrado com sucesso para o Agrinho 2026!`;
        caixaMensagem.classList.remove("hidden");
        
        document.getElementById("form-agrinho").reset();
        
        // Mantém o aviso na tela e esconde depois de 7 segundos
        setTimeout(() => {
            caixaMensagem.classList.add("hidden");
        }, 7000);
    }
}

// 3. Destacar o link do menu conforme rola a página de forma nativa e segura
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');
    
    let atual = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const alturaHeader = document.querySelector('header').offsetHeight;
        
        if (window.pageYOffset >= (sectionTop - alturaHeader - 20)) {
            atual = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${atual}`) {
            link.classList.add('active');
        }
    });
});
