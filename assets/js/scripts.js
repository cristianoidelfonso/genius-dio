let order = [];
let clickedOrder = [];
let score = 0;

// 0 = verde
// 1 = vermelho
// 2 = amarelo
// 3 = azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');


// Cria ordem aleatória de cores.
let shuffleOrder = () => {
  // Sorteia um número aleatório de 0 a 3 e faz o arredondamento
  let colorOrder = Math.floor( Math.random * 4 );
  
  order[order.length] = colorOrder;

  clickedOrder = [];

  for(let i in order){
    let elementColor = createColorElement(order[i]);
    
    lightColor( elementColor, Number(i) + 1 );
  }
}


// Destaca a próxima cor.
let lightColor = (element, number ) => {
  let number = number * 500;
  
  setTimeout(() => {
    element.classList.add('selected');
  }, number - 250);

  setTimeout(() => {
    element.classList.remove('selected');
  });
}


// Checa se os botoes clicado são os mesmo da ordem gerada no jogo.
let checkOrder = () => {
  for(let i in clickedOrder){
    if(clickedOrder != order[i]){
      lose();
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
  });

  checkOrder();
}

// 

