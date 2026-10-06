//PANTALLA 1 DONOVAN LE ENTREGA EL PAQUETE A INDY
function pantalla1() {
  image(imagenes[1], 0, 0, width, height);
  fill(0, 175);
  rect(55, 25, 690, 70, 6);
  fill(255);
  textSize(16);
  textAlign(CENTER, TOP);
  let diarioTexto = mistextos[0] + "\n" + mistextos[1] + "\n" + mistextos[2];
  text(diarioTexto, width / 2, 32);

  // si el mousse está sobre el paquete
  if (mouseX > 360 && mouseX < 490 && mouseY > 260 && mouseY < 340) {
    image(paquete, 0, 0, width, height);
    fill(0, 200);
    rect(mouseX - 80, mouseY - 45, 160, 32, 6);
    fill(255);
    textSize(13);
    textAlign(CENTER, CENTER);
    text(mistextos[3], mouseX, mouseY - 29);
  }
}


//PANTALLA 2 INDY ABRE EL MISTERIOSO PAQUETE
function pantalla2() {
  image(imagenes[2], 0, 0, width, height);
  fill(0, 175);
  rect(55, 25, 690, 60, 6);
  fill(255);
  textSize(17);
  textAlign(CENTER, TOP);
  text(mistextos[4], width / 2, 45);

  // al pasar el mouse por el paquete:
  if (mouseX > 180 && mouseX < 500 && mouseY > 230 && mouseY < 380) {
    image(abrirpaquete, 0, 0, width, height);
        fill(255, 230, 140);
    textSize(15);
    textAlign(CENTER, BOTTOM);
    text("Abrir el paquete", width / 2, height - 15);fill(255);
    textSize(13);
    textAlign(CENTER, CENTER);
    text(mistextos[5], mouseX, mouseY - 29);
    fill(0, 175);
    rect(55, 25, 690, 60, 6);
    fill(255);
    textSize(17);
    textAlign(CENTER, TOP);
    text(mistextos[4], width / 2, 45);
  }
}


//PANTALLA 3 PLANO DEL DIARIO DE HENRY JONES SOBRE LA MESA
function pantalla3() {
  image(imagenes[3], 0, 0, width, height);
  // TEXTO NO INTERACTIVO DE LA HISTORIA
  fill(0, 175);
  rect(40, 20, 710, 68, 6);
  fill(255);
  textSize(15);
  textAlign(CENTER, TOP);
  let diarioTexto = mistextos[6] + "\n" + mistextos[7] + "\n" + mistextos[8];
  text(diarioTexto, width / 2, 28);
  textSize(18);
  text(mistextos[9], width / 2, 300);
  //HASTA ACÁ EL TEXTO 

  // si el mouse está sobre la imagen de las catacumbas, se iluminan!!
  if (mouseX > 410 && mouseX < 624 && mouseY > 120 && mouseY < 307) {
    image(siInvestigar, 0, 0, width, height);
    // aparece un texto que te explica qué pasa si elegís esa opción (qué significa hacer click ahí). Opción 1: catacumbas, la historia continúa.
    fill(255, 230, 140);
    textSize(15);
    textAlign(CENTER, BOTTOM);
    text("Ir hacia las catacumbas", width / 2, height - 15);
  } 
  // Lo mismo que pasa con las catacumbas, pero con la correa del diario de Henry...
  else if (mouseX > 650 && mouseX < 790 && mouseY > 173 && mouseY < 292) {
    image(noInvestigar, 0, 0, width, height);
    // texto explicativo de la opcion cerrar el diario. Opción 2: no investigar. Primer final!! Los nazis te roban el grial y el nombre de tu padre queda manchado. Todo el mundo cree que participó en el robo.
    fill(255, 230, 140);
    textSize(15);
    textAlign(CENTER, BOTTOM);
    text("Cerrar el diario y no investigar", width / 2, height - 15);
  }
}


//PANTALLA 4 CATACUMBAS: TRES CAMINOS
function pantalla4() {
  image(imagenes[4], 0, 0, width, height);

  // si el mouse pasa por el camino escondido (izquierda)
  if (mouseX > 10 && mouseX < 260 && mouseY > 40 && mouseY < 400) {
    image(caminoescondido, 0, 0, width, height);
    fill(255, 230, 140);
    textSize(15);
    textAlign(CENTER, BOTTOM);
    text(mistextos[14], width / 2, height - 15);
    
  }
  // si el mouse pasa por arriba (centro)
  else if (mouseX > 330 && mouseX < 610 && mouseY > 25 && mouseY < 400) {
    image(caminoarriba, 0, 0, width, height);
    fill(255, 230, 140);
    textSize(15);
    textAlign(CENTER, BOTTOM);
    text(mistextos[13], width / 2, height - 15);
  }
  // si el mouse pasa por el puente (derecha)
  else if (mouseX > 550 && mouseX < 800 && mouseY > 40 && mouseY < 440) {
    image(caminopuente, 0, 0, width, height);
    fill(255, 230, 140);
    textSize(15);
    textAlign(CENTER, BOTTOM);
    text(mistextos[15], width / 2, height - 15);
  }  
  
  // TEXTO NO INTERACTIVO DE LA HISTORIA
  fill(0, 175);
  rect(55, 10, 690, 42, 6);
  fill(255);
  textSize(15);
  textAlign(CENTER, TOP);
  text(mistextos[11] + "\n" + mistextos[12], width / 2, 15);
  //HASTA ACÁ EL TEXTO

}

//PANTALLA 5 PRIMER FINAL. FINAL MALO: NAZIS Y HENRY JONES CULPABLES.
function pantalla5() {
  image(imagenes[5], 0, 0, width, height);

  // Texto explicativo del final
  fill(0, 175);
  rect(55, 25, 690, 60, 6);
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text(mistextos[10], width / 2, 55);

  if (mouseEnBoton(260, 325, 260, 70)) {
    tint(255, 255);
  } else {
    tint(255, 170);
  }
  image(botonreini, 250, 280, 280, 160);
  noTint();
}


//HOLAAAAA NAT A PARTIR DE ACÁ EMPEZÁ CON EL RESTO DE PANTALLAS, POR FAVOR AGREGÁ ARRIBA DE QUÉ ESCENARIO ES CADA PANTALLA ASÍ ES MÁS FÁCIL SABER POR DÓNDE VAMOS EN EL JUEGO

/* para ir de una pantalla a la otra al clickear hay que ponerlo en el "function mouseClicked" (pestaña tpfinal) 
tenes que usar la funcion clickear, poner las coordenadas de esa área y por último el numero de pantalla a la qe te lleva se haces click ahí,
son 5 parametros, los primeros cuatro son de coordenadas (funciona igual que un rect()), el último es de pantalla!!
ALGO ASÍ : 

else if (pantalla === 3) {
clickear(410, 120, 214, 187, 5);
          |    |    |    |   |
          x    y  ancho alto n° pantalla a la que te lleva
          
410: Posición horizontal de la esquina superior izquierda del área cliqueable
120.: Posición vertical de la esquina superior izquierda.
214: Ancho total del área interactiva (cuántos píxeles se extiende hacia la derecha)
187: Alto total del área interactiva (cuántos píxeles se extiende hacia abajo)
} */

// PANTALLA 6 CAMINO ESCONDIDO
function pantalla6() {
  image(imagenes[6], 0, 0, width, height);

  // texto de la historia
  fill(0, 175);
  rect(55, 15, 690, 70, 6);
  fill(255);
  textSize(15);
  textAlign(CENTER, TOP);
  let diarioTexto = mistextos[19] + "\n" + mistextos[20] + "\n" + mistextos[21];
  text(diarioTexto, width / 2, 22);

  // ===== BOTÓN CORRER (abajo derecha - izquierda) =====
  if (mouseEnBoton(520, 320, 120, 110)) {
    tint(255, 255);
  } else {
    tint(255, 170);
  }
  image(correrAN, 520, 320, 120, 110);
  noTint();

  //BOTÓN CUERPO A TIERRA 
  if (mouseEnBoton(660, 320, 120, 110)) {
    tint(255, 255);
  } else {
    tint(255, 170);
  }
  image(cuerpoAT, 660, 320, 120, 110);
  noTint();
}

// PANTALLA 7 TE DESCUBREN
function pantalla7() {
  image(imagenes[7], 0, 0, width, height);

if (mouseEnBoton(260, 325, 260, 70)) {
    tint(255, 255);
  } else {
    tint(255, 170);
  }
  image(botoncont, 250, 280, 280, 160);
  noTint();
  fill(0, 175);
  rect(55, 20, 690, 78, 6);
  fill(255);
  textSize(15);
  textAlign(CENTER, TOP);
  let diarioTexto = mistextos[16] + "\n" + mistextos[17] + "\n" + mistextos[18];
  text(diarioTexto, width / 2, 32);
}

// PANTALLA 8 TE CAÉS DEL PUENTE (FINAL MALO)
function pantalla8() {
  image(imagenes[8], 0, 0, width, height);

  if (mouseEnBoton(260, 325, 260, 70)) {
    tint(255, 255);
  } else {
    tint(255, 170);
  }
  image(botonreini, 250, 280, 280, 160);
  noTint();
}
//SECUESTRO
function pantalla9() {
  image(imagenes[9], 0, 0, width, height);
if (mouseEnBoton(260, 325, 260, 70)) {
    tint(255, 255);
  } else {
    tint(255, 170);
  }
  image(botoncont, 250, 280, 280, 160);
  noTint();

}


//Te disparan 
function pantalla10() {
image(imagenes[10], 0, 0, width, height);
if (mouseEnBoton(260, 325, 260, 70)) {
    tint(255, 255);
  } else {
    tint(255, 170);
  }
  image(botonreini, 250, 280, 280, 160);
  noTint();

}
function pantalla11() {
  image(imagenes[11], 0, 0, width, height);

  // Área del avión (ajustá estos números si hace falta)
  // x, y, ancho, alto del avión
  if (mouseX > 220 && mouseX < 760 && mouseY > 70 && mouseY < 350) {
    // cuando el mouse está encima → mostramos el avión con brillo
    image(avion, 80, 15, 700, 390);
    
    // texto opcional abajo
    fill(255, 230, 140);
    textSize(16);
    textAlign(CENTER, BOTTOM);
    text("Subirse al avión", width / 2, height - 15);
  }
}



function pantalla12() {
  image(imagenes[12], 0, 0, width, height);


if (mouseX > 485 && mouseX < 700 && mouseY > 45 && mouseY < 370) {
  // Mouse encima de la entrada → mostramos la puerta con brillo
  image(puerta, 485, 44, 240, 266);
    
    // texto opcional abajo
    fill(255, 230, 140);
    textSize(16);
    textAlign(CENTER, BOTTOM);
    text("Entrar a la cueva", width / 2, height - 15);
  }

}

function pantalla13() {
  image(imagenes[13], 0, 0, width, height);
  
  
   if (mouseX > 75 && mouseX < 150 && mouseY > 290 && mouseY < 410) {
  // daga
  image(daga, 95, 335, 80, 75);
    
    // texto opcional abajo
    fill(255, 230, 140);
    textSize(16);
    textAlign(CENTER, BOTTOM);
    text("Intentar escapar con la daga", width / 2, height - 15);
    }
 else if (mouseX > 156 && mouseX < 235 && mouseY > 335 && mouseY < 360) {
  //mechero
 image(mechero, 132, 325, 55, 55);
    
    // texto opcional abajo
    fill(255, 230, 140);
    textSize(16);
    textAlign(CENTER, BOTTOM);
    text("intentar escapar con el mechero", width / 2, height - 15);
   }
 
}


function pantalla14() {
image(imagenes[14], 0, 0, width, height);


}

function pantalla15() {
image(imagenes[15], 0, 0, width, height);

 if (mouseEnBoton(260, 325, 260, 70)) {
    tint(255, 255);
  } else {
    tint(255, 170);
  }
  image(botonreini, 250, 280, 280, 160);
  noTint();

}


//function pantalla16() {
//}
