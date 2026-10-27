class Juego{
  this.personaje;
  this.obstaculo;;
  
  constructor(){
    this.personaje = new indianaJones();
    this.obstaculos = [];
    
    this.agregarObstaculo(){
    }
    
    agregarobstaculo(){
      
    }
    
    dibujarPersonaje(){
      this.personaje.dibujar();
      this.dibujarPersonaje();
    }
    
    
    dibujarObstaculo(){
      for(let i=0; i<10;i++){
        this.obstaculo[i].dibujar();
    }
  }
