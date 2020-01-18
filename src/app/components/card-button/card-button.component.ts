import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.scss']
})
export class CardButtonComponent implements OnInit {

  @Input() name:string;

  @Input() source:string;

  path:string

  color:string = "#017F8D"

  @Output() messageEvent = new EventEmitter<string>()



  constructor(private router: Router) { }

  ngOnInit() {
    this.path= "../../../assets/CardLogos/"+this.source+".png"
  }

  trigger(){

    console.log(name)
    
    if(this.source.length!==0)this.messageEvent.emit(this.name)
    else{
      switch (this.name) {
        case "WAIS IV":
          this.router.navigateByUrl('/wais');
          break;
        case "WISC IV":
          this.router.navigateByUrl('/wisc');
          break;
        case "Prueba de STROOP":
          this.router.navigateByUrl('/stroop');
          break;
        case "Prueba de Rey":
          this.router.navigateByUrl('/king');
        break;
        case "Prueba de Zung":
          this.router.navigateByUrl('/zung');
          break;          
        default:
          break;
      }
    }
  }
}
