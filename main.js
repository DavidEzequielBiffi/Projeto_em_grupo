const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");




const perguntas = [
    {
        enunciado: "Você é mais otimista ou pessimista?",
        alternativas: [
            {
                texto: " Otimista",
                afirmacao: " Você é uma pessoa trabalhadora! ",
            },
            {
                texto: " Pessimista ",
                afirmacao: " Você é uma pessoa preguiçosa! ",
            }
        ]
    },
    {
        enunciado: "As pessoas normalmente se irritam com você?",
        alternativas: [
            {
                texto: " Sim ",
                afirmacao: " Você é uma pessoa otimista que comunica-se bem e fala bastante. ",
            },
            {
                texto: " Não ",
                afirmacao: " Você é uma pessoa mais séria que não fala muito. ",
            }
        ]
    },
    {
        enunciado: "Você mora em:",
        alternativas: [
            {
                texto: " Uma casa ",
                afirmacao: " VOcê gosta de se divertir no jardim. ",
            },
            {
                texto: " Um apartamento  ",
                afirmacao: " Você prerfere assistir filmes ao invés de sair de seu apartamento. ",
            }
        ]
    },
    {
        enunciado: "Você tem bastante amigos?",
        alternativas: [
            {
                texto: " Sim ",
                afirmacao: " Você é uma pessoa engraçada. ",
            },
            {
                texto: " Não ",
                afirmacao: " Você prefere ficar sozinho. ",
            }
        ]
    },
    {
        enunciado: "Na maior parte do tempo, você:",
        alternativas: [
            {
                texto: " Trabalha ",
                afirmacao: "Você é o Bob Esponja!",
            },
            {
                texto: " Dorme ",
                afirmacao: " Você é o Patrick Estrela! ",
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();