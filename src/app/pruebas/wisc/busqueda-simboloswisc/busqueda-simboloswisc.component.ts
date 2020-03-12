import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-busqueda-simboloswisc',
  templateUrl: './busqueda-simboloswisc.component.html',
  styleUrls: ['./busqueda-simboloswisc.component.scss']
})
export class BusquedaSimboloswiscComponent implements OnInit {

  estado:String = 'instruccion';// Esta variable me dice en que estado
  busquedaSimbolos:String = '';// A o B

  pag4C:number = null;
  pag4I:number = null;

  pag5C:number = null;
  pag5I:number = null;

  pag6C:number = null;
  pag6I:number = null;

  pag8C:number = null;
  pag8I:number = null;

  pag9C:number = null;
  pag9I:number = null;

  pag10C:number = null;
  pag10I:number = null;

  pag11C:number = null;
  pag11I:number = null;

  resultado:number = null;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  testInit(busqSimb:String){
    this.busquedaSimbolos = busqSimb;
    if(this.busquedaSimbolos=='A'){
      this.estado = 'registro1';
    }else if(this.busquedaSimbolos=='B'){
      this.estado = 'registro2';
    }    
  }

  validarRespuestas(){
    if(this.busquedaSimbolos=='A'){
      if(this.pag4C==null){ this.pag4C = 0 }
      if(this.pag4I==null){ this.pag4I = 0 }

      if(this.pag5C==null){ this.pag5C = 0 }
      if(this.pag5I==null){ this.pag5I = 0 }

      if(this.pag6C==null){ this.pag6C = 0 }
      if(this.pag6I==null){ this.pag6I = 0 }

    }else if(this.busquedaSimbolos=='B'){
      if(this.pag8C==null){ this.pag8C = 0 }
      if(this.pag8I==null){ this.pag8I = 0 }

      if(this.pag9C==null){ this.pag9C = 0 }
      if(this.pag9I==null){ this.pag9I = 0 }

      if(this.pag10C==null){ this.pag10C = 0 }
      if(this.pag10I==null){ this.pag10I = 0 }

      if(this.pag11C==null){ this.pag11C = 0 }
      if(this.pag11I==null){ this.pag11I = 0 }

    }
  }

  calcularResultado(){
    this.validarRespuestas()
    if(this.busquedaSimbolos=='A'){
      var correctas = this.pag4C + this.pag5C + this.pag6C
      var inCorrectas = this.pag4I + this.pag5I + this.pag6I

    }else if(this.busquedaSimbolos=='B'){
      var correctas = this.pag8C + this.pag9C + this.pag10C+ this.pag11C
      var inCorrectas = this.pag8I + this.pag9I + this.pag10I+ this.pag11I
    }

    this.resultado = correctas-inCorrectas

    if(this.resultado<0){
      this.resultado = 0
    }

    this.estado = "terminado"
  }

  aRevisar(){
    if(this.busquedaSimbolos=='A'){
      this.estado = 'revision1'; 
    }else if(this.busquedaSimbolos=='B'){
      this.estado = 'revision2';
    }    
  }

  regresarAct(){
    this.estado = 'terminado';
  }

  getResultado():number {
    return this.resultado;
  }

  retorno(){
    this.router.navigateByUrl('/wisc');
  }

}
