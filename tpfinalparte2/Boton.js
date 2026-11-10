class Boton {
  constructor(x, y, w, h, texto) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.texto = texto;
  }
  mostrar() {
    fill(50);
    rect(this.x, this.y, this.w, this.h, 8);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(16);
    text(this.texto, this.x+this.w/2, this.y+this.h/2);
  }

clickeado(mx, my) {
  if (mx > this.x && mx < this.x + this.w && my > this.y && my < this.y + this.h) {
    return true;
  } else {
    return false;
  }
}
}
