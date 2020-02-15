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
    this.startTimer(1000);
  }

  //Timer: En caso de que la imagen pase por que se acabo el tiempo se dará una calificación de 0 al item
  startTimer(time:number) {
    clearInterval(this.interval);
    if(this.cronometro!=0){
      this.interval = setInterval(() => {
        
        if(this.cronometro>1) this.cronometro--;
        else {
          this.time=true
          this.cronometro=0
          this.activo='reiniciar'
        }
      },time)
    }
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

  calcularResultado(){
    this.puntuacion=this.test1[0]-this.test1[1]
    if(this.puntuacion<0)this.puntuacion=0

    if(this.test2[0]-this.test2[1]>0)this.puntuacion+=this.test2[0]-this.test2[1]
    
    console.log(this.puntuacion)
    console.log(this.test1)

    this.estado= 'resultados'
  }
}
