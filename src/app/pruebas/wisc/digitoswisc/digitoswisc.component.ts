import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-digitoswisc',
  templateUrl: './digitoswisc.component.html',
  styleUrls: ['./digitoswisc.component.scss']
})
export class DigitoswiscComponent implements OnInit {

  @HostListener('window:keyup', ['$event'])

  estado:String = "instrucciones";

  indexActual:number = null;
  itemActual:number[] = null;

  terminacion:number = 0;

  estimulosDD:number[][] = [[2,9],[4,6],
                             [3,8,6],[6,1,2],
                             [3,4,1,7],[6,1,5,8],
                             [5,2,1,8,6],[8,4,2,3,9],
                             [3,8,9,1,7,4],[7,9,6,4,8,3],
                             [5,1,7,4,2,3,8],[9,8,5,2,1,6,3],
                             [1,8,4,5,9,7,6,3],[2,9,7,6,3,1,5,4],
                             [5,3,8,7,1,2,4,6,9],[4,2,6,9,1,7,8,3,5]];

  estimulosDI:number[][] = [[2,1],[1,3],
                             [3,5],[6,4],
                             [2,5,9],[5,7,4],
                             [8,4,9,3],[7,2,9,6],
                             [4,1,3,5,7],[9,7,8,5,2],
                             [1,6,5,2,9,8],[3,6,7,1,9,4],
                             [8,5,9,2,3,4,6],[4,5,7,9,2,8,1],
                             [6,9,1,7,3,2,5,8],[8,1,7,9,5,4,8,2]];

  respuestasCorrectasDD:String[] = ["2,9","4,6",
                                    "3,8,6","6,1,2",
                                    "3,4,1,7","6,1,5,8",
                                    "5,2,1,8,6","8,4,2,3,9",
                                    "3,8,9,1,7,4","7,9,6,4,8,3",
                                    "5,1,7,4,2,3,8","9,8,5,2,1,6,3",
                                    "1,8,4,5,9,7,6,3","2,9,7,6,3,1,5,4",
                                    "5,3,8,7,1,2,4,6,9","4,2,6,9,1,7,8,3,5"];

  respuestasCorrectasDI:String[] = ["1,2","3,1",
                                    "5,3","4,6",
                                    "9,5,2","4,7,5",
                                    "3,9,4,8","6,9,2,7",
                                    "7,5,3,1,4","2,5,8,7,9",
                                    "8,9,2,5,6,1","4,9,1,7,6,3",
                                    "6,4,3,2,9,5,8","1,8,2,9,7,5,4",
                                    "8,5,2,3,7,1,9,6","2,8,4,5,9,7,1,8"];


  respuestasDD:String[] = ["","","","","","","","","","","","","","","",""];
  respuestasDI:String[] = ["","","","","","","","","","","","","","","",""];

  resultadosDD:number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  resultadosDI:number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  iniciar(){
    if(this.estado==="selectDirecto"){
      this.estado = "directo"

      this.indexActual = 0;
      this.itemActual = this.estimulosDD[this.indexActual];

    }else if(this.estado==="selectInverso"){
      this.estado = "inverso"

      this.indexActual = 0;
      this.itemActual = this.estimulosDI[this.indexActual];

    }
  }

  guardarRespuesta(){
    var element = (<HTMLInputElement>document.getElementById("res"));
    var x = element.value;

    if(this.estado==="directo"){
      this.respuestasDD[this.indexActual] = x;
    }else if(this.estado==="inverso"){
      this.respuestasDI[this.indexActual] = x;
    }

    element.value = "";
  }

  verificarTermino(){
    if((this.indexActual%2) === 0){
      this.terminacion++;
    }else{
      if(this.terminacion === 1){
        this.terminacion++;
      }else{
        this.terminacion = 0;
      }
    }

    
  }

  cambiarpuntuacion(){

    this.guardarRespuesta();

    if(this.estado==="directo"){

      if(this.respuestasDD[this.indexActual] === this.respuestasCorrectasDD[this.indexActual]){
        this.resultadosDD[this.indexActual] = 1;
        this.terminacion = 0;
      }else{

        this.verificarTermino()
        this.resultadosDD[this.indexActual] = 0;
      }

    }else if(this.estado==="inverso"){

      if(this.respuestasDI[this.indexActual] === this.respuestasCorrectasDI[this.indexActual]){
        this.resultadosDI[this.indexActual] = 1;
        this.terminacion = 0;
      }else{

        this.verificarTermino()
        this.resultadosDI[this.indexActual] = 0;
      }

    }

    this.verificarSiguienteItem()

  }

  verificarSiguienteItem(){
    if(this.indexActual < 15){

      if(this.terminacion <2){
        this.indexActual++;

        if(this.estado==="directo"){
          this.itemActual = this.estimulosDD[this.indexActual];
        }else if(this.estado==="inverso"){
          this.itemActual = this.estimulosDI[this.indexActual];
        }
      } else{

        this.terminacion= 0;

        if(this.estado==="directo"){
          this.estado = "selectInverso"
        }else if(this.estado==="inverso"){
          this.estado = "terminado"
        }

    }

  }
}

  getResultado(){
    var total = 0;
    for(var i=0;i<16;i++){
      total = total + this.resultadosDD[i];
      total = total + this.resultadosDI[i];
    }
    return total;
  }

  aRevisar(){
    this.estado = 'revision';
  }

  changeState(){
    this.estado = 'selectDirecto'
  }

  regresarAct(){
    this.estado = 'terminado';
  }

  aceptar(){
    this.router.navigateByUrl('/wisc');
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}

export enum KEY_CODE {
  ENTER_KEY = 13,
}
