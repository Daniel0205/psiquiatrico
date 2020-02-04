



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StroopComponent } from './pruebas/stroop/stroop.component';
import { KingComponent } from './pruebas/king/king.component';
import { ZungComponent } from './pruebas/zung/zung.component';
import { WaisComponent } from './pruebas/wais/wais.component';
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
import { WiscComponent } from './pruebas/wisc/wisc.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { CardButtonComponent } from './components/card-button/card-button.component';
import { CategoryComponent } from './components/category/category.component';
import { StartTestComponent } from './components/start-test/start-test.component';
import { ResultsComponent } from './components/results/results.component';


@NgModule({
  declarations: [
    AppComponent,
    StroopComponent,
    KingComponent,
    ZungComponent,
    WaisComponent,
    BloquesComponent,
    SemejanzasComponent,
    DigitosComponent,
    MatricesComponent,
    VocabularioComponent,
    AritmeticaComponent,
    BusquedaSimbolosComponent,
    PuzlesVisualesComponent,
    InformacionComponent,
    ClaveNumerosComponent,
    LetrasNumerosComponent,
    BalanzasComponent,
    ComprensionComponent,
    CancelacionComponent,
    FigurasIncompletasComponent,
    WiscComponent,
    HeaderComponent,
    BodyComponent,
    SidebarComponent,
    CategoryComponent,
    CardButtonComponent,
    StartTestComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatTableModule,
    MatGridListModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
