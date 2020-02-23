import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-semejanzaswisc',
  templateUrl: './semejanzaswisc.component.html',
  styleUrls: ['./semejanzaswisc.component.scss']
})
export class SemejanzaswiscComponent implements OnInit {

  estado:String = 'instrucciones';// Esta variable me dice en que estado

  indexInicial:number = null;
  indexActual:number = null;
  itemActual:String[] = null;

  ejemplo:String[] = ["Rojo","Azul"]

  items:String[][] = [["Leche","Agua"],["Pluma","Lápiz"],["Gato","Ratón"],
                      ["Manzana","Plátano"],["Camisa","Zapato"],["Invierno","Verano"],
                      ["Mariposa","Abeja"],["Madera","Ladrillos"],["Enojo","Alegria"],
                      ["Poeta","Pintor"],["Pintura","Estatua"],["Montaña","Lago"],
                      ["Hielo","Vapor"],["Codo","Rodilla"],["Mueca","Sonrisa"],
                      ["Inundación","Sequía"],["el Primero","el Último"],["Hule","Papel"],
                      ["Permiso","Prohibición"],["Sal","Agua"],["Venganza","Perdón"],
                      ["la Realidad","la Fantasía"],["el Espacio","el Tiempo"]];

  respuestas:String[] = ["","","","","","","","","","","","","","","","","","","","","","",""];

  terminacion:number = 0; //Esta variable me dice cuantos ceros consecutivos tuvo el paciente
  retorno:boolean = false; // Esta variable me ayuda a controlar el uso de la regla del retorno
  countRe:number = 0; //Esta variable me dice cuando se puede salir de la condición de retorno
  flagRe:number = null;//Esta variable me ayuda a decir en que posicion quedo el paciente antes de entrar al retorno

  resultados:number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  respuestas2:String[] = ["",
                          "",
                          "Mamíferos/Ambos tienen sangre caliente/Vertebrados\nAnimales/Criaturas/Cuadrúpedos\nSeres vivientes",
                          "Frutas",
                          "Prendas de vestir/Ropas/Vestimenta\nTe vistes con ellas\nAmbos son parte de un uniforme",
                          "Estaciones/Estaciones del año\nTienen solsticios",
                          "Insectos/Bichos que vuelan",
                          "Artículos(materiales/productos) para la construcción\nArtículos(materiales/productos) para hacer una casa",
                          "Emociones/Respuestas emocionales\nSentimientos/Estados de ánimo/Estados mentales",
                          "Se expresan a través del arte\nArtistas/Maestros de un arte\nCreadores/Hacen cosas creativas\nTrabajos/Profesiones",
                          "Formas de arte/Obras artísticas\nExpresiones(representacione/creaciones) artísticas hechas por artistas\nArte/Tienen que ver con el arte",
                          "Aspectos geográficos/topográficos/Características físicas de la tierra\nPaisajes\nGeofráfia/Lugares geográficos\nLos dos son parte del terreno",
                          "Son (formas/estados) del agua/Agua en diferente (forma/estados)\nAgua en temperaturas extremas\nCambios físicos en el agua",
                          "Estan articulados/Partes del cuerpo con articulaciones\nPartes del cuerpo que se (doblan/flexionan)\nMantienen juntas las partes del brazo o la pierna\nAmbos giras/Funcionana como bisagras",
                          "Expresiones faciales/Estados de ánimo de tu rostro\nManeras de mostrar tus sentimientos o emociones\nSe usan para mostrar emociones\nSeñales de emociones",
                          "Desastres naturales/Desastres naturales con agua\nClima extremo/Tragedias climáticas\nFormas extremas de clima\n(Actos/Fuerzas) de la naturaleza",
                          "Extremos/Posiciones extremas\nPuntos extremos en una secuencia numérica\nPosiciones en una serie\nLugres opuestos\nParte de una secuencia cronológica",
                          "Subproductos (Productos/Provienen) de los árboles\nSe elaboran de recursos naturales/Hechos a partir de la naturaleza\nDerivados de las plantas",
                          "Métodos de control/Maneras de controlar la conducta\nEstablecen rangos para lo que puedes hacer o como puedes comportarte\nLímites/Pautas/Parámetros\nReglas/Leyes/Reglamentos/Niveles de libertad\nCondiciones de (aprobación/autorización/permiso)",
                          "Las necesitas para vivir\nCompuestos químicos\nEl cuerpor las necesita/esenciales para el cuerpo",
                          "Decisiones que tomas o cosas que puedes hacer si alguien te ha hecho algo malo\nManeras de afrontar los problemas\nSentimientos asociados a acciones y decisiones",
                          "Estados o niveles de conciencia/Niveles del estado de alerta\nEstados o esquemas de la mente/Estados mentales/psíquicos\nManeras (de percibir/ver) el mundo\nModos de pensamiento",
                          "Dimensiones/Partes de un continuo\nSon cosas que nos limitan\nIdeas abstractas(no se pueden tocar/ver)\nPermean nuestra existencia"]

