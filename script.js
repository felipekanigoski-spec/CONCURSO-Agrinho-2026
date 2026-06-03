/* BANCO DE DADOS DO TERMINAL */
const bancoDados = {
    clima: {
        titulo: "> SISTEMA DE CLIMA",
        texto: "Sensores meteorológicos avançados conectados via satélite prevêem geadas e secas com semanas de antecedência. Isso permite que o produtor ajuste o calendário de plantio de forma cirúrgica, protegendo o alimento contra perdas climáticas severas."
    },
    maquinas: {
        titulo: "> FROTA AUTÔNOMA",
        texto: "Tratores e colheitadeiras sem motoristas já rodam os campos guiados por GPS de alta precisão milimétrica. Eles trabalham dia e noite sem parar, compactando menos o solo e reduzindo o consumo de combustível fóssil em até 25%."
    },
    biotech: {
        titulo: "> BIOTECNOLOGIA APLICADA",
        texto: "A ciência do campo desenvolve sementes mais fortes e naturais que resistem a climas extremos e pragas sem depender de excesso de defensivos químicos. O resultado é um alimento mais limpo, seguro e produtivo por hectare."
    },
    recursos: {
        titulo: "> ECO_EFICIÊNCIA ATIVA",
        texto: "O reaproveitamento total de resíduos orgânicos transforma o que seria lixo em biofertilizantes e biogás, gerando energia limpa para abastecer as propriedades rurais e zerando a pegada de carbono do ecossistema agrícola."
    }
};

/* FUNÇÃO DE INTERAÇÃO DO PAINEL CORRIGIDA */
function ativarModulo(elementoClicado, chaveDados) {
    // Localiza e desativa o destaque visual de todos os módulos
    const modulos = document.querySelectorAll('.modulo-card');
    modulos.forEach(mod => mod.classList.remove('ativo'));

    // Ativa o visual apenas no módulo clicado
    elementoClicado.classList.add('ativo');

    // Atualiza as informações do monitor de dados na tela de forma direta
    document.getElementById('print-titulo').innerText = bancoDados[chaveDados].titulo;
    document.getElementById('print-texto').innerText = bancoDados[chaveDados].texto;
}
