import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matriceswisc',
  templateUrl: './matriceswisc.component.html',
  styleUrls: ['./matriceswisc.component.scss']
})
export class MatriceswiscComponent implements OnInit {

  @HostListener('window:keyup', ['$event'])

  keyEvent(event: KeyboardEvent) {
    if(this.estado==='aplicacion'){
      if(event.keyCode == KEY_CODE.RIGHT_ARROW){
        this.verificarResultado(0);
      }else if(event.keyCode == KEY_CODE.ONE_UP){
        this.verificarResultado(+event.key);
      }else if(event.keyCode == KEY_CODE.TWO_UP){
        this.verificarResultado(+event.key);
      }else if(event.keyCode == KEY_CODE.THREE_UP){
        this.verificarResultado(+event.key);
      }else if(event.keyCode == KEY_CODE.FOUR_UP){
        this.verificarResultado(+event.key);
      }else if(event.keyCode == KEY_CODE.FIVE_UP){
        this.verificarResultado(+event.key);
      }
    }
    
  }

  estado:String = 'instrucciones';// Esta variable me dice en que estado

  estimulos:String[] = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.JPG","8.JPG",
                        "9.JPG","10.JPG","11.JPG","12.JPG","13.JPG","14.JPG","15.JPG","16.JPG","17.JPG","18.JPG",
                        "19.JPG","20.JPG","21.JPG","22.JPG","23.JPG","24.JPG","25.JPG","26.JPG","27.JPG","28.JPG",
                        "29.JPG","30.JPG","31.JPG","32.JPG","33.JPG","34.JPG","35.JPG","36.JPG","37.JPG","38.JPG"];
  respuestas:number[] = [0,0,0,5,1,2,2,3,4,4,1,4,3,2,5,1,4,2,1,4,5,4,3,2,3,3,4,2,1,1,3,2,2,5,4,3,1,5];      
  resultados:number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  estimuloInicial:String = null;
  estimuloActual:String = null;
  indexInicial:number = null;
  indexActual:number = null;

  terminacion:number = 0; //Esta variable me dice cuantos ceros consecutivos tuvo el paciente

  retorno:boolean = false; // Esta variable me ayuda a controlar el uso de la regla del retorno
  countRe:number = 0; //Esta variable me dice cuando se puede salir de la condición de retorno
  flagRe:number = null;//Esta variable me ayuda a decir en que posicion quedo el paciente antes de entrar al retorno 

  interval:any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  imagenInit(num:number){
    this.indexInicial = num
    this.estimuloInicial = this.estimulos[this.indexInicial];

    this.indexActual = 0;
    this.estimuloActual = "assets/estimulos/matrices-wisc/" + this.estimulos[this.indexActual];

    for(var i=num;i>2;i--){
      this.resultados[i]=1
    }

    this.estado = 'aplicacion';
  }

  verificarSiguienteEstimulo(){
    if(this.terminacion < 4 && this.indexActual < 27){ // Verifica que no se haya cumplido la condicion de termino

      if(this.indexActual === 0 || this.indexActual === 1){ //este es el indice del primer ejemplo

        this.indexActual = this.indexActual + 1;
        this.estimuloActual = "assets/estimulos/matrices-wisc/" +  this.estimulos[this.indexActual];

      }else if(this.indexActual === 2){ // Este es el indice del segundo ejemplo por lo que luego de este se envia al estimulo inicial

        this.indexActual = this.indexInicial
        this.estimuloActual = "assets/estimulos/matrices-wisc/" + this.estimuloInicial

      }else if(this.indexInicial===6){ // Si el indice inicial es 6 se compara para verificar el retorno
  
        //Este verificacion me dice si se cumple la condición para retornar y asi devolverse en caso de ser necesario
        if((this.indexActual === 6 || this.indexActual === 7) && this.resultados[this.indexActual]===0){
          this.retorno = true;
          this.flagRe = this.indexActual;
          this.indexActual = 6;
        }
  
        if(!this.retorno){ //En caso de no haber fallado los items 6 0 7 sigue aumentado a partir de ahí
          this.indexActual++;
          this.estimuloActual = "assets/estimulos/matrices-wisc/" + this.estimulos[this.indexActual];
        }else{ //En caso de que halla fallado el item 6 o el 7 vuelve al item 5 y empieza a disminuir desde ahí
          
          if(this.countRe===2){
            this.retorno = false;
            this.indexActual = this.flagRe + 1;
            this.estimuloActual = "assets/estimulos/matrices-wisc/" + this.estimulos[this.indexActual];
          }else{
            this.indexActual--;
            this.estimuloActual = "assets/estimulos/matrices-wisc/" + this.estimulos[this.indexActual];
          }
          
        }
      }else if(this.indexInicial===10){ // Si el indice inicial es 10 se compara para verificar el retorno
  
        //Este verificacion me dice si se cumple la condición para retornar y asi devolverse en caso de ser necesario
        if((this.indexActual === 10 || this.indexActual === 11) && this.resultados[this.indexActual]===0){
          this.retorno = true;
          this.flagRe = this.indexActual;
          this.indexActual = 10;
        }
  
        if(!this.retorno){ //En caso de no haber fallado los items 10 0 11 sigue aumentado a partir de ahí
          this.indexActual++;
          this.estimuloActual = "assets/estimulos/matrices-wisc/" + this.estimulos[this.indexActual];
        }else{ //En caso de que halla fallado el item 10 o el 11 vuelve al item 5 y empieza a disminuir desde ahí
          
          if(this.countRe===2){
            this.retorno = false;
            this.indexActual = this.flagRe + 1;
            this.estimuloActual = "assets/estimulos/matrices-wisc/" + this.estimulos[this.indexActual];
          }else{
            this.indexActual--;
            this.estimuloActual = "assets/estimulos/matrices-wisc/" + this.estimulos[this.indexActual];
          }
          
        }
      }else if(this.indexInicial===13){ // Si el indice inicial es 10 se compara para verificar el retorno
  
        //Este verificacion me dice si se cumple la condición para retornar y asi devolverse en caso de ser necesario
        if((this.indexActual === 13 || this.indexActual === 14) && this.resultados[this.indexActual]===0){
          this.retorno = true;
          this.flagRe = this.indexActual;
          this.indexActual = 13;
        }
  
        if(!this.retorno){ //En caso de no haber fallado los items 10 0 11 sigue aumentado a partir de ahí
          this.indexActual++;
          this.estimuloActual = "assets/estimulos/matrices-wisc/" + this.estimulos[this.indexActual];
        }else{ //En caso de que halla fallado el item 10 o el 11 vuelve al item 5 y empieza a disminuir desde ahí
          
          if(this.countRe===2){
            this.retorno = false;
            this.indexActual = this.flagRe + 1;
            this.estimuloActual = "assets/estimulos/matrices-wisc/" + this.estimulos[this.indexActual];
          }else{
            this.indexActual--;
            this.estimuloActual = "assets/estimulos/matrices-wisc/" + this.estimulos[this.indexActual];
          }
          
        }
      }

    }else{
      this.estado = 'terminado';
    }
  }

  verificarResultado(respuestaDada:number){
    if(respuestaDada === this.respuestas[this.indexActual]){
      this.cambiarPuntuacion(1);
    }else{
      this.cambiarPuntuacion(0);
    }
  }

  cambiarPuntuacion(punt:number){

    if(punt === 0){

      if(this.indexActual === 0 || this.indexActual === 1 || this.indexActual === 2){
        this.resultados[this.indexActual] = punt;
      }else{
        this.resultados[this.indexActual] = punt;
        this.terminacion++
      }

      if(this.countRe>0){
        this.countRe=0;
      }
     
    }else{

      if(this.retorno){
        if(punt===1){
          this.countRe++
        }else{
          if(this.countRe>0){
            this.countRe=0;
          }
        }
      }

      if(this.terminacion > 0){
        this.resultados[this.indexActual] = punt;
        this.terminacion = 0
      }else{
        this.resultados[this.indexActual] = punt;
      }
    }

    this.verificarSiguienteEstimulo()
  }

  getResultado():number {
    var total = 0;
    for(var i=3;i<this.resultados.length;i++){
      total = total + this.resultados[i];
    }
    return total;
  }

  //En caso de que el estado sea revision

  aRevisar(){
    this.estado = 'revision';
  }

  changeState(){
    this.estado = 'seleccion'
  }

  regresarAct(){
    this.estado = 'terminado';
  }

  aceptar(){
    this.router.navigateByUrl('/wisc');
  }

  actualizarResultados(){
    
    for(let j = 3;j<this.resultados.length;j++){
      var x = (<HTMLInputElement>document.getElementById(""+j)).value;
      this.resultados[j] = +x;
    }
    
    this.estado = 'terminado';
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
