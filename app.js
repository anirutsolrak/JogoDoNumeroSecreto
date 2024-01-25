let listaDeNumerosSorteados = [];
let numeroLimite = 20;
let numeroSecreto = 7;
let tentativas = 1;
let numeroPar = [];
let numeroImpar = [];

    

    
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
    verificarParOuImpar(chute);
   
    if (tentativas ===3) {exibirTextoNaTela ('p' ,'voce atingiu o maximo de tentativas e perdeu')
    
}
  

   else if (chute == numeroSecreto) {
       exibirTextoNaTela ('h1', 'Você Acertou!');
       let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
       let mensagemTentativas = `Voce descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela ('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled');}

        else {
            if (chute > numeroSecreto) {
exibirTextoNaTela('p','O numero secreto é menor')          
            
            }else{
            exibirTextoNaTela('p', 'O numero secreto é maior');
        }
        
        tentativas++;
        limparCampo();
        
}
      

}
function verificarParOuImpar(chute ) {
  
    if (chute % 2 === 0) {numeroPar.push(chute);
      
    } else {numeroImpar.push(chute);
        
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
   listaFinal();
};
function listaFinal() {
    alert ('numero(s) impar')
    alert (numeroImpar )
    alert ('numero(s) par');
    alert (numeroPar)
};