  respuestas1:String[] = ["Liquidos/Fluidos\nSon buenos para ti/Sanos\nBebidas/Liquidos para beber/Los dos se toman\n[Demuestra beber]",
                          "Cosas con las que (escribes/dibujas/pintas)\nInstrumentos para escribir/Herramientas de dibujo\nArtículos (escolares/de oficina/de arte)\n[Demuestra escribir]",
                          "Tienen (Cualquier característica física)\nLos dos comen/Duermen/Se arrastran\nNocturnos/Pueden ver en la oscuridad/Activos en la noche\n",
                          "Alimento/Cosas que comes/Comestibles\nCrecen en arboles\nSaben bien/Son dulces\nSaludables/Nutritivas/Tienen vitaminas\nTienen (semillas/cáscara)\nCosas que (pelas/rebanas)",
                          "Vestido\nTe lo pones/Cubren o van sobre el cuerpo\nProtegen tu cuerpo/Te mantienen caliente\nLe queda a tu cuerpo o al de otra persona",
                          "(Épocas/partes/categorías) del año\nClima/Cambios de clima/Estado climatico\nParte de [nombra todas las estaciones]",
                          "Son animales/Criaturas\nTienen alas/Criaturas que vuelas\nTienen (6 patas/cuerpos segmentados)\nRecogen (nectar/polen)/Ayudan a la polinización de las flores\nTienen antenas",
                          "Materiales/Recursos materiales/Artículos\nHaces cosas con ellos\nPara los edificios/Partes de tu casa\nSe usan en contrucción/Parte de los cimientos/paredes/cercas",
                          "Expresiones/Puedes expresar los dos\nLa manera como te sientes/Formas en que pueden sentirte\nRespuestas/Reacciones/Actitudes\nExpresiones faciales\nLas dos están dentro de ti\nPensamientos",
                          "Artisticos/Talentosos/Creativos/Imaginativos/Expresivos\n(Expresan/Ilustran/Transmiten) cosas o puntos de vista\nExpresan sentimientos y emociones\nGanan dinero con su arte/Venden arte",
                          "Artísticas/Creativas\nCreaciones/Son hechas por el hombre\n(Formas/Tipos/Clases) de expresion\nSon símbolos/Simbólicas\nEstán en un museo/Pueden ser obras maestras",
                          "Lugares de la tierra/Partes de la (Tierra/Planeta/Mundo)\nRasgos físicos\nLo natural/(Patrones/Recursos) naturales\nPanorama/Entorno/Los dos están formados por el clima/Los dos sirven para (recreación/acampar/vacacionar)",
                          "Agua/Hecho agua/Creado a partir de agua\nExtremos de la temperatura/Partes del ciclo del agua\n(Formas/Fases/Estado) de la materia/Tienen sustancias quimicas\nPueden volverse líquidos",
                          "Te ayudan a doblarte/Se doblan/Son flexibles\nPartes del cuerpo que (conectan huesos/se mueven/son flexibles)\n Partes de los miembros\nTienen (cavidades/ligamentos/cartilago)\nHuesos que (conectan/se doblan/se mueven/sostienen juntos los huesos)",
                          "Expresiones/Emociones/Ademanes\nEmociones del rostro/Sentimientos que haces con tu cara\nManeras de decir si alguien está feliz o triste\nAlgo que haces cuando te enojas o estás feliz\nSentimientos/Aspecto de tu rostro/Algo que haces con tu cara/Movimientos faciales\nMuestran felicidad o tristeza",
                          "Tienen que ver con (lluvia,precipitación)\n(Problemas/Accidentes) que implican (Agua/Lluvia)\n(Estados/Condiciones) del terreno\n(Condiciones/Patrones) del clima/Causan (devastación/desastres/destrucción)/Arruinan la (agricultura/cosecha)",
                          "Puntos que están en un extremo/Ambos extremos\nLugares/Clasificaciones/Posiciones\nLugares o posiciones en una (competencia/deporte/maratón/linea)\nPuntos en (el tiempo/una linea/una carrera)/Puntos designados\nEn una escala/Parte de una escala numérica",
                          "Los dos son materiales/Materiales físicos/materiales que usas\nProvienen de la madera\nLos dos estan hechos por el hombre/Manufacturados\nLos dos se usan para hacer productos/cosas",
                          "Tienen que ver con (autoridad/control)\nOrdenes/Mandatos/Instrucciones/Disposiciones/Normas/Restricciones\nExpectativas de lo que debes hacer\nConsecuencias de la conducta\nTe permiten hacer algo [Enfásis en el permiso]",
                          "Compuestos/Compuestos (físicos/cientificos)\nTienen (elementos/moléculas)\nLas consumen las personas/Son comestibles\nSustancias naturales/Buenas para el cuerpo/Tienen (minerales/nutrientes)\nMateriales para cocinar/Son parte del mar/El cuerpo las transpira",
                          "(Resultados/Consecuencias/Desenlaces) de haber sido lastimado\nDecisiones/Elecciones/Opciones/Maneras de reaccionar/Reacciones\nCosas que puedes (conceder/hacerle) a alguien/Actos/Acciones",
                          "(Están en/Tienen que ver con) tu (cerebro/cabeza/mente)\nFormas de pensamiento\nPensamiento/Ideas/Sentimientos/Visiones\nLas personas los (experimentan/visualizan)\nTe (imaginas/ves/observas) en ambos\nPuedes vivir en los dos/Maneras en que puedes vivir",
                          "Los dos se miden/Mediciones\nA los dos les afecta (la gravedad/relatividad/masa)\nInfinito/Ninguno es absoluto/Limitados/Cosas que se te pueden acabar\nAbstractos/No físicos/No se pueden ver ni tocar/Se puede (mover/viajar) a través de ellos/Escenarios"]

