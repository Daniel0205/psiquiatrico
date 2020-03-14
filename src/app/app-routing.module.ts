import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StroopComponent } from './pruebas/stroop/stroop.component';
import { KingComponent } from './pruebas/king/king.component';
import { ZungComponent } from './pruebas/zung/zung.component';
import { WaisComponent } from './pruebas/wais/wais.component';
import { WiscComponent } from './pruebas/wisc/wisc.component';
import { BloquesComponent } from './pruebas/wais/bloques/bloques.component';
import { SemejanzasComponent } from './pruebas/wais/semejanzas/semejanzas.component';
import { DigitosComponent } from './pruebas/wais/digitos/digitos.component';
import { MatricesComponent } from './pruebas/wais/matrices/matrices.component';
import { VocabularioComponent } from './pruebas/wais/vocabulario/vocabulario.component';
import { AritmeticaComponent } from './pruebas/wais/aritmetica/aritmetica.component';
import { BusquedaSimbolosComponent } from './pruebas/wais/busqueda-simbolos/busqueda-simbolos.component';
import { PuzlesVisualesComponent } from './pruebas/wais/puzles-visuales/puzles-visuales.component';
import { InformacionComponent } from './pruebas/wais/informacion/informacion.component';
import { ClaveNumerosComponent } from './pruebas/wais/clave-numeros/clave-numeros.component';
import { LetrasNumerosComponent } from './pruebas/wais/letras-numeros/letras-numeros.component';
import { BalanzasComponent } from './pruebas/wais/balanzas/balanzas.component';
import { ComprensionComponent } from './pruebas/wais/comprension/comprension.component';
import { CancelacionComponent } from './pruebas/wais/cancelacion/cancelacion.component';
import { FigurasIncompletasComponent } from './pruebas/wais/figuras-incompletas/figuras-incompletas.component';

import {CuboswiscComponent} from './pruebas/wisc/cuboswisc/cuboswisc.component';
import {SemejanzaswiscComponent} from './pruebas/wisc/semejanzaswisc/semejanzaswisc.component';
import {VocabulariowiscComponent} from './pruebas/wisc/vocabulariowisc/vocabulariowisc.component';
import {DigitoswiscComponent} from './pruebas/wisc/digitoswisc/digitoswisc.component';
import {MatriceswiscComponent} from './pruebas/wisc/matriceswisc/matriceswisc.component';
import {AritmeticawiscComponent} from './pruebas/wisc/aritmeticawisc/aritmeticawisc.component';
import {BusquedaSimboloswiscComponent} from './pruebas/wisc/busqueda-simboloswisc/busqueda-simboloswisc.component';
import {InformacionwiscComponent} from './pruebas/wisc/informacionwisc/informacionwisc.component';
import { LetrasNumerosWiscComponent } from './pruebas/wisc/letras-numeros-wisc/letras-numeros-wisc.component';
import { FigurasIncompletasWiscComponent } from './pruebas/wisc/figuras-incompletas-wisc/figuras-incompletas-wisc.component';
import { ConceptoDibujosWiscComponent } from './pruebas/wisc/concepto-dibujos-wisc/concepto-dibujos-wisc.component';
import {ClaveNumeroswiscComponent} from './pruebas/wisc/clave-numeroswisc/clave-numeroswisc.component';
import {ComprensionwiscComponent} from './pruebas/wisc/comprensionwisc/comprensionwisc.component';


const routes: Routes = [
  {path: 'stroop', component: StroopComponent},
  {path: 'king', component: KingComponent},
  {path: 'zung', component: ZungComponent},
  {path: 'wais', component: WaisComponent},
  {path: 'wisc', component: WiscComponent},
  {path: 'bloques', component: BloquesComponent},
  {path: 'semejanzas', component: SemejanzasComponent},
  {path: 'digitos', component: DigitosComponent},
  {path: 'matrices', component: MatricesComponent},
  {path: 'vocabulario', component: VocabularioComponent},
  {path: 'aritmetica', component: AritmeticaComponent},
  {path: 'busquedaSimbolos', component: BusquedaSimbolosComponent},
  {path: 'puzlesVisuales', component: PuzlesVisualesComponent},
  {path: 'informacion', component: InformacionComponent},
  {path: 'claveNumeros', component: ClaveNumerosComponent},
  {path: 'letrasNumeros', component: LetrasNumerosComponent},
  {path: 'balanzas', component: BalanzasComponent},
  {path: 'comprension', component: ComprensionComponent},
  {path: 'cancelacion', component: CancelacionComponent},
  {path: 'figurasIncompletas', component: FigurasIncompletasComponent},

  { path: 'cuboswisc', component: CuboswiscComponent },
  { path: 'semejanzaswisc', component: SemejanzaswiscComponent },
  { path: 'vocabulariowisc', component: VocabulariowiscComponent },
  { path: 'digitoswisc', component: DigitoswiscComponent },
  { path: 'matriceswisc', component: MatriceswiscComponent },
  { path: 'aritmeticawisc', component: AritmeticawiscComponent },
  { path: 'busqueda-simboloswisc', component: BusquedaSimboloswiscComponent },
  { path: 'informacionwisc', component: InformacionwiscComponent },
  { path: 'letrasNumeroswisc', component: LetrasNumerosWiscComponent},
  { path: 'figurasIncompletaswisc', component: FigurasIncompletasWiscComponent},
  { path: 'ConceptoDibujosWisc', component: ConceptoDibujosWiscComponent},
  { path: 'ClaveNumeroswisc', component: ClaveNumeroswiscComponent },
  { path: 'Comprensionwisc', component: ComprensionwiscComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
