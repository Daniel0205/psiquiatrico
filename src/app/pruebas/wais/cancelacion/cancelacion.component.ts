import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cancelacion',
  templateUrl: './cancelacion.component.html',
  styleUrls: ['./cancelacion.component.scss']
})
export class CancelacionComponent implements OnInit {

  cronometro:number=45

  estado:String = 'instruccion';// Esta variable me dice en que estado 

  test1:number[] =  [0,0]

  test2:number[] =  [0,0]

  puntuacion:number=0;

  activo:string='iniciar';

  pruebas:number=0;
     
  time:boolean = false

  interval:any;

  constructor() { }

  ngOnInit() {
  }

  iniCron(){
    this.activo='detener'
    this.cronometro=44
    this.startTimer(1000);
  }

  //Timer: En caso de que la imagen pase por que se acabo el tiempo se dará una calificación de 0 al item
  startTimer(time:number) {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      if(this.cronometro!==0) this.cronometro--;
      else this.time=true
    },time)
  }

  stopCron(){
    clearInterval(this.interval);
    this.activo='reiniciar';
    this.time=false;
  }


  restart(){
    clearInterval(this.interval);
    this.activo='iniciar';
    this.cronometro=45
    this.time=false;
  }

  finTest(){
    
    if(this.pruebas+1===2)this.estado='resultados'
    else this.estado='test'

    this.actualizarResultados();

    this.pruebas++;



  }

  actualizarResultados(){
    
    var error = (<HTMLInputElement>document.getElementById("error")).value;
    var correcto = (<HTMLInputElement>document.getElementById("correcto")).value;

    var diferencia= parseInt(correcto)-parseInt(error)

    if(diferencia>=0)this.puntuacion+=diferencia;
    
  }
}
