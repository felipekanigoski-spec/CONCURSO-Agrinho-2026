// Função Definitiva de Rolagem Manual Baseada em Pixels
function rolarPara(idSeçao) {
    const alvo = document.getElementById(idSeçao);
    if (alvo) {
        const alturaHeader = document.querySelector('header').offsetHeight;
        const posicaoAlvo = alvo.getBoundingClientRect().top + window.pageYOffset;
        
        window.scrollTo({
            top: posicaoAlvo - alturaHeader,
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
        
        setTimeout(() => {
            caixaMensagem.classList.add("hidden");
        }, 7000);
    }
}

// 3. Gerenciamento Visual do Menu Conforme o Scroll da Página ocorre
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navButtons = document.querySelectorAll('.nav-btn');
    let atual = 'inicio';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const alturaHeader = document.querySelector('header').offsetHeight;
        
        if (window.pageYOffset >= (sectionTop - alturaHeader - 30)) {
            atual = section.getAttribute('id');
        }
    });

    navButtons.forEach(btn => {
        btn.classList.remove('active');
        // Identifica qual botão ativa com base na função onclick atribuída a ele
        if (btn.getAttribute('onclick').includes(`'${atual}'`)) {
            btn.classList.add('active');
        }
    });
});
