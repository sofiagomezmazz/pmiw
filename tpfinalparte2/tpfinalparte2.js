//esta puede llegar a ser la pestaña juego, tengo que ver boen porqu eno entiendo nada.
// Comisión: 4
// Profesor: Leonardo Garay
// Juego: Indiana Jones y el Santo Grial
// Minijuego: Frogger
// Alumnos: Sofía Gómez y Natanael Grilli

let pantalla = 0;
let imagenes = [];
//variables para los objetos:
let indyJones;
let obstaculo;
let boton;
let grial;
//variables animación
let acciones = [];
const NOMBRES = [];
const FRAMES_POR_ACCION = [];


//cosas que anoté de la clase: let: Juego = new Juego();
//diferencia netre clase y objeto: clase es el molde y el objeto es lo tangible.
function setup() {
  createCanvas(800, 400);
  indyJones = new indianaJones();
  //faltan el resto de los objetos
  textFont("monospace");
  textAlign(CENTER, CENTER);
}

function draw() {
  Juego.dibujar
  
  background(35);
  textFont("monospace");

  if (pantalla === 0) {//pantalla de inicio con las intrucciones
    image(imagenes[0], 0, 0, width, height);
    fill(0, 190);
    noStroke();
    rect(25, 15, 750, 370, 8);
    fill(255, 220, 140);
    textSize(25);
    text("INDIANA JONES", width / 2, 45);
    textSize(18);
    text("Y EL SANTO GRIAL", width / 2, 78);
    fill(255);
    textSize(13);
    text("INSTRUCCIONES", width / 2, 125);
    textSize(12);
    text( "Usá las flechas del teclado para esquivar los obstáculos\n" + "y llegá hasta el Santo Grial.", width/2, 155);

    
    //botón para iniciar el juego
    if (botonClick(280, 290, 240, 55)) {
    fill(255, 220, 140);
    stroke(255);
    strokeWeight(3);
  } else {
    fill(101, 67, 33);
    stroke(255, 220, 140);
    strokeWeight(2);
  }
  rect(280, 290, 240, 55, 5);
noStroke();

  if (botonClick(280, 290, 240, 55)) {
    fill(45);
    textSize(17);
    text("¡COMENZAR!", 400, 317);
  } else {
    fill(255);
    textSize(16);
    text("COMENZAR", 400, 317);
} else {
    //pantalla del minijuego (a desarrollar)
  }
}

function mouseClicked() {
  if (pantalla === 0 && botonClick(botonX, botonY, botonAncho, botonAlto)) {
    pantalla = 1;
  }
}