  respuestas0:String[] = ["Humedos/Tienen agua\nPuedes (verterlos/derramarlos)\nVienen en un envase o jarra\nTienen vitaminas",
                          "Tienen (punta afilada,gomas)\nTienen (tinta/grafito) dentro de ellos\nSon de la misma forma/Rectos/Largos/Redondos\nVienen en diferentes colores",
                          "Ambos viven en casas/Son domésticos\nComen queso/Roban comida\nSon del mismo color\nJuegan/Juegas con ellos\nEnemigos/Se persiguen",
                          "Son buenos para ti\nSon del mismo color/Amarilloas\nJugosos/Chiclosos/Se mastican\nVerduras",
                          "Se atan/Cierran/Abotonan\nSon de piel/Tejido/Están hechos de tela\nCuestan dinero/Los compras\nLos usas afuera/Son suaves/Del mimo color\n[Señala a los zapatos o la camisa]",
                          "Partes de la naturaleza\nVacaciones/Temporada de descanso\nMeses\nDivertidos/Puedes salir y jugar en esos tiempos\nTormentosos/Frios",
                          "(Están/Se paran/Se ponen/Comen) en las flores\n(Hacen/Recolectan) miel\nPican\nLas dos estan afuera",
                          "Construcción\nCosas que pueden utilizar\nSon duros/pesados/sólidos/ásperos/Fuertes\nProductos naturales/Elementos de la tierra",
                          "Algo que tu mente controla\nAcciones/Comportamientos/Cosas que haces\nCosas que puedes ser\nTienes ambos/Te pueden pasar\nSeñas/Apariencias/Rostros/Caras que haces\nParte de (la vida/tu imagen/personalidad/temperamento)",
                          "Arte/Tienen que ver con el arte\nEmocionales\nTrabajan con sus (mentes/manos)/Colocan cosas sobre papel\nPersonas famosas/Inspiran a la gente/Hacen mucho dinero\n",
                          "Expresiones/Sentimientos/Imágenes\nLas (pintas/dibujas/eriges)\nSe coleccionan/Se compran/Antigüedades/Tesoros\nCuadros/Dibujos/Esculturas/Retratos\nCosas que ves/Puedes verlas",
                          "Lugares para (ir/divertirse/escalar)\nLos dos están en exteriores/Están en el (bosque/campo/valle)\nGrandes/Altos/Anchos",
                          "Mojados/Húmedos\nLíquidos\nTienen temperatura/Temperaturas\nPuedes hacer uno con el otro\nProducen (bruma/vapor)",
                          "Se mueven\nConectan\nHuesos\nRedondos/Curvados/Puntiagudos/Duros/Están cubiertos de piel\nSe rompen/Pueden lastimarse\nLos usas",
                          "Movimientos/Acciones/Actos\nReacciones/Tu las haces\nCosas(movimientos/acciones) que relizas(haces) con tu boca(rostro/labios)\nRasgos faciales/Tristeza y felicidad\nUtilizas los músculos\nDe la misma forma/Medios círculos",
                          "Relacionados con agua\nTragedias/Problemas/Malas condiciones\nDañinas/Peligrosas/Riesgosas\nAfectan a las (personas/terreno/naturaleza/tierra)",
                          "En una linea\nTienen que ver con (un nombre/tiempo)\nNúmeros/Competencia/Carrera\nObtener tu turno",
                          "Tienen muchos usos/Se usan en la (escuela/oficina)\nLos dos se pueden (reciclar/quemar)\nArticulos (escolares/de oficina)/Herramientas/Utensilios\nAmbos son (rugosos/lisos/flexibles/delgados)",
                          "Los (padres/maestros/adultos) te las dan\nAlgo que se te concede\nSon necesarios para la sociedad\nNo puedes tener el uno sin el otro\nAlgo que puedes(no puedes) hacer",
                          "Elementos/Químicos/Minerales\nRecursos/Sustancias/Materiales\nCompuestos organicos\nSe disuelven/Pueden disolver cosas\n",
                          "Tipo de resoluciones/Sentiemiento/Emociones\nPensamientos/Actitudes/Expresiones\nTienen que ver contigo y con otra persona\nRasgos humanos",
                          "Parecen (reales/verdaderos/verídicos/falsos/ficticios)\nAfectan tu vida/Tienen que ver con tu futuro\nAburridos/Emocionantes/Atemorizantes",
                          "Inevitables/Constantes\nIncontrolables/Algo que no podemos cambiar\nSe mueven/Tienen que ver con el movimiento\nFuerzas/Materia/Parte de la ciencia(física)\nEstán en el universo/Maravillas naturales\nVuelas a través de ambos\nSon grandes/pequeños/rápidos/largos"]


