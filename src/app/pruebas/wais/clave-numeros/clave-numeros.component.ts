import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clave-numeros',
  templateUrl: './clave-numeros.component.html',
  styleUrls: ['./clave-numeros.component.scss']
})
export class ClaveNumerosComponent implements OnInit {

  estado:String = 'aplicacion';// Esta variable me dice en que estado

  resultado:number = null;

  constructor() { }

  ngOnInit() {
  }

  validarRespuestas(){
    if(this.resultado==null){ this.resultado=0}
  }

  MostrarResumen(){
    this.validarRespuestas()
    this.estado = "terminado";
  }

  getResultado():number {
    return this.resultado;
  }
}
