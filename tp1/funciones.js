//primera función que retorna un valor:
function cargarAccion(nombre, cantidad) {
  let frames = [];
  for (let i = 0; i < cantidad; i++) {
    frames.push(loadImage("data/" + nombre + i + ".png"));
  }
  return frames;  
}

//segunda función que retorna un valor:
function elegirFrame(frames, velocidadAnimacion) {
  let indice = floor(frameCount / velocidadAnimacion) % frames.length;
  return frames[indice];
}

//otra función más que retorna un valor:
//la voy a usar exclusivamente para el logo de crash bandicoot.

function elegirFrameLoop(frames, velocidadAnimacion, LoopFrames) {
  let frameTotal = floor(frameCount / velocidadAnimacion);
  let total = frames.length;
  let inicioLoop = total - LoopFrames; 

  if (frameTotal < total) {
    return frames[frameTotal];
  } else {
    let Loop = inicioLoop + ((frameTotal - total) % LoopFrames);
    return frames[Loop];
  }
}

//función propia que no retorna un valor:
function botonReiniciar(alturax, alturaY) {
let inicioX = 280;
let espacio = 30; 
let posY = 260;
//no olvidar agregar un if moouseX y mouseY para generar un area de interacción + sumarle la acción del moussepressed :)
noStroke();
if (mouseX > 250 && mouseX < 550 && mouseY < 288 && mouseY > 232) {
fill(178, 132, 83);
rect(250, 235, 300, 50, 8);
tint(255, 255)
for (let i = 0; i < letras.length; i++) {
  image(letras[i], inicioX + (i * espacio), posY, letras[i].width * ESCALALETRAS, letras[i].height * ESCALALETRAS);
}
noTint();
} else {
fill(178, 132, 83, 110);
rect(250, 235, 300, 50, 8);
tint(255, 127)
for (let i = 0; i < letras.length; i++) {
  image(letras[i], inicioX + (i * espacio), posY, letras[i].width * ESCALALETRAS, letras[i].height * ESCALALETRAS);
}
noTint();
}
}

function mousePressed() {
  if (mouseX > 250 && mouseX < 550 && mouseY < 288 && mouseY > 232) {
    fondoX = 0;
    fondoVel = 2;
    velIsla = 0;
    islaY = 450;
    contadorGiro = 0;
    yaGiro = false;
    wumpaVisible = false;
    fondoStop = false;
    wumpaX = 900;
    wumpaY = 420;
    accionActual = 0;
    x = -60;
    frameCount = 0;
    logoY = 300;
    escalaLogo = 5;
    musica.stop();
    musica.play();
  }
}
