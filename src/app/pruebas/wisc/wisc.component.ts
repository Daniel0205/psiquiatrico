import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-wisc',
  templateUrl: './wisc.component.html',
  styleUrls: ['./wisc.component.scss']
})
export class WiscComponent implements OnInit {

  fechaNacimiento:any;
  edad:number;

  estado:String = "confirmacion"

  link:string[] = ["/cuboswisc","/semejanzaswisc","/digitoswisc","ConceptoDibujosWisc",
                   "/ClaveNumeroswisc","/vocabulariowisc","/letrasNumeroswisc",
                   "/matriceswisc","/Comprensionwisc","/busqueda-simboloswisc",
                   "/figurasIncompletaswisc","","/informacionwisc",
                   "/aritmeticawisc",""]


  texts:string[] = ["Cubos","Semejanzas","Dígitos",
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

  constructor(private cdr: ChangeDetectorRef,private router: Router) { }

  ngOnInit() {
  }

  change(){
    
    switch(this.estado){
      case 'confirmacion':
        this.estado='aplicacion'
        break;
      case 'aplicacion':
        this.estado='colors'
        break;
      case 'resultados':
        this.router.navigateByUrl('/');
        break;
    }

    this.cdr.detectChanges()   
  }

  cancel(route){
    this.router.navigateByUrl(route);
  }

}
