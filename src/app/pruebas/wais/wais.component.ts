import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BloquesComponent } from './bloques/bloques.component';
import {Router} from '@angular/router'

@Component({
  selector: 'app-wais',
  templateUrl: './wais.component.html',
  styleUrls: ['./wais.component.scss']
})
export class WaisComponent implements OnInit {

  estado:String="confirmacion";

  link:string[] = ["/bloques","/semejanzas","/digitos","/matrices",
                   "/vocabulario","/aritmetica","/busquedaSimbolos",
                   "/puzlesVisuales,","/informacion","/claveNumeros",
                   "/letrasNumeros","/balanzas","/comprension",
                   "/cancelacion","/figurasIncompletas"]

  texts:string[] = ["Cubos","Semejanzas","Digitos","Matrices",
                   "Vocabulario","Aritmetica","Busqueda de Simbolos",
                   "Puzles Visuales","Informacion","Clave de Numeros",
                   "Letras y Numeros","Balanzas","Comprension",
                   "Cancelacion","Figuras Incompletas"]

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
