class Boton {
  constructor(x, y, w, h, texto) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.texto = texto;
  }

mostrar() {
  if (this.areaBoton(mouseX, mouseY)) {
    fill(120, 80, 40);
  }
  else {
    fill(75, 50, 30);
  }
  stroke(190, 145, 70);
  strokeWeight(3);
  rect(this.x, this.y, this.w, this.h, 8);
  noStroke();
  fill(240, 220, 175);
  textFont("monospace");
  textAlign(CENTER, CENTER);
  textSize(17);
  text(this.texto, this.x+this.w/2, this.y+this.h/2);
}


areaBoton(mx, my) {
  if (dist(mx, my, this.x+this.w/2, this.y+this.h/2) < 30) {
    return true;
  }
  else {
    return false;
  }
}
}
