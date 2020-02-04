import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wisc',
  templateUrl: './wisc.component.html',
  styleUrls: ['./wisc.component.scss']
})
export class WiscComponent implements OnInit {

  fechaNacimiento:any;
  edad:number;

  estado:String = "confirmacion"

  texts:string[] = ["Diseno con Cubos","Semejanzas"," Retencion de digitos",
  "Conceptos con dibujos","Claves","Vocabulario","Sucesion de numeros y letras",
  "Matrices","Comprension","Busqueda de simbolos","Figuras incompletas",
  "Registros","Informacion", "Aritmetica","Pistas"]
  
  CalcularEdad(){
    if(this.fechaNacimiento){
      const convertAge = new Date(this.fechaNacimiento);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.edad = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    }

    alert("La edad del paciente es: "+ this.edad)

    this.estado = "subpruebas";
  }

  constructor() { }

  ngOnInit() {
  }

}
