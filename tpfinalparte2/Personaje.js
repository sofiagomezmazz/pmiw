class Jones {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tam = 40;
    this.direccion = "adelante";
  }

  mover(dx, dy) {
    this.x += dx;
    this.y += dy;
    this.x = constrain(this.x, 0, width-this.tam);
    this.y = constrain(this.y, 0, height-this.tam);

    //GUARDO HACIA DONDE SE MOVIO
    if (dy < 0) {
      this.direccion = "atras";
    }
    else if (dy > 0) {
      this.direccion = "adelante";
    }
    else if (dx < 0) {
      this.direccion = "izquierda";
    }
    else if (dx > 0) {
      this.direccion = "derecha";
    }
  }


elegirFrame(frames) {
  let indice = floor(frameCount/24) % frames.length;
  return frames[indice];
}


mostrar() {
  if (this.direccion === "adelante") {
    let frame = this.elegirFrame(jonesAdelante);
    image(frame, this.x, this.y, this.tam, this.tam);
  }
  else if (this.direccion === "atras") {
    let frame = this.elegirFrame(jonesAtras);
    image(frame, this.x, this.y, this.tam, this.tam);
  }
  else if (this.direccion === "izquierda") {
    let frame = this.elegirFrame(jonesIzquierda);
    image(frame, this.x, this.y, this.tam, this.tam);
  }
  else if (this.direccion === "derecha") {
    let frame = this.elegirFrame(jonesDerecha);
    image(frame, this.x, this.y, this.tam, this.tam);
  }
}

  reiniciar(x, y) {
    this.x = x;
    this.y = y;
    this.direccion = "adelante";
  }
}
