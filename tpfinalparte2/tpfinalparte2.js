//esta puede llegar a ser la pestaña juego, tengo que ver boen porqu eno entiendo nada.
// Comisión: 4
// Profesor: Leonardo Garay
// Juego: Indiana Jones y el Santo Grial
// Minijuego: Frogger
// Alumnos: Sofía Gómez y Natanael Grilli

//primero se crea una variable de juego NO OLVIDAR!!!
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


function setup() {
  createCanvas(800, 400);
  juego = new Juego();
}

function draw() {
  juego.actualizar();
  juego.mostrar();
}

function keyPressed() { //CON KEYPRESSED EL MOVIMIENTO ES DE A 1, O SEA, PARA AVANZAR SE DEBE PRESIONAR MÚLTIPLES VECES...
  //EMPEZAR EL JUEGO
  if (juego.estado === "inicio" && keyCode === ENTER) {
    juego.estado = "jugando";
  }
  //REINICIAR CUANDO EL USUARIO GANA O PIERDE
  if (juego.estado === "ganado" || juego.estado === "perdido") {
    if (key === 'r' || key === 'R') {
      juego.reiniciar();
    }
  }
  //MOVIMIENTO DE JONES
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
