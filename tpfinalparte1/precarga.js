function preload() {
  //CARGA DE IMAGENES!!
  for (let i = 0; i <= 15; i++) {
    imagenes.push(loadImage("data/pantalla" + i + ".png"));
  }

  //CARGA DE TEXOS!! Funciona como un arreglo de imagenes, para invocar jahay que escribir: 
  //text(mistextos[numero de linea que quiero llamar], width / 2, 35, 650, 60); HAY QUE IR AGREGANDO LOS TEXTOS AL ARCHIVO "dialogos.txt" SEPARAR CADA ORACIÓN CON UN ENTER.
  mistextos = loadStrings("data/dialogos.txt");

  //imagenes otras
  botoncont = loadImage("data/boton1.png");
  botoninicio = loadImage("data/comenzar.png");
  botonreini = loadImage("data/botonreini.png");
  botonSI = loadImage("data/botonSI.png");
  noInvestigar =loadImage("data/opcion1.png");
  siInvestigar =loadImage("data/opcion2.png");
  paquete =loadImage("data/paquete.png");
  abrirpaquete=loadImage("data/abrirpaquete.png");
  caminoescondido = loadImage("data/camino.png");
  caminopuente = loadImage("data/puente.png");
  caminoarriba = loadImage("data/arriba.png");
  fondo = loadImage("data/fondotren.png");
  ruedasestaticas = loadImage ("data/ruedas2.png");
  logo = loadImage("data/logo.png");
  cuerpoAT = loadImage("data/cuerpoAT.png");
  correrAN = loadImage("data/correrAN.png");
  avion = loadImage("data/avion1.png");
  puerta = loadImage("data/puerta1.png");
  daga = loadImage("data/daga1.png");
  mechero = loadImage("data/mechero1.png");
  
  //sonidos
  musicaintro = loadSound("data/screen.mp3");
  explosion = loadSound("data/explosion.mp3");
  latigo = loadSound("data/latigo.mp3");
  
  for (let a = 0; a < NOMBRES.length; a++) {
    acciones.push(cargarAccion(NOMBRES[a], FRAMES_POR_ACCION[a]));
  }

  for (let i = 0; i < NUBES_IMG.length; i++) {
    nubes.push(loadImage("data/nube" + NUBES_IMG[i] + ".png"));
  }


}
