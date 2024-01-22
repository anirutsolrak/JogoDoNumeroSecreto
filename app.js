let listaDeNumerosSorteados = [];
let numeroLimite = 20;
let numeroSecreto = gerarNumeroAleatório ();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
}
  
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'jogo do número secreto')
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 20')
};
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector ('input').value;

    if (chute == numeroSecreto) {
       exibirTextoNaTela ('h1', 'Você Acertou!');
       let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
       let mensagemTentativas = `Voce descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela ('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled');}

        else {
            if (chute > numeroSecreto) {
exibirTextoNaTela('p','O numero secreto é menor');               
            
            }else{
            exibirTextoNaTela('p', 'O numero secreto é maior');
        }
        tentativas++;
        limparCampo();
}
}
function gerarNumeroAleatório() {
let numeroEscolhido = parseInt(Math.random () * numeroLimite + 1);  
let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

if (quantidadeDeElementosNaLista == 20) {
    listaDeNumerosSorteados = []
};

if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatório();
} else {
    listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
}
};
function limparCampo() {
  chute = document.querySelector ('input');
  chute.value = '';
};
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatório();
    limparCampo();
    tentativas = 1;
   exibirMensagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled', true);
}