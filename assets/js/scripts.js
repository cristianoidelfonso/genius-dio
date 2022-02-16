let order = [];
let clickedOrder = [];
let score = 0;

// 0 = verde
// 1 = vermelho
// 2 = amarelo
// 3 = azul

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');


// Cria ordem aleatória de cores.
let shuffleOrder = () => {
  // Sorteia um número aleatório de 0 a 3 e faz o arredondamento
  let colorOrder = Math.floor( Math.random() * 4 );
  
  order[order.length] = colorOrder;

  clickedOrder = [];

  for(let i in order){
    let elementColor = createColorElement(order[i]);
    lightColor( elementColor, Number(i) + 1 );
  }
}


// Destaca a próxima cor.
let lightColor = (element, number ) => {
  let time = number * 500;

  setTimeout(() => {
    element.classList.add('selected');
  }, time - 250);

  setTimeout(() => {
    element.classList.remove('selected');
  });
}


// Checa se os botoes clicado são os mesmo da ordem gerada no jogo.
let checkOrder = () => {
  for(let i in clickedOrder){
    if(clickedOrder[i] != order[i]){
      gameOver();
      break;
    }
  }

  if(clickedOrder.length == order.length){
    alert(`Pontuação: ${score}\nVocê acertou!\nIniciando proximo nível.`);
    nextLevel();
  }
}

// Função para o click do usuário
let click = (color) => {
  clickedOrder[clickedOrder.length] = color; 
  createColorElement(color).classList.add('selected');
  
  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
  }, 250);

}

// 0 = green ; 1 = red ; 2 = yellow ; 3 = blue
// Função que retorna a cor
let createColorElement = (color) => {
  if(color == 0) {
    return green;
  }else if(color == 1) {
    return red;
  }else if(color == 2) {
    return yellow;
  }else if(color == 3) {
    return blue;
  }
}

// Função para próximo nível do jogo
let nextLevel = () => {
  score++;
  shuffleOrder();
}

// Função para game-over
let gameOver = () => {
  alert(`Pontuação: ${score}\nVocê perdeu!\nClique Ok para iniciar nova partida!`);
  order = [];
  clickedOrder = [];
  playGame();
}

// Função de start do jogo
let playGame = () => {
  // alert(`Bem vindo ao Genius!!!`);
  score = 0;
  nextLevel();
}

// Evento de clicks para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

// Start do jogo
playGame();