import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-concepto-dibujos-wisc',
  templateUrl: './concepto-dibujos-wisc.component.html',
  styleUrls: ['./concepto-dibujos-wisc.component.css']
})
export class ConceptoDibujosWiscComponent implements OnInit {

  @HostListener('window:keyup', ['$event'])

  keyEvent(event: KeyboardEvent) {
    if(this.estado==='test'){
      if(event.keyCode == KEY_CODE.ZERO_UP ||
         event.keyCode == KEY_CODE.ONE_UP ){
        this.cambiarPrueba(+event.key);
      }
    }
    
  }

  time:boolean = false

  estado:String = 'instruccion';// Esta variable me dice en que estado 

  terminacion:number = 0; //Esta variable me dice cuantos ceros consecutivos tuvo el paciente

  numberItem:number = 1

  firstItem:number

  resultados:number[] = new Array(28).fill(0);

  retornoHecho:boolean = true; // Esta variable me ayuda a controlar el uso de la regla del retorno
  retorno:boolean = false; // Esta variable me ayuda a controlar el uso de la regla del retorno
  countRe:number = 0; //Esta variable me dice cuando se puede salir de la condición de retorno
  flagRe:number = null;//Esta variable me ayuda a decir en que posicion quedo el paciente antes de entrar al retorno 

  interval:any;

  constructor() { }

  ngOnInit() {
  }


  cambiarPrueba(key){
    this.time = false
    if(this.estado==='test'){
      
      if(this.retorno){
        if(1===key){
          this.countRe++;
          if(this.countRe===2){
            this.retorno=false;
            this.retornoHecho=false;
            this.numberItem=this.flagRe
          }
        }
        else {
          this.countRe=0
          this.resultados[this.numberItem-1]=0
        }        
      }
      else{
        if(1===key){
          this.resultados[this.numberItem-1]=1 
          this.terminacion=0
        }
        else{

       
          if((this.numberItem===this.firstItem || this.numberItem===this.firstItem+1) && this.retornoHecho){
            this.retorno=true;
            this.flagRe=this.numberItem;
            this.numberItem=this.firstItem;
          }
          else this.terminacion++;

          if(this.terminacion===6)this.estado='resultados';
        }
        
      }

      if(this.retorno)this.numberItem--;
      else this.numberItem++;
      
      if(this.numberItem===29 || this.numberItem===0)this.estado='resultados'


    }
  }

  imagenInit(item){
    if(item!==0){
      for (let i = 0; i < item; i++) {
        this.resultados[0]=1 
      }
    }
    else{
      this.retornoHecho=false
    }

    this.firstItem=item
    this.numberItem=item
    this.estado='ejemplo'
  }


  next(){
    switch (this.estado) {
      case 'ejemplo A':
        this.estado='ejemplo B'
        
        break;
      case 'ejemplo B':
        this.estado='test'
        
        break;
      case 'resultados':
        this.estado='revision'
        break;
      case 'instruccion':
        this.estado='seleccion'
        break;
      case 'revision':
          this.estado='resultados'
          break;

    }
  }


  getResultado():number {
    var total = 0;
    for(var i=0;i<this.resultados.length;i++){
      total = total + this.resultados[i];
    }
    return total;
  }


  actualizarResultados(){
    
    for(let j = 1;j<this.resultados.length;j++){
      var x = (<HTMLInputElement>document.getElementById(""+j)).value;
      this.resultados[j] = +x;
    }
    
    this.estado = 'resultados';
  }


}

export enum KEY_CODE {
  UP_ARROW = 38,
  DOWN_ARROW = 40,
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
  ONE_UP = 49,
  TWO_UP = 50, 
  THREE_UP = 51, 
  FOUR_UP = 52, 
  FIVE_UP = 53, 
  SIX_UP = 54, 
  SEVEN_UP = 55, 
  EIGHT_UP = 56, 
  NINE_UP = 57, 
  ZERO_UP = 48
}
