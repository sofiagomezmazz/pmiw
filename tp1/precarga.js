function preload() { 
  fondo = loadImage("data/fondo.png");
  // logo = loadImage("data/logo.PNG");
  isla = loadImage("data/isle2.png");
  
for (let i = 0; i < NOMBRES_LETRAS.length; i++) {
  letras.push(loadImage("data/" + NOMBRES_LETRAS[i] + ".png"));
}

  for (let a = 0; a < NOMBRES.length; a++) {
    acciones.push(cargarAccion(NOMBRES[a], FRAMES_POR_ACCION[a]));
  } 
}
