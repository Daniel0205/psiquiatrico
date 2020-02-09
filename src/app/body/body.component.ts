import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {


  names:string[] ;

  test:string[] = ["Pruebas de atencion","Pruebas cognitivas",
                  "Pruebas de inteligencia","Pruebas de aprendizaje",
                  "Pruebas de memoria","Pruebas de quirofano"]

  sources:string[] = ["attentionTest","cognitiveTest",
                      "intelligenceTests","learningTests",
                      "memoryTest","quirofanoTests"]

  attentionTest:string[] = ["Prueba de STROOP", "Prueba de Rey"]
  
  cognitiveTest:string[] = ["Prueba de Zung"]
                      
  intelligenceTests:string[] = ["WAIS IV", "WISC IV"]
  
  learningTests:string[]
  
  memoryTest:string[]
  
  quirofanoTests:string[]

  state:string = "category"

  constructor() { }

  ngOnInit() {
    this.names=this.test;
   
  }

  changeState(change){
    switch (change) {
      case "Pruebas de atencion":
        this.names=this.attentionTest
        break;
      case "Pruebas cognitivas":
        this.names=this.cognitiveTest
        break;
      case "Pruebas de inteligencia":
        this.names=this.intelligenceTests
        break;
      case "Pruebas de aprendizaje":
        this.names=this.learningTests
        break;
      case "Pruebas de memoria":
        this.names=this.memoryTest
        break;
      case "Pruebas de quirofano":
        this.names=this.quirofanoTests
        break;
      case "category":
        this.names=this.test
        break;
    }
    this.state=change
  }

}
