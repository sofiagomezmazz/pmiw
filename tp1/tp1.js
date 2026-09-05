// Resolución de 800x600. [CHECKED]
//Carga de imágenes mediante loadImage(). [CHECKED]
//Uso de ciclos for para recorrer y/o construir los arrays de frames. [CHECKED]
//Construcción de arrays de imágenes para almacenar los frames de cada animación. [CHECKED]
//Al menos 2 animaciones/estados diferentes para el personaje. [CHECKED]
//Al menos 2 funciones propias con parámetros, que permitan reutilizar el sistema de animación. [CHECKED]
//Al menos 1 función propia que retorne un valor. [CHECKED]
//Implementación de una máquina de estados para controlar las diferentes animaciones, mediante uso de condicionales (if / else) o (switch). [CHECKED]
//Modificación de la velocidad de animación mediante una variable o parámetros de función. [CHECKED] 
//Uso de alguna estrategia de manejo temporal: frameCount, contadores, millis(). [CHECKED]
//El sistema deberá permitir reiniciar las animaciones y/o volver al estado inicial. [CHECKED]

//IDEAS SOBRE CÓMO SEGUIR LA ANIMACIÓN PERRRRRRRRRRRROOOOOO:
// idea: agregar el wumpa, hacer que se achique y se agreande 
//a medida que gira (PROBABLEMENTE CON UN IF O UN CICLO FOR QUE FUNCIONE CON UN %), cuando pasa crash, lo agarra Y desaparece. 
//TERMINA ESO Y APARECE EL PLAY NOW, ALGO ASÍ. FIN DE LA ANIMACIÓN. 
//SOLUCIONAR EL TEMA DEL FONDO Y ENCONTRAR TIPOGRAFÍA DE CRASH BANDICOOTAGREGAR LA MUSICA DE CRASH.

let acciones = [];
let framesCaminar = [];
let fondo;
let logo;
let logoY = 300;
let escalaLogo = 5;
let isla;
let anchoIsla;
let altoIsla;
let musica;

const NOMBRES = ["caminar", "giro", "tile", "wumpa"];
const FRAMES_POR_ACCION = [20, 8, 25, 13];
let letras = [];
const NOMBRES_LETRAS = ["r", "e", "i", "n", "i", "c", "i", "a", "r"];
const ESCALA = 3;
const ESCALAB = 1.6;
const ESCALAT = 2;
const ESCALAW = 3.4;
const ESCALALETRAS = 2.6
const X_GIRO = 300;
const DURACION_GIRO = 40;

let fondoX = 0;      
let fondoVel = 2;   
let velIsla = 0;
let islaY = 450;

let contadorGiro = 0;
let yaGiro = false;
let wumpaVisible = false;
let fondoStop = false;
let wumpaX = 900;
let wumpaY = 420;
let accionActual = 0;
let x = -60; // crash está fuera de la pantalla
let alturaY = 400
const VELOCIDAD = 3;
const VELOCIDAD_GIRO = 6;

function setup() {
  createCanvas(800, 600);
  imageMode(CENTER);

  anchoIsla = isla.width * ESCALAB;
  altoIsla = isla.height * ESCALAB;
}

function draw() {
  background(20);
  
//cielo
  let centroFondo1 = fondoX + 1500;
  let centroFondo2 = centroFondo1 + 3000;
  image(fondo, centroFondo1, 250, 3000, 600);
  image(fondo, centroFondo2, 250, 3000, 600);
  
  if (!fondoStop) {
    fondoX -= fondoVel;
    if (fondoX <= -3000) {
      fondoX = 0;
    }
  }

//isla
  let centroIsla1 = velIsla + anchoIsla / 2;
  let centroIsla2 = centroIsla1 + anchoIsla;
  image(isla, centroIsla1, islaY, anchoIsla, altoIsla);
  image(isla, centroIsla2, islaY, anchoIsla, altoIsla);
  
  if (!fondoStop) {
    velIsla -= 1.7;
    if (velIsla <= -anchoIsla) {
      velIsla = 0;
    }
  }


// Máquina de estados y animación de Crash:
  if (accionActual === 0) {
    
    // cuando llega a 200 deja de avanzar y trata en el lugar
    if (frameCount > 150 && x < 200) {
      x += VELOCIDAD;
    }
    if (frameCount > 250 && alturaY < 520 &&frameCount < 450) {
  alturaY ++
} 
    // aparece la fruta wumpa, se frena el fondo y arranca el giro hacia adelante
    if (fondoStop && !yaGiro) {
      accionActual = 1;
      contadorGiro = 0;
      yaGiro = true;
    }
    // termina de girar y vuelve a avanzar hasta salir de la pantalla...
    if (yaGiro) {
      x += VELOCIDAD;
    }
  } else if (accionActual === 1) {
    contadorGiro++;
    x += VELOCIDAD_GIRO;
      if (alturaY > 400) {
    alturaY -= 3;
  }
    if (contadorGiro >= DURACION_GIRO) {
      accionActual = 0;
    }
  }

  let frames = acciones[accionActual];
  let frame = elegirFrame(frames, 3);
  image(frame, x, alturaY, frame.width * ESCALA, frame.height * ESCALA);

print(frameCount);
print(mouseY);

  // logo animado
  frame = elegirFrameLoop(acciones[2], 7, 12); //primero la acción, luego la velocidad, por ultimo la cantidad de frames que vana  estar repitiendose en loop

  if (frameCount > 130) {
    if (logoY > 150) {
      logoY -= 3;
    }
    if (escalaLogo > ESCALAT) {
      escalaLogo -= 0.05;
    }
  }

  image(frame, 400, logoY, frame.width * escalaLogo, frame.height * escalaLogo);

  // Animación Wumpa
  if (frameCount === 400) {
    wumpaVisible = true;
  }

  if (wumpaVisible) {
    let frameWumpa = elegirFrame(acciones[3], 4);

    // desplazamiento del wumpa
    if (wumpaX > 600) {
      wumpaX -= 4; 
    } else {
      fondoStop = true;
    }

    image(frameWumpa, wumpaX, wumpaY, frameWumpa.width * ESCALAW, frameWumpa.height * ESCALAW);

    // desaparece cuando crash se acerca
if (x >= wumpaX) {
      wumpaVisible = false;
    }
  }
  
//BOTÓN REINICIAR
if (x > 1070) {
  botonReiniciar();
}
}
  // ESO PODRÍA IR AL FINAL EN GRANDE  
  // frame = elegirFrame(acciones[2], 5);
  // image(frame, 400, 150, frame.width * ESCALAT, frame.height * ESCALAT);
