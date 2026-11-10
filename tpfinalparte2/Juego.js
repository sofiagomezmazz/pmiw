class Juego {
  constructor() {
    this.estado = "inicio";
    this.jones = new Jones(width/2 - 20, 350); //JONES SIEMPRE MITAD DE LA PANTALLA ABAJO! SE MUEVE DE FORMA VERTICAL, TIENE QUE LLEGAR HASTA ARRIBA
    this.enemigos = [];
    this.generarEnemigos();
  }
  //los enemigos van dentro de un arreglo y ya están declarados en la pestaña de obtáculos. LA DINÁMICA ES IGUAL A LA DE LA ANIMACIÓN FOR USAR .PUSH
  generarEnemigos() {
    this.enemigos = [];
    //ROCA
    this.enemigos.push(new Enemigo(80, 148, "roca", 2.3, 1));
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
    //COCODRILO q se duerme...
    this.enemigos.push(new Enemigo(0, 110, "cocodrilo", 1.7, 1));
    this.enemigos.push(new Enemigo(300, 110, "cocodrilo", 1.7, 1));
  }

  actualizar() {
    if (this.estado === "jugando") {
      for (let i = 0; i < this.enemigos.length; i++) {
        this.enemigos[i].mover(); // el movimiento de los enemigos ES GLOBAL
      }
      this.revisarColisiones();
      if (this.jones.y < 40) {
        this.estado = "ganado";
      }
    }
  }
  
  
//DAMOS INICIO AL ÁREA DE COLISIONESSSS 
revisarColisiones() {
  for (let i = 0; i < this.enemigos.length; i++) {
      if (this.colision(this.jones, this.enemigos[i])) {
        this.estado = "perdido";
      }
    }
  }
//COMPROBAR SI EFECTIVAMENTE SE COLISIONÓ
colision(a, b) {
  return dist(a.x, a.y, b.x, b.y) < 30;
}

//ZONA DE PANTALLAS
  mostrar() {
    image(fondo, 0, 0, width, height);
    if (this.estado === "inicio") {
      this.pantallaInicio();
    }
    else if (this.estado === "jugando") {
      //
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
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(16);
    text("PRESIONA "ENTER" PARA EMPEZAR", width/2, 280);
  }


//SI GANO
  pantallaVictoria() {
    fill(0, 180);
    rect(0, 0, width, height);
    fill(100, 255, 100);
    textAlign(CENTER, CENTER);
    textSize(36);
    text("ganaste", width/2, height/2-20);
    fill(255);
    textSize(16);
    text("PRESIONA "R" PARA REINICIAR", width/2, height/2+30);
  }
//SI PIERDO
  pantallaDerrota() {
    fill(0, 180);
    rect(0, 0, width, height);
    fill(255, 80, 80);
    textAlign(CENTER, CENTER);
    textSize(36);
    text("perdiste", width/2,height/2-20);

    fill(255);
    textSize(16);
    text("PRESIONA "R" PARA REINICIAR", width/2,height/2+30);
  }
//REINICIO
  reiniciar() {
    this.jones.reiniciar(width/2-20, 350);
    this.generarEnemigos();
    this.estado = "jugando";
  }
}
