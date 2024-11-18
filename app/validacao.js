function verificaSeOChutePossuiUmValorValido(chute) {
  const numero = +chute;
  //criamos um div para aparecer em tela o erro de valor invalido
  if (chuteForInvalido(numero)) {
    if (chute.toUpperCase() === "GAME OVER") {
      document.body.innerHTML = `
                <h2>Game Over!!!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                `;
      document.body.style.backgroundColor = "black";
    } else {
      elementoChute.innerHTML += "<div>valor invalido</div>";
    }

    if (numeroForMaiorOuMenorOValorPermitido(numero)) {
      elementoChute.innerHTML += ` <div>valor invalido fale um numero entre ${menorValor} ou ${maiorValor}</div>`;
      return;
    }

    if (numero === numeroSecreto) {
      document.body.innerHTML = `
           <h2>Você Acertou</h2>
           <h3>O Numero secreto era ${numeroSecreto}</h3>
           <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `;
    } else if (numero > numeroSecreto) {
      elementoChute.innerHTML += `<div>O numero secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`;
    } else {
      elementoChute.innerHTML += `<div>O numero secreto é maior <i class="fa-solid fa-arrow-down-long"></i></div>`;
    }
  }
}

//função para verificar se é um numero e dar erro
function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}

//função de erro para avisar que o numero tem que estar entre o menor e maior valor
function numeroForMaiorOuMenorOValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}

//criamos uma função para quando clicar no botão que tem o id jogar novamente atualizar a pagina e iniciar novo jogo
document.body.addEventListener("click", (e) => {
  if (e.target.id == "jogar-novamente") {
    window.location.reload();
  }
});