  constructor(private router: Router) { }

  ngOnInit() {
  }

  selectInit(num:number){
    this.indexInicial = num-1;

    if(num===3){
      this.resultados[0]=1
      this.resultados[1]=1
    }else if(num===5){
      this.resultados[0]=1
      this.resultados[1]=1
      this.resultados[2]=2
      this.resultados[3]=2
    }

    this.estado = 'ejemplos';
  }

  aplicar(){

    this.indexActual = this.indexInicial;
    this.itemActual = this.items[this.indexActual];

    this.estado = 'aplicacion';
  }

  guardarRespuesta(){
    var element = (<HTMLInputElement>document.getElementById("res"));
    var x = element.value;
    this.respuestas[this.indexActual] = x;
    element.value = "";
  }

  cambiarPuntuacion(punt:number){

    this.guardarRespuesta();

    if(punt === 0){

      this.resultados[this.indexActual] = punt;
      this.terminacion++
    
      if(this.countRe>0){
        this.countRe=0;
      }
     
    }else{

      if(this.retorno){
        if(punt===2){
          this.countRe++
        }else{
          if(this.countRe>0){
            this.countRe=0;
          }
        }
      }

      if(this.terminacion > 0){
        this.resultados[this.indexActual] = punt;
        this.terminacion = 0
      }else{
        this.resultados[this.indexActual] = punt;
      }
    }

    this.verificarSiguienteItem()

  }

