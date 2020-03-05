import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busqueda-simboloswisc',
  templateUrl: './busqueda-simboloswisc.component.html',
  styleUrls: ['./busqueda-simboloswisc.component.scss']
})
export class BusquedaSimboloswiscComponent implements OnInit {

  estado:String = 'aplicacion';// Esta variable me dice en que estado

  pag1C:number = null;
  pag1I:number = null;

  pag2C:number = null;
  pag2I:number = null;

  pag3C:number = null;
  pag3I:number = null;

  pag4C:number = null;
  pag4I:number = null;

  pag5C:number = null;
  pag5I:number = null;

  pag6C:number = null;
  pag6I:number = null;

  pag7C:number = null;
  pag7I:number = null;

  resultado:number = null;

  constructor() { }

  ngOnInit() {
  }

  validarRespuestas(){
    if(this.pag1C==null){ this.pag1C = 0 }
    if(this.pag1I==null){ this.pag1I = 0 }

    if(this.pag2C==null){ this.pag2C = 0 }
    if(this.pag2I==null){ this.pag2I = 0 }

    if(this.pag3C==null){ this.pag3C = 0 }
    if(this.pag3I==null){ this.pag3I = 0 }

    if(this.pag4C==null){ this.pag4C = 0 }
    if(this.pag4I==null){ this.pag4I = 0 }

    if(this.pag5C==null){ this.pag5C = 0 }
    if(this.pag5I==null){ this.pag5I = 0 }

    if(this.pag6C==null){ this.pag6C = 0 }
    if(this.pag6I==null){ this.pag6I = 0 }

    if(this.pag7C==null){ this.pag7C = 0 }
    if(this.pag7I==null){ this.pag7I = 0 }
  }

  calcularResultado(){
    this.validarRespuestas()
    var correctas = this.pag1C + this.pag2C + this.pag3C + this.pag4C + this.pag5C + this.pag6C + this.pag7C
    var inCorrectas = this.pag1I + this.pag2I + this.pag3I + this.pag4I + this.pag5I + this.pag6I + this.pag7I
    
    this.resultado = correctas-inCorrectas

    if(this.resultado<0){
      this.resultado = 0
    }

    this.estado = "terminado"
  }

  aRevisar(){
    this.estado = 'revision';
  }

  regresarAct(){
    this.estado = 'terminado';
  }

  getResultado():number {
    return this.resultado;
  }

}
