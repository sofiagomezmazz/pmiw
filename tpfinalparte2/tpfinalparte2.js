// Comisión: 4
// Profesor: Leonardo Garay
// Juego: Indiana Jones y el Santo Grial
// Minijuego: Frogger
// Alumnos: Sofía Gómez y Natanael Grilli
// Video: 


let juego;
//variables para JONES
let jonesAdelante = [];
let jonesAtras = [];
let jonesIzquierda = [];
let jonesDerecha = [];
//variables de ENEMIGOS
let rocas = [];
let aranas = [];
let escorpiones = [];
let serpientes = [];
let cocodrilos = [];
//IMÁGENES VARIAS
let fondo;
let logo;

function setup() {
  createCanvas(800, 400);
  juego = new Juego();
}


function draw() {
  juego.actualizar();
  juego.mostrar();
}


//MOVIMIENTO DE JONES
function keyPressed() {
  if (juego.estado === "jugando") {
    if (keyCode === UP_ARROW) {
      juego.jones.mover(0, -40);
    } 
    else if (keyCode === DOWN_ARROW) {
      juego.jones.mover(0, 40);
    } 
    else if (keyCode === LEFT_ARROW) {
      juego.jones.mover(-40, 0);
    } 
    else if (keyCode === RIGHT_ARROW) {
      juego.jones.mover(40, 0);
    }
  }
}


//CLICKEAR LOS BOTONES
function mousePressed() {
  juego.mousePressed();
}
