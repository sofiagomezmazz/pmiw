function pantallaInicio() {
  background(102, 213, 234);
  image(fondo, xR, 160, fondo.width*2, fondo.height*2);

//Aniamción del tres + botón de comenzar, explota la bomba y se detiene todo
if (!fondoStop) {
  let frameRuedas = elegirFrame(acciones[0], 6);
  image(frameRuedas, xR, 400, frameRuedas.width*2, frameRuedas.height*2);
  xR -= fondoVel;
  xBoton -= fondoVel;
} else {
  image(ruedasestaticas, xR, 400, ruedasestaticas.width*2, ruedasestaticas.height*2);
}

//ciclo de nubes que se van moviendo en el cielo y reaparecen cuando salen de la pantalla
x -= nubeVel;
xC -= nubeVel;

if (x <= -600) {
  x = 800;
}
if (xC <= -600) {
  xC = 800;
}

//NUBES DEL FONDO
dibujarNube(0, x-110, 20);
dibujarNube(1, x+120, 50);
dibujarNube(2, x+340, 35);
dibujarNube(2, x-30, 85);
dibujarNube(0, x+220, 110);
dibujarNube(1, x+430, 65);
dibujarNube(1, xC-160, 45);
dibujarNube(0, xC+330, 30);
dibujarNube(0, xC-65, 75);
dibujarNube(2, xC+410, 95);
dibujarNube(2, xC+100, 200);
dibujarNube(1, xC+190, 225);

let frames = acciones[accionActual];
let frame = elegirFrame(frames, 30);
image(frame, alturaX, alturaY - frame.height*1.5, frame.width*1.5, frame.height*1.5);


//la granada entra por la izquierda, se tediene en las ruedas del tres y explota.
if (frameCount < 400) {
  let frameGranada = acciones[3][0]; //de la accion guradada como granada (la cuarta acción en el arreglo), solo usamos la priemra imgaen (número 0)

  if (granadaX < bombaX) {
    granadaX += 2; //la granada avanza hasta el lugar de la explosión...
    frameGranada = elegirFrame(acciones[3], 6); // solo si este if se cumple la granada está animada, si no, muestra la granada quieta invocada en el let de arriba!!
  }
  if (granadaX > bombaX) { //límite para que la granada no siga avanzando
    granadaX = bombaX;
  }
  imageMode(CENTER);
  image(frameGranada, granadaX, 430, frameGranada.width*2, frameGranada.height*2);
  imageMode(CORNER);
}
//acá termina la animación de la granada

//la bomba explota en el lugar de la granada
  if (frameCount === 400) {
    ANIMACION_BOMBA = true;
    explosion.play();
  }
  if (ANIMACION_BOMBA) {
    let frameBomba = elegirFrame(acciones[2], 7);
    imageMode(CENTER);
    image(frameBomba, bombaX, bombaY, frameBomba.width*3.5, frameBomba.height*3.5);
    imageMode(CORNER);
    if (frameCount > 420) {
      ANIMACION_BOMBA = false;
      fondoStop = true;
    }
  }
//termina la animación de la bomba.

//indy jones entra caminando por arriba del vagón
if (frameCount > 420 && frameCount <= 750) {
  alturaX++;
}
//salto
if (frameCount > 750 && frameCount <= 775) {
  accionActual = 5;
  alturaX += 2;
  alturaY -= 2;
}
//empieza a caer
if (frameCount > 775 && frameCount <= 800) {
  accionActual = 5;
  alturaX += 2;
  alturaY += 2;
}
//retoma la caminata
if (frameCount > 800 && frameCount < 850) {
  accionActual = 4;
  alturaX++;
}
//latizago
if (frameCount >= 850 && frameCount < 900) {
  accionActual = 6;
} else if (frameCount >= 900 && frameCount < 980) {
  accionActual = 7;
} else if (frameCount >= 980) {
  accionActual = 6;
}
if (frameCount === 945) {
  latigo.play();
}

//LOGO INDIANA JONES:
if (frameCount % 60 < 30) { 
  anchoLogo = 400;
} else {
  anchoLogo = 408;
}
imageMode(CENTER);
let altoLogo = anchoLogo*logo.height/logo.width; //ESTE CÁLCULO MANTIENE LA PROPORCIÓN DEL LOGO CUANDO SE AGRANDA Y SE ACHICA
image(logo, width/2, 80, anchoLogo, altoLogo);
imageMode(CORNER);

//botón para comenzar!!!!! BOTON VIENE EN EL VAGÓN Y SE DETIENE:
botonComenzar = frameCount >= 960;
aumento = 1;

if (!botonComenzar) {
   tint(255, 150);
} else {
noTint();
if (mouseEnBoton(xBoton, 289-altoBoton, anchoBoton, altoBoton)) {
aumento = 1.06;
 }
}

imageMode(CENTER);
image(botoninicio,xBoton+anchoBoton/2,289-altoBoton*aumento/2,anchoBoton*aumento,altoBoton*aumento); //NUNCA SUPERA LA LÍNEA DEL TREN
imageMode(CORNER);
noTint();

//cartel para avisarle al usuario que active el sonido
if (avisosonido) {
  fill(0, 180);
  fill(255);
  textFont("monospace");
  textAlign(CENTER, CENTER);
  textSize(18);
  text("Hacé click en la pantalla para activar el sonido", width/2, height-15);
}  
//nuestros nombres
textFont("monospace");
textSize(13);
textAlign(LEFT, TOP);
fill(0);
text("Grilli Natanael\nGómez Sofía", 12, 12);
}  
