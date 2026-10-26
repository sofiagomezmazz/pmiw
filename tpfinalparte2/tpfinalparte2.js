
let indy;
let grial;
let imagenes = [];

function setup() {
  createCanvas(800, 400);
  indy = new Indy();
  grial = new Grial();
}

function draw() {
  image(imagenes[0], 0, 0, 800, 400);
  indy.mover();
  indy.dibujar();
  grial.dibujar();

  if (indy.x > 730) {
    fill(255);
    textSize(24);
    text("¡Encontraste el Grial!", 250, 100);
  }
}

class Indy {
  constructor() {
    this.x = 50;
    this.y = 300;
  }

  mover() {
    if (keyIsDown(RIGHT_ARROW)) this.x += 3;
    if (keyIsDown(LEFT_ARROW)) this.x -= 3;
  }

  dibujar() {
    image(imagenes[1], this.x, this.y, 40, 50);
  }
}

class Grial {
  dibujar() {
    image(imagenes[2], 730, 280, 40, 50);
  }
}
