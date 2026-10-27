function preload() {
  for (let i = 0; i < 3; i++) {
    imagenes[i] = loadImage("data/img" + i + ".png");
  }
  
  for (let a = 0; a < NOMBRES.length; a++) {
    acciones.push(cargarAccion(NOMBRES[a], FRAMES_POR_ACCION[a]));
  }  
}
