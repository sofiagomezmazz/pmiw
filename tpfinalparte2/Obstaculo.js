class Enemigo {
  constructor(x, y, tipo, velocidad, direccion) {
    this.x = x;
    this.y = y;
    this.tipo = tipo;
    this.vel = velocidad;
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
    //CAMBIA LA POSICIÓN SEGUN LA VELOCIDAD Y DIRECCIÓN
    this.x += this.vel * this.dir;
    //SI SALE DE LA PANTALLA VUELVE A APARECER DEL OTRO LADO
    if (this.dir === 1 && this.x > width) {
      this.x = -this.w;
    }
    if (this.dir === -1 && this.x < -this.w) {
      this.x = width;
    }
  }
  mostrar() {
    if (this.dir === -1) {
      push();
      translate(this.x + this.w, this.y);
      scale(-1, 1);
      image(this.frames[0], 0, 0, this.w, this.h);
      pop();
    }
    else {
      image(this.frames[0], this.x, this.y, this.w, this.h);
    }
  }
}
