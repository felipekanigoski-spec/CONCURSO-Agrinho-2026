// Objeto que guarda as informações das abas tecnológicas do Agrinho
const infosAbas = {
    drones: "Os drones sobrevoam as plantações tirando fotos de alta resolução. Com essas imagens, o agricultor descobre pontos exatos com pragas ou falta de água sem precisar andar por hectares de terra, aplicando remédios apenas onde é realmente necessário.",
    ia: "A Inteligência Artificial cruza dados do clima, histórico do solo e previsões de tempo para dizer ao produtor qual é o melhor dia para plantar e colher, reduzindo riscos de perder a lavoura por secas ou tempestades.",
    hidroponia: "As fazendas verticais utilizam técnicas como a hidroponia (plantio na água com nutrientes, sem solo) dentro de prédios urbanos. Isso permite cultivar alimentos frescos dentro das grandes cidades, economizando 95% de água."
};

// Função que realiza a troca de abas de forma dinâmica
function mudarAba(botaoClicado, chaveInfo) {
    // Localiza todas as abas e remove a cor de destaque (classe 'ativa')
    const botoes = document.querySelectorAll('.btn-aba');
    botoes.forEach(b => b.classList.remove('ativa'));

    // Adiciona a cor de destaque apenas no botão que acabou de ser clicado
    botaoClicado.classList.add('ativa');

    // Altera o texto exibido na tela de acordo com a chave escolhida
    document.getElementById('texto-aba').innerText = infosAbas[chaveInfo];
}
