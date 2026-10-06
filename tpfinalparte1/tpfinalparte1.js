// VARIABLES PANTALLA Y MÁQUINA DE ESTADOS
let pantalla = 0;
let imagenes = [];
let animacion = [];
let mistextos = [];
let botoncont;
let botoninicio;
let botonreini;
let botonSI;
let noInvestigar;
let siInvestigar;
let paquete;
let abrirpaquete;
let caminoescondido;
let caminoarriba;
let caminopuente;
let correrAN;
let cuerpoAT;
let avion;
let puerta;
let daga;
let mechero;

//VARIABLES DE LA ANIMACIÓN
let acciones = [];
let accionActual = 4;
const NOMBRES = ["ruedas", "agacharse", "bomba", "granada", "caminata", "salto", "quieto", "lazo"];
let ruedasestaticas
const FRAMES_POR_ACCION = [3, 3, 7, 8, 12, 5, 1, 4];
const NUBES_IMG = ["0", "1", "2"]
let nubes = []
let fondo;
let x = 130;
let xR = 0;
let xC = 700;
let alturaX = -100;
let alturaY = 289;
let fondoX = 0;
let fondoVel = 1.3;
let nubeVel = 0.6
let fondoStop = false;
let granadaX = -50;
let bombaX = 328+20;
let bombaY = 400;
let xBoton = 1000;
let SALTO = 0.2
let ANIMACION_BOMBA = false;
let logo;
let anchoLogo = 400;
let velocidadLogo = 0.3;
let botonComenzar = false;
let anchoBoton;
let altoBoton;
let aumento = 1;
let musicaintro;
let explosion;
let latigo;
let avisosonido = true;

function setup() {
  createCanvas(800, 450);
  logo.resize(450, 0); //la imagen es muy pesada y realentiza la animacion
  botoninicio.resize(900, 0); //lo mismo que arrinba...
  anchoBoton = botoninicio.width / 5;
  altoBoton = botoninicio.height / 5;
  textAlign(CENTER, CENTER);
  textFont('Arial');
  textSize(24);
  noStroke();
  console.log("Cantidad de lineas:", mistextos.length);
  console.log("Primera linea:", mistextos[0]);
  console.log("Textos cargados:", mistextos);
}

function draw() {
  //console.log("x " + mouseX + "  | Y " + mouseY)
  background(25);

  if (pantalla === 0) pantallaInicio();
  else if (pantalla === 1) pantalla1();
  else if (pantalla === 2) pantalla2();
  else if (pantalla === 3) pantalla3();
  else if (pantalla === 4) pantalla4();
  else if (pantalla === 5) pantalla5();
  else if (pantalla === 6) pantalla6();
  else if (pantalla === 7) pantalla7();
  else if (pantalla === 8) pantalla8();
  else if (pantalla === 9) pantalla9();
  else if (pantalla === 10) pantalla10();
  else if (pantalla === 11) pantalla11();
  else if (pantalla === 12) pantalla12();
  else if (pantalla === 13) pantalla13();
  else if (pantalla === 14) pantalla14();
  else if (pantalla === 15) pantalla15();
  //IR AÑADIENDO MÁS PANTALLAS A MEDIDA QUE VAYAMOS CONTINUANDO LA HISTORIA!!!
}

// interacción con el mouse para ir pasando de pantalla a pantallas:

function mouseClicked() {
  userStartAudio();
  avisosonido = false;

  if (pantalla === 0 && musicaintro && !musicaintro.isPlaying()) {
    musicaintro.setVolume(0.3);
    musicaintro.loop();
  }

  //LOS DATOS DE CLICKEAR SON (x, y, ancho, alto, pantalladirigida)!!
  if (pantalla === 0) {
    if (botonComenzar) {
      clickear(xBoton, 289-altoBoton, anchoBoton, altoBoton, 1);

      if (pantalla === 1) {
        cursor(ARROW);
        musicaintro.stop();
      }
    }
  }

  // pantalla 1: paquete
  else if (pantalla === 1) {
    clickear(360, 260, 130, 80, 2);
  }

  // pantalla 2: abrir paquete
  else if (pantalla === 2) {
    clickear(180, 230, 320, 150, 3);
  }

  // pantalla 3: decisiones del diario
  else if (pantalla === 3) {
    clickear(410, 120, 214, 187, 4);
    clickear(650, 173, 140, 119, 5);
  }

  // pantalla 4: tres caminos
  else if (pantalla === 4) {
    // camino escondido
    clickear(10, 40, 250, 360, 6);

    // camino de arriba
    clickear(330, 25, 220, 375, 9);

    // puente
    clickear(550, 40, 250, 400, 8);
  }

  // pantalla 5: final malo
  else if (pantalla === 5) {
    clickear(260, 325, 260, 70, 0);
  }

  // camino escondido
  else if (pantalla === 6) {
    // correr
    clickear(520, 320, 120, 110, 7);

    // cuerpo a tierra
    clickear(660, 320, 120, 110, 11);
  }

  // te descubren
  else if (pantalla === 7) {
    clickear(260, 325, 260, 70, 9);
  }

  // te moris x el puente
  else if (pantalla === 8) {
    clickear(260, 325, 260, 70, 0);
  }

  // te llevan dormido
  else if (pantalla === 9) {
    clickear(260, 325, 260, 70, 13);
  }

  // te matan de un disparo
  else if (pantalla === 10) {
    clickear(260, 325, 260, 70, 0);
  }

  //llegas a el avion
  else if (pantalla === 11) {
    // click en el avión
    clickear(220, 70, 540, 280, 12);
  }

  //llegas a la puerta de la cueva
  else if (pantalla === 12) {
    clickear(485, 45, 215, 325, 13);
  }

  // despertas atado junto a tu padre
  else if (pantalla === 13) {

    // Daga
    clickear(75, 290, 75, 120, 15);   // x, y, ancho, alto, pantalla destino

    // Mechero
    clickear(156, 335, 79, 25, 14);   // ajustá el alto si hace falta
  }

  //logras derrotar a los solados
  else if (pantalla === 14) {
  }

  //los soldados descubren q te queres escapar y te matan
  else if (pantalla === 15) {
    clickear(260, 325, 260, 70, 13);
  }
}
