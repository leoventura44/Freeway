// Ator

let yAtor = 369;
let xAtor = 100;

function mostraAtor() {
    image(imagemDoAtor, xAtor, yAtor, 30, 25);
}

function movimentaAtor() {
  if(keyIsDown(87)) {
    yAtor -= 3
  }
  if(keyIsDown(83)) {
    yAtor += 3
  }
  if(keyIsDown(65)) {
    xAtor -= 3
  }
  if(keyIsDown(68)) {
    xAtor += 3
  }
}