import { Component, OnInit, HostListener, ChangeDetectorRef   } from '@angular/core';

@Component({
  selector: 'app-letras-numeros-wisc',
  templateUrl: './letras-numeros-wisc.component.html',
  styleUrls: ['./letras-numeros-wisc.component.css']
})
export class LetrasNumerosWiscComponent implements OnInit {

  @HostListener('window:keyup', ['$event'])

  keyEvent(event: KeyboardEvent) {
    if(this.estado==='test'){
      if(event.keyCode == KEY_CODE.ZERO_UP){
        this.cambiarPrueba(+event.key);
      }else if(event.keyCode == KEY_CODE.ONE_UP){
        this.cambiarPrueba(+event.key);
      }
    }
    
  }


  itemNumber:number = 0;

  intento:number = 0;

  fallo:number = 0;

  estado:string = 'inicio';

  items=[];

  respuesta=[];

  respuestas=[]

  resultados:number[] = new Array(30).fill(0);
  
  constructor(private cdRef:ChangeDetectorRef) {
    
    this.items.push([['A','3'],['B','1'],['2','C']])

    this.items.push([['C','4'],['5','E'],['D','3']])
 
    this.items.push([['B','1','2'],['1','3','C'],['2','A','3']])

    this.items.push([['D','2','9'],['R','5','B'],['H','9','K']])

    this.items.push([['3','E','2'],['9','J','4'],['B','5','F']])

    this.items.push([['1','C','3','J'],['5','A','2','B'],['D','8','M','1']])

    this.items.push([['1','B','3','G','7'],['9','V','1','T','7'],['P','3','J','1','M']])

    this.items.push([['1','D','4','E','9','G'],['H','3','B','4','F','8'],['7','Q','6','M','3','Z']])

    this.items.push([['S','3','K','4','Y','1','G'],['7','S','9','K','1','T','6'],['L','2','J','6','Q','3','G']])

    this.items.push([['4','B','8','R','1','M','7','H'],['J','2','U','8','A','5','C','4'],['6','L','1','Z','5','H','2','W']])
   
     
    this.respuesta.push([['A','3'],['B','1'],['2','C']])

    this.respuesta.push([['C','4'],['5','E'],['D','3']])
 
    this.respuesta.push([['B','1','2'],['1','3','C'],['2','A','3']])

    this.respuesta.push([['D','2','9'],['R','5','B'],['H','9','K']])

    this.respuesta.push([['3','E','2'],['9','J','4'],['B','5','F']])

    this.respuesta.push([['1','C','3','J'],['5','A','2','B'],['D','8','M','1']])

    this.respuesta.push([['1','B','3','G','7'],['9','V','1','T','7'],['P','3','J','1','M']])

    this.respuesta.push([['1','D','4','E','9','G'],['H','3','B','4','F','8'],['7','Q','6','M','3','Z']])

    this.respuesta.push([['S','3','K','4','Y','1','G'],['7','S','9','K','1','T','6'],['L','2','J','6','Q','3','G']])

    this.respuesta.push([['4','B','8','R','1','M','7','H'],['J','2','U','8','A','5','C','4'],['6','L','1','Z','5','H','2','W']])
  
    
    this.respuestas.push([['A','3'],['B','1'],['C','2']])

    this.respuestas.push([['C','4'],['E','5'],['D','3']])
 
    this.respuestas.push([['B','1','2'],['C','1','3'],['A','2','3']])

    this.respuestas.push([['D','2','9'],['B','R','5'],['H','K','9']])

    this.respuestas.push([['E','2','3'],['J','4','9'],['B','F','5']])

    this.respuestas.push([['C','J','1','3'],['A','B','2','5'],['D','M','1','8']])

    this.respuestas.push([['B','G','1','3','7'],['T','V','1','7','9'],['J','M','P','1','3']])

    this.respuestas.push([['D','E','G','1','4','9'],['B','F','H','3','4','8'],['M','Q','Z','3','6','7']])

    this.respuestas.push([['G','K','S','Y','1','3','4'],['K','S','T','1','6','7','9'],['G','J','L','Q','2','3','6']])

    this.respuestas.push([['B','H','M','R','1','4','7','8'],['A','C','J','U','2','4','5','8'],['H','L','W','Z','1','2','5','6']])
    

  }


  cambiarPrueba(key){

    if(this.estado==='test' && this.itemNumber<10){
      
      if(key===1 || key===0){
        this.resultados[this.itemNumber*3+this.intento]=key

        if(this.intento===2){
          if(this.itemNumber+1===10)this.estado='resultados'
          else this.itemNumber++;
          this.intento=0;
        }
        else this.intento++;      
        
        if(key===0 ){
          this.fallo++;
          if(this.fallo===3)this.estado='resultados'
        }
        else if(key===1)this.fallo=0;
      }
    }
    else if(this.itemNumber===10)this.estado='resultados'
    

    
    this.cdRef.detectChanges();

  }


  getResultado():number {
    var total = 0;
    for(var i=0;i<this.resultados.length;i++){
      total = total + this.resultados[i];
    }
    
    return total;
  }

  ngOnInit() {
  }

  startTest(){

    this.estado='test'
  }

  aRevisar(){
    this.estado = 'revision';
  }

  regresarAct(){
    this.estado = 'resultados';
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