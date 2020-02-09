import { Component, OnInit, Input,  Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input() names:string[];

  @Input() sources:string[];
  
  @Output() messageEvent = new EventEmitter<string>()

  constructor() { 
  }

  ngOnInit() {
  }

  receiveMessage($event){
    this.messageEvent.emit($event)
  }

}
