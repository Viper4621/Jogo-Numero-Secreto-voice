
const elementoChute = document.getElementById('chute')

//comando para habilitar reconhecimento de voz
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

  //comando para iniciar reconhecimento
  const recognition = new SpeechRecognition();
//linguagem do reconhecimento
  recognition.lang = 'pt-Br'
  recognition.start();

  //evento para pegar resultado e a função
  recognition.addEventListener('result', onSpeak);

  //função para e.results mostrar resultado como ele vem dentro de arrays no caso 2 usamos[0][0]
  //para mostrar direto o array da informação que esta em transcript por isso usamos da forma abaixo acessar o que desejamos
  function onSpeak(e){
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiUmValorValido(chute)
  }

  //retiramos da nossa html a estrutura que tinha e colocamos a função para criar a div e o span com o chute mostrando em tela
  function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `
       <div>Voce disse:</div>
       <span class="box">${chute}</span>
    `
  }

  //função para apos qualquer chute reativar o reconhecimento de voz para continuar jogando
  recognition.addEventListener('end', ()=> recognition.start())