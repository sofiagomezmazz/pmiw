class Juego {
  constructor() {
    this.estado = "inicio"; // ACÁ DECLARO EL ESTADO INICIAL DEL JUEGO QUE DESPUÉS VA A SERVIR PARA CAMBIAR DE PANTALLAS.
    this.jones = new Jones(width/2-20, 350); //AL CREAR UN NEW JONES SE INVOCA TODO LO QUE ESTÁ DENTRO DEL CONSUTRCTOR DE JONES.
    this.enemigos = [];
    this.generarEnemigos();
    this.botonInicio = new Boton(width/2-100, 260, 200, 45, "EMPEZAR");
    this.botonReiniciar = new Boton(width/2-100, height/2+50, 200, 45, "REINICIAR");
  }

  //los enemigos van dentro de un arreglo y ya están declarados en la pestaña de obtáculos. LA DINÁMICA ES IGUAL A LA DE LA ANIMACIÓN (.PUSH)
  generarEnemigos() {
    this.enemigos = [];
    //ROCA
    this.enemigos.push(new Enemigo(80, 148, "roca", 2.3, 1)); // x, y, tipo, velocidad, dirección, todos los datos que estan dentro de pestaña OSTÁCULOS.
    this.enemigos.push(new Enemigo(420, 148, "roca", 2.3, 1));
    //ESCORPION
    this.enemigos.push(new Enemigo(30, 185, "escorpion", 2.1, 1));
    this.enemigos.push(new Enemigo(380, 185, "escorpion", 2.1, 1));
    //SERPIENTE
    this.enemigos.push(new Enemigo(120, 245, "serpiente", 3.0, -1));
    this.enemigos.push(new Enemigo(480, 245, "serpiente", 3.0, -1));
    //ARAÑA
    this.enemigos.push(new Enemigo(80, 275, "arana", 2.8, -1));
    this.enemigos.push(new Enemigo(420, 275, "arana", 2.8, -1));
    //COCODRILO (q se duerme...)
    this.enemigos.push(new Enemigo(0, 110, "cocodrilo", 1.7, 1));
    this.enemigos.push(new Enemigo(300, 110, "cocodrilo", 1.7, 1));
  }

  actualizar() {
    if (this.estado === "jugando") {
      for (let i = 0; i < this.enemigos.length; i++) {
        this.enemigos[i].mover(); //ASÍ EL MOVIMIENTO DE LOS ENEMIGOS ES GLOBAL
      }
      this.revisarColisiones();
      if (this.jones.y < 40) { //SE LLEGA A LA CIMA = VICTORIA
        this.estado = "ganado";
      }
    }
  }


  revisarColisiones() { //AL RECORRER EL ARREGGLO ESTAMOS REVISANDO SI HUBO COLISIÓN EN CADA ENEMIGO POR SEPARADO
    for (let i = 0; i < this.enemigos.length; i++) {
      if (this.colision(this.jones, this.enemigos[i])) {
        this.estado = "perdido";
      }
    }
  }

  //COMPROBAR SI EFECTIVAMENTE SE COLISIONÓ. DATO a + DATO B
  colision(a, b) {
    return dist(a.x, a.y, b.x, b.y) < 30;
  }


  //CLICKEAR LOS BOTONES
  mousePressed() {
    if (this.estado === "inicio" && this.botonInicio.areaBoton(mouseX, mouseY)) {
      this.estado = "jugando";
    }

    if ((this.estado === "ganado" || this.estado === "perdido") && this.botonReiniciar.areaBoton(mouseX, mouseY)) {
      this.reiniciar();
    }
  }


  //ZONA DE PANTALLAS
  mostrar() {
    image(fondo, 0, 0, width, height);

    if (this.estado === "inicio") {
      this.pantallaInicio();
    }
    else if (this.estado === "jugando") {
      for (let i = 0; i < this.enemigos.length; i++) {
        this.enemigos[i].mostrar();
      }
      this.jones.mostrar();
    }
    else if (this.estado === "ganado") {
      this.pantallaVictoria();
    }
    else if (this.estado === "perdido") {
      this.pantallaDerrota();
    }
  }


  //PANTALLA DE INICIO
pantallaInicio() {
  fill(0, 180);
  rect(0, 0, width, height);
  imageMode(CENTER);
  image(logo, width/2, 145, 300, 120);
  imageMode(CORNER);
  this.botonInicio.mostrar();
}


  //SI GANO
  pantallaVictoria() {
    fill(0, 180);
    rect(0, 0, width, height);
    fill(100, 255, 100);
    textAlign(CENTER, CENTER);
    textFont("monospace");
    textSize(36);
    text("¡GANASTE!", width/2, height/2-20);
    this.botonReiniciar.mostrar();
  }
  //SI PIERDO
  pantallaDerrota() {
    fill(0, 180);
    rect(0, 0, width, height);
    fill(255, 80, 80);
    textAlign(CENTER, CENTER);
    textFont("monospace");
    textSize(36);
    text("¡PERDISTE!", width/2,height/2-20);
    this.botonReiniciar.mostrar();
  }
  //REINICIO
  reiniciar() {
    this.jones.reiniciar(width/2-20, 350);
    this.generarEnemigos();
    this.estado = "jugando";
  }
}
