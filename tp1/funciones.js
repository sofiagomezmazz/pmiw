function cargarAccion(nombre, cantidad) {
  let frames = [];
  for (let i = 0; i < cantidad; i++) {
    frames.push(loadImage("data/" + nombre + i + ".png"));
  }
  return frames;
  
}

function elegirFrameLoop(frames, velocidadAnimacion, LoopFrames) {
  let frameTotal = floor(frameCount / velocidadAnimacion);
  let total = frames.length;
  let inicioLoop = total - LoopFrames; 

  if (frameTotal < total) {
    return frames[frameTotal];
  } else {
    let Loop = inicioLoop + ((frameTotal - total) % LoopFrames);
    return frames[Loop];
  }
}
function botonReiniciar(alturax, alturaY) {
let inicioX = 280;
let espacio = 30; 
let posY = 260;
//agregar un if moouseX y mouseY para generar un area de interacción + sumarle la acción de keypressed :)
noStroke();
fill(178, 132, 83, 110);
rect(250, 235, 300, 50, 8);
tint(255, 127)
for (let i = 0; i < letras.length; i++) {
  image(letras[i], inicioX + (i * espacio), posY, letras[i].width * ESCALALETRAS, letras[i].height * ESCALALETRAS);
}
noTint();
}
