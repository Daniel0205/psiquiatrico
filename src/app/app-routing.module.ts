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
  {path: 'figurasIncompletas', component: FigurasIncompletasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
