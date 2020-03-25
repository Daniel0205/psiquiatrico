import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pistas-wisc',
  templateUrl: './pistas-wisc.component.html',
  styleUrls: ['./pistas-wisc.component.css']
})
export class PistasWiscComponent implements OnInit {
  estado:string = 'instruccion';
  
  itemNumber:number = 0;

  initialItem:number = 0;

  clues:String[]=["-Sirve para secarse después de que te bañas",
                    "-Sirve para oler cosas",
                    "-Es un satélite natural...\n-Y sólo puedes verlo en la noche.",
                    "-Es un animal con trompa y grandes orejas.",
                    "-Se pone en la cabeza para protegerse del frío y del sol.",
                    "-Tiene una perilla o picaporte y la gente puede abrirla para pasar.",
                    "-Mezcla de tierra con la lluvia...\n-Y puedes manchar con esto tu ropa o el piso.",
                    "-Tiene cosas del pasado o antiguas...\n-Y en este lugar se se exhiben cosas interesantes.",
                    "-Líquido de colores...\n-Y se usa para poner en las paredes.",
                    "Esta es una habitación donde la gente duerme. ",
                    "-Proviene de los charcos/ estanques en la costa del mar...\n-Y es útil para (aderezar, condimentar, sazonar) los alimentos.",
                    "-Nacen al pie de las montañas...\n-Y Por lo general desembocan en el océano.",
                    "-Son los responsables de que tu cuerpo funcione...\n-Y algunos de ellos se pueden trasplantar.",
                    "-Conduce a nuevos descubrimientos...\n-Y comprende un proceso con una serie de pasos…\n-Y puede incluir experimentos.",
                    "-Facilita la convivencia de las personas que son diferentes…\n-Se rompe cuando hay conflictos sociales…-Y es algo que la ONU y muchos gobiernos tratan de mantener.",
                    "-Son normas que debe respetar el ciudadano...\n-Y están escritas con el fin de proteger la sociedad.",
                    "-La gente lo hace para arreglar edificios viejos…\n-Y se hace para devolver el aspecto original de algo.",
                    "-No se detiene\n-No se toca\n-Y se puede medir",
                    "-Es un permiso oficial…\n-Por lo general lo otorga una autoridad…\n-Y puede ser que hagas un examen para obtenerlo.",
                    "-Lo festejas…\n-Aumenta cada año…\n-Y te hace más grande.",
                    "-Nunca se ha visto…\n-Mejora nuestras vidas…\n-Y se puede provocar que la gente gane premios.",
                    "-Este es un lugar…\n-Y te protege de los cambios de clima...\n-Y se halla dentro de otra cosa.",
                    "-Puede ser un río…\n-Y las guerras pueden cambiarlo…\n-Y dos países pueden compartirlo.",
                    "-Ha pasado…\n-Y se puede contar... \n-Y otorga lecciones a la gente."]




