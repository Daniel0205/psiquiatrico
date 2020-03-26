import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registroswisc',
  templateUrl: './registroswisc.component.html',
  styleUrls: ['./registroswisc.component.css']
})
export class RegistroswiscComponent implements OnInit {


  cronometro:number=0

  tiempo:number=0

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
    if(this.cronometro!=45){
      this.interval = setInterval(() => {
        
        if(this.cronometro<45) this.cronometro++;
        else {
          this.time=true
          this.cronometro=45
          this.activo='reiniciar'
          this.tiempo=45
        }
      },time)
    }
  }

  stopCron(){
    clearInterval(this.interval);
    this.activo='reiniciar';
    this.time=false;
    this.tiempo=this.cronometro
  }

  getBonus(){
    if(this.tiempo<=44 && this.tiempo>=40)return 1
    else if(this.tiempo<=39 && this.tiempo>=35)return 2
    else if(this.tiempo<=34 && this.tiempo>=30)return 3
    else if(this.tiempo<=29 && this.tiempo>=0)return 4
    else return 0
  }


  restart(){
    clearInterval(this.interval);
    this.activo='iniciar';
    this.cronometro=0
    this.time=false;
  }

  calcularResultado(){
    this.puntuacion=this.test1[0]-this.test1[1]
    if(this.puntuacion<0)this.puntuacion=0

    if(this.test2[0]-this.test2[1]>0)this.puntuacion+=this.test2[0]-this.test2[1]

    this.puntuacion+=this.getBonus()

    this.estado= 'resultados'
  }
}
