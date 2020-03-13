import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

export interface ClavesATable {
  timeRange: String;
  bonusP: number;
  totalNS: number;
}

@Component({
  selector: 'app-clave-numeros',
  templateUrl: './clave-numeroswisc.component.html',
  styleUrls: ['./clave-numeroswisc.component.scss']
})
export class ClaveNumeroswiscComponent implements OnInit {
  estado:String = 'instruccion';// Esta variable me dice en que estado
  clavesA:boolean = false;// A true o B false
  resultado:number = null;

  displayedColumns: string[] = ['timeRange', 'bonusP', 'totalNS'];
  clavesATableItems:ClavesATable[] = [
    {timeRange: '116-120', bonusP: 0, totalNS: 59},
    {timeRange: '111-115', bonusP: 1, totalNS: 60},
    {timeRange: '106-110', bonusP: 2, totalNS: 61},
    {timeRange: '101-105', bonusP: 3, totalNS: 62},
    {timeRange: '96-100',  bonusP: 4, totalNS: 63},
    {timeRange:  '86-95',  bonusP: 5, totalNS: 64},
    {timeRange:   '≤85',   bonusP: 6, totalNS: 65},
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  testInit(clvs:String){
    this.estado = 'registro';
    if(clvs =='A'){
      this.clavesA = true;
    }
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

  retorno(){
    this.router.navigateByUrl('/wisc');
  }
}