  rightAnswer:String[] = ["Toalla\nSecador para el pelo\nSecador de aire\njerga\nTrapo",
                          "Nariz, Fosa nasal",
                          "Luna\nEstrellas\nAurora boreal\nConstelaciones\nPlanetas\nSatélite",
                          "Elefante",
                          "Sombrero\nCachucha\nGorra\nCasco\nVisera\nCapucha\nBonete\nBufanda\nPeluca\nPelo\nDiadema",
                          "Puerta\nPuerta mosquitera [Cualquier puerta específica]\nCancel",
                          "Lodo\n(Pasto, tierra) húmedo\ncharcos\nAgua sucia\nNieve\nAgua nieve\nHielo",
                          "Museo\nBiblioteca\nIglesia",
                          "Pintura",
                          "Recamara\nCuarto de huéspedes",
                          "Sal",
                          "Río\nRiachuelo\nArroyo\nTorrente\nManantial\nCascada\nFuente\nPuerto\nBahía\nEstuario  ",
                          "Órgano\nCorazón [ Cualquier órgano que se pueda trasplantar]",
                          "Ciencia\nInvestigación\nMétodo científico\nInventar\nInvención\nBiología [Cualquier ciencia específica]\nSolución de problemas\nExperimentación\nRazonamiento deductivo\nHipótesis\nExploración\nTecnología\nTeorías",
                          "Paz\nLibertad\nAutonomía\nLey\nSeguridad\nControl\nPoder\nOrden\nJusticia\nDerechos\nReglas\nDinero\nRiqueza\nSalvaguardia\nAutoridad",
                          "Ley\nRegla\nContrato\nPóliza\nTestamento\nConstrucción\nDeclaración de independencia [ Cualquier documento histórico específico]\nTratado\nConvenio\nDerechos",
                          "Restaurar\nReparar\nArreglar\nReconstruir\nRearmar\nRehabilitar\nRenovar\nVolver a armar\nComponer\nReconstruir\nRepintar\nReamueblar\nBarnizar",
                          "Tiempo\nEnvejecimiento\nRotación de la tierra\nLuz",
                          "Visa\nLicencia\nLicencia de manejo [Cualquier licencia específica]\nPermiso\nTarjeta de inmigración\nCredencial de elector\nBeca\nNaturalización\nPatente\nDerecho de autor",
                          "Edad\nCumpleanos\nEstatura",
                          "Desubrimiento\nInvencion\nInnovacion\nTEcnologia\nImaginacion\nCreatividad\nSueno",
                          "Interiores\nHabitacion\nREcamara [ Cualquierhabitacion especifica]\nSotano\nAtico\nDentro dela casa\nBoveda\nCAja fuerte\nRefugio (subterraneo,COntra Bombas)\nCueva\nTunel\nBunker",
                          "Frontera\nLimite\nLinea fronteriza\n(linea , marca) territorial\nCanal\nRio Bravo\n[Cualquier rio fronterizo especifico]",
                          "Historia\nPasado\n(Acciones, Pensamientos, Decisiones, Errores) Pasados Ayer\nRecuerdos\nDescubrimientos"]



                          
                          
                
  badAnswer:string[] = ["Tina\nBaño",
                        "Rostro\nMente\nCerebro\nSentido\nBoca\nLengua",
                        "Luciernaga\nSol\nNubes\nMurciélagos\nBúhos\nAviones",
                        "Ciervo\nCerdo\nOso hormiguero",
                        "Sabana\nToalla",
                        "(Perilla, manija) de la puerta\nGabinete",
                        "Escarcha\nHumedad\nPasto\nAgua\nTierra\nBarro",
                        "Escuela\nColegio\nUniversidad\nSalón de Clases\nClase\nLaboratorio\nLibro\nMemoria\nGuardería\nHogar",
                        "Papel tapiz\nIlustración\nMarco\nCartel\nCortinas\nTela\nCuadro\nTiza\nArcoiris\nHojas otoñales\nCrayones\nMarcadores\nPluma",
                        "Cama\nApartamento\nHotel ",
                        "Agua\nAlgas\nSazonadores",
                        "Océanos\nMar\nBallena\nLluvia\nPozo\nCanal",
                        "Cartílago\nPiel\nAnginas\nCerebro\nDientes\nHuesos\nOperación\nPartes del cuerpo\nEntrañas\nCélula",
                        "Pruebas de laboratorio\nExámenes\nProyectos\nMicroscopios\nAprendizaje\nEnseñanza\nEstudio",
                        "Revolución\nPropiedad de la tierra\nLiderazgo\nEstado\nPaís",
                        "Juramento\nseguros\nInstrucciones",
                        "Rehacer\nRegenerar\nConstruir\nActualizar\nLimpiar\nRegresar a la tienda\nPegar\nUnir con cinta adhesiva",
                        "Viento\nHistoria\nFuturo\nAire\naño(cualquier unidad específica de tiempo)\nEdad",
                        "Seguro social\nVle de alimento\nDErecho al voto\nConcesion de tierra\nEmpleo\nTRabajo\nGrado",
                        "Calendario\naños\nMeses\nPesos\nTalla\nTiempo\nCrecimiento ",
                        "Esperanza\nFelicidad\nViaje intergalactico [Cualquier descubirmiento que no haya sucedido]\nPensamientos\nAprendizaje\nPaz\nIdea\nTelepatia\nInformacion",
                        "Casa\n[Cualquier construccion especifica]\nSubterraneo\nAlbergue\nArco\nDEpartamento\nTienda en un centro comercial",
                        "Presa\nPuente\nDIvision\nHito\nPared\nNilo\n[ Cualquier rio especifico nofronterizo]\nDivision",
                        "Noticias\nFuturo\nGuerra\nMilenio [ Cualquier suceso historico]\nBebe\nNacimiento"]



  numberItem:number = 1

  respuestaDada:string='';

  retornoHecho:boolean = true; // Esta variable me ayuda a controlar el uso de la regla del retorno
  retorno:boolean = false; // Esta variable me ayuda a controlar el uso de la regla del retorno
  countRe:number = 0; //Esta variable me dice cuando se puede salir de la condición de retorno
  flagRe:number = null;//Esta variable me ayuda a decir en que posicion quedo el paciente antes de entrar al retorno 

  terminacion:number = 0; //Esta variable me dice cuantos ceros consecutivos tuvo el paciente

  resultados:number[] = new Array(18).fill(0);

  respuestas:string[] = new Array(18).fill("");


  
  cambiarPrueba(key){
    console.log(this.resultados)
    if(this.estado==='test'){
      
      if(this.retorno){
        if(1===key){
          this.countRe++;
          if(this.countRe===2){
            this.retorno=false;
            this.retornoHecho=false;
            this.numberItem=this.flagRe            
          }
        }
        else {
          this.countRe=0
          this.resultados[this.numberItem-1]=0
        }        
      }
      else{
        if(1===key){
          this.resultados[this.numberItem-1]=1 
          this.terminacion=0
        }
        else{

       
          if((this.numberItem===this.initialItem || this.numberItem===this.initialItem+1) && this.retornoHecho){
            this.retorno=true;
            this.flagRe=this.numberItem;
            this.resultados[this.numberItem-1]=0
            this.numberItem=this.initialItem;
            
          }
          else {
            this.terminacion++;
            this.resultados[this.numberItem-1]=0
          }

          if(this.terminacion===5)this.estado='resultados';
        }
        
      }

      if(this.retorno)this.numberItem--;
      else this.numberItem++;
      
      if(this.numberItem===25 || this.numberItem===0)this.estado='resultados'


    } 
  }

  imagenInit(item){
    if(item!==1){
      for (let i = 0; i < item; i++) {
        this.resultados[i]=1 
      }
    }
   

    this.initialItem=item
    this.numberItem=item
    this.estado='test'

  }
  constructor() { }


  ngOnInit() {
  }

  aRevisar(){
    this.estado = 'revision';
  }


  getResultado():number {
    var total = 0;
    for(var i=0;i<this.resultados.length;i++){
      total = total + this.resultados[i];
    }
    console.log(this.resultados)
    return total;
  }

  startTest(){
    this.estado='test'
  }

  regresarAct(){
    this.estado = 'resultados';
  }


  actualizarResultados(){
    
    for(let j = 1;j<this.resultados.length;j++){
      var x = (<HTMLInputElement>document.getElementById(""+j)).value;
      this.resultados[j] = +x;
    }
    
    this.estado = 'resultados';
  }

}


