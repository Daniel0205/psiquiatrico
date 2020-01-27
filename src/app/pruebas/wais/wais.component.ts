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

  cancel(){
    this.router.navigateByUrl('/');
  }


}
