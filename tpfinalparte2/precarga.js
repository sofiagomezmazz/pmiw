
function preload() {
  fondo = loadImage("data/fondo_cueva.png");
  jonesAdelante = cargarAccion("jones_adelante", 4);
  jonesAtras = cargarAccion("jones_atras", 4);
  jonesIzquierda = cargarAccion("jones_izquierda", 4);
  jonesDerecha = cargarAccion("jones_derecha", 4);
  rocas = cargarAccion("roca", 6);
  aranas = cargarAccion("arana", 6);
  escorpiones = cargarAccion("escorpion", 6);
  serpientes = cargarAccion("serpiente", 6);
  cocodrilos = cargarAccion("cocodrilo", 4);
}

function cargarAccion(nombre, cantidad) {
  let frames = [];
  for (let i = 0; i < cantidad; i++) {
    frames.push(loadImage("data/" + nombre + i + ".png"));
  }
  return frames;
}
