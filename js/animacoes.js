const somClique = new Howl({
  src: ['sons/clique.mp3'] 
});

function animarBotaoChutar() {
  anime({
    targets: '.container__botao', 
    scale: [1, 1.1, 1], 
    duration: 300,
    easing: 'easeInOutOut',
  });
}

function animarBotaoNovoJogo() {
  anime({
    targets: '#reiniciar', 
    scale: [1, 1.1, 1], 
    duration: 300,
    easing: 'easeInOutOut',
  });
}

function animarMensagemFeedback() {
  anime({
    targets: '.texto__paragrafo',
    opacity: [0, 1], 
    translateY: [-10, 0], 
    duration: 500,
    easing: 'easeOutQuad',
  });
}