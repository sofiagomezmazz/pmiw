
class Enemigo {
  constructor(x, y, tipo, velocidad, direccion) {
    this.x = x;
    this.y = y;
    this.tipo = tipo;
    this.vel = velocidad; // lo abrevié
    this.dir = direccion;

    //TIPOS DE ENEMIGOS
    if (tipo === "roca") {
      this.frames = rocas;
      this.w = 42;
      this.h = 42;
    }
    else if (tipo === "arana") {
      this.frames = aranas;
      this.w = 55;
      this.h = 42;
    }
    else if (tipo === "escorpion") {
      this.frames = escorpiones;
      this.w = 58;
      this.h = 42;
    }
    else if (tipo === "serpiente") {
      this.frames = serpientes;
      this.w = 70;
      this.h = 35;
    }
    else if (tipo === "cocodrilo") {
      this.frames = cocodrilos;
      this.w = 85;
      this.h = 40;
    }
  }

  mover() {
    this.x += this.vel*this.dir;//CAMBIO LA DATA DE X EN BASE A LOS PARÁMETROS QUE YO PUSE AL CREAR LA CLASE ENEMIGO.

    if (this.dir === 1 && this.x > width) {
      this.x = -this.w; //EL ENEMIGO VUELVE AL INICIO, ENTRA DESDE FUERA DE LA PANTALLA
    }
    if (this.dir === -1 && this.x < -this.w) {
      this.x = width;
    }
  }

  elegirFrame() {
    let indice = floor(frameCount / 12) % this.frames.length;
    return this.frames[indice];
  }

  mostrar() {
    let frame = this.elegirFrame();

    //CON ESTO ME PERMITO DAR VUELTA LAS IMÁGENES EN CASO DE QUE EL ENEMIGO ESTÉ YENDO PARA EL OTRO LADO
    if (this.dir === -1) {
      push();
      translate(this.x+this.w, this.y);
      scale(-1, 1); //ACÁ DOY VUELTA LA IMAGEN
      image(frame, 0, 0, this.w, this.h);
      pop();
    }
    else {
      image(frame, this.x, this.y, this.w, this.h);
    }
  }
}
