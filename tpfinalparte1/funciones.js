function dibujarBoton(x, y, w, h, texto) {
  if (mouseEnBoton(x, y, w, h)) {
    fill(111, 78, 55);
  } else {
    fill(101, 67, 33);
  }
  rect(x, y, w, h, 8);
  fill(255);
  textSize(22);
  textAlign(CENTER, CENTER);
  text(texto, x + w / 2, y + h / 2);
}

//detecta si el mouse está en el botón, los datos marcan el ancho del área que cubre ese botón!! Cambia según cada pantalla... Prestar atención
function mouseEnBoton(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}

function clickear(x, y, w, h, pantalldirigida) {
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    pantalla = pantalldirigida;

    if (pantalldirigida === 0) {
      reiniciarAnimacion();
    }
  }
}


//FUNCIOONES DE LA ANIMACIÓN:
function cargarAccion(nombre, cantidad) {
  let frames = [];
  for (let i = 0; i < cantidad; i++) {
    frames.push(loadImage("data/" + nombre + i + ".png"));
  }
  return frames;  
}

function elegirFrame(frames, velocidadAnimacion) {
  let indice = floor(frameCount / velocidadAnimacion) % frames.length;
  return frames[indice];
}

function dibujarNube(NUM, posX, posY) {
  let img = nubes[NUM];
  image(img, posX, posY, img.width*2, img.height*2);
}

function reiniciarAnimacion() {
  x = 130;
  xR = 0;
  xC = 700;
  alturaX = -100;
  alturaY = 289;
  fondoStop = false;
  granadaX = -50;
  bombaX = 328+20;
  bombaY = 400;
  xBoton = 1000;
  accionActual = 4;
  ANIMACION_BOMBA = false;
  botonComenzar = false;
  aumento = 1;
  avisosonido = true;
}
