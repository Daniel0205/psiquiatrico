import { Component, OnInit, Input ,Output,EventEmitter } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() nameTest:string;

  @Input() result:string

  @Output() review = new EventEmitter<string>()

  constructor(private router: Router) { }

  ngOnInit() {
  }

  reviewFun(){
    this.review.emit("")
  }

  finishFun(){
    this.router.navigateByUrl('/wais');
  }

  



}
