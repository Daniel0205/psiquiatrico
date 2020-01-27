import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-start-test',
  templateUrl: './start-test.component.html',
  styleUrls: ['./start-test.component.css']
})
export class StartTestComponent implements OnInit {

  @Input() name:string;

  @Output() messageEvent = new EventEmitter<string>()


  constructor() { }

  ngOnInit() {
  }

  change(){
    this.messageEvent.emit(this.name)
  }
}