  verificarSiguienteItem(){
    if(this.terminacion < 3 && this.indexActual < 23){ // Verifica que no se haya cumplido la condicion de termino

      if(this.indexInicial===0){ // Si el indice inicial es 1 no se compara para verificar el retorno

        this.indexActual++;
        this.itemActual = this.items[this.indexActual];
  
      }else if(this.indexInicial===2){ // Si el indice inicial es 2 se compara para verificar el retorno
  
        //Este verificacion me dice si se cumple la condición para retornar y asi devolverse en caso de ser necesario
        if((this.indexActual === 2 || this.indexActual === 3) && this.resultados[this.indexActual]===0){
          this.retorno = true;
          this.flagRe = this.indexActual;
          this.indexActual = 2;
        }
  
        if(!this.retorno){ //En caso de no haber fallado los items 5 0 6 sigue aumentado a partir de ahí
          this.indexActual++;
          this.itemActual = this.items[this.indexActual];
        }else{ //En caso de que halla fallado el item 5 o el 6 vuelve al item 4 y empieza a disminuir desde ahí
          
          if(this.countRe===2){
            this.retorno = false;
            this.indexActual = this.flagRe + 1;
            this.itemActual = this.items[this.indexActual];
          }else{
            this.indexActual--;
            this.itemActual = this.items[this.indexActual];
          }
          
        }
      }else if(this.indexInicial===4){ // Si el indice inicial es 4 se compara para verificar el retorno
  
        //Este verificacion me dice si se cumple la condición para retornar y asi devolverse en caso de ser necesario
        if((this.indexActual === 4 || this.indexActual === 5) && this.resultados[this.indexActual]===0){
          this.retorno = true;
          this.flagRe = this.indexActual;
          this.indexActual = 4;
        }
  
        if(!this.retorno){ //En caso de no haber fallado los items 5 0 6 sigue aumentado a partir de ahí
          this.indexActual++;
          this.itemActual = this.items[this.indexActual];
        }else{ //En caso de que halla fallado el item 5 o el 6 vuelve al item 4 y empieza a disminuir desde ahí
          
          if(this.countRe===2){
            this.retorno = false;
            this.indexActual = this.flagRe + 1;
            this.itemActual = this.items[this.indexActual];
          }else{
            this.indexActual--;
            this.itemActual = this.items[this.indexActual];
          }
          
        }
      }

    }else{
      this.estado = 'terminado';
    }
  }


  getResultado():number {
    var total = 0;
    for(var i=0;i<this.resultados.length;i++){
      total = total + this.resultados[i];
    }
    return total;
  }

  aRevisar(){
    this.estado = 'revision';
  }

  changeState(){
    this.estado = 'seleccion'
  }

  regresarAct(){
    this.estado = 'terminado';
  }

  aceptar(){
    this.router.navigateByUrl('/wisc');
  }

  actualizarResultados(){
    
    for(let j = 0;j<this.resultados.length;j++){
      var x = (<HTMLInputElement>document.getElementById(""+j)).value;
      this.resultados[j] = +x;
    }
    
    this.estado = 'terminado';
  }

}
