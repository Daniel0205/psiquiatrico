import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-semejanzas',
  templateUrl: './semejanzas.component.html',
  styleUrls: ['./semejanzas.component.scss']
})
export class SemejanzasComponent implements OnInit {

  estado:String = 'instrucciones';// Esta variable me dice en que estado

  indexInicial:number = null;
  indexActual:number = null;
  itemActual:String[] = null;

  ejemplo:String[] = ["Dos","Siete"]

  items:String[][] = [["Tenedor","Cuchara"],["Brocoli","Espinaca"],["Caballo","Tigre"],
                      ["Piano","Tambor"],["Barco","Automóvil"],["Calcetines","Zapatos"],
                      ["Alegria","Miedo"],["Huevo","Semilla"],["Comida","Gasolina"],
                      ["Vapor","Niebla"],["Poema","Estatua"],["Ancla","Valla"],
                      ["Cubo","Cilindro"],["Música","Marea"],["Sedentario","Nómada"],
                      ["Amigo","Enemigo"],["Siempre","Nunca"],["Permitir","Prohibir"]];

  respuestas:String[] = ["","","","","","","","","","","","","","","","","",""];

  terminacion:number = 0; //Esta variable me dice cuantos ceros consecutivos tuvo el paciente
  retorno:boolean = false; // Esta variable me ayuda a controlar el uso de la regla del retorno
  countRe:number = 0; //Esta variable me dice cuando se puede salir de la condición de retorno
  flagRe:number = null;//Esta variable me ayuda a decir en que posicion quedo el paciente antes de entrar al retorno

  resultados:number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  respuestas2:String[] = ["Cubiertos/Cubertería\nInstrumentos(utensilios) que sirven para comer\nCosas con las que comes",
                          "Hortalizas/Verduras/Vegetales",
                          "Animales/Mamiferos/Cuadrúpedos\nMiembros del reino animal",
                          "Instrumentos\nInstrumentos musicales (de percusión)\nPara hacer música/Para crear musica",
                          "Vehículos/Medios de tranporte/Transportes\nAmbos sirven para transportar gente\nMedios para viajar(Ir de un sitio a otro)",
                          "Referencia a los pies\nPara (cubren/se ponen en) los pies",
                          "Sentimientos del ser humano\nEmociones/Estados de ánimo\nReacciones psicológicas",
                          "Referencia al origen de la vida o de nuevos seres\nLos dos son del origen de un ser vivo/Principio de un nuevo ser/Generan formas de vida\nEmbriones\n",
                          "Energía\nSon fuentes(tipos/forma) de energía\nDan (producen) energía",
                          "Ideas de estado e idea de agua\nEvaporacion del agua\nFormas de agua/Diferentes estados del agua\nAgua condensada\nHumedad en forma gaseosa/Formas de humedad",
                          "Obras (formas) de arte\nCreaciones (exoresiones) artísticas",
                          "Mantienen (Retienen) cosas en su lugar\nPor seguridad/Elementos de seguridad\nLimitan (dekimitan/restringen) el movimiento de las cosas",
                          "Noción de volumen\nVolúmenes/Formas volumétricas\nFormas (figuras) geométricas en 3 dimensiones (en el espacio)\nSe miden en metros cúbicos",
                          "Rítmicas/Tienen ritmo\nTienen (son) movimientos\nComportamiento ondulatorio/Tienen ondas/Transmiten ondan sinusoidales\nTienen compás",
                          "Dos ideas de las tres siguientes: Habitat/Modo de viva/Desplazamiento",
                          "Personas que influyen en tu vida\nPersonas hacia las que tienes fuertes sentimientos",
                          "Extremos de tiempo (frecuencia)\nMedidas absolutas\nCosas definitivas",
                          "Formas (maneras) de ejercer la autoridad\nManeras (formas) de controlar la conducta\nMedio (métodos) de control del comportamiento"]

  respuestas1:String[] = ["Para comer\nLos llevas a la boca/Para la boca\nTienen mango\nLos pones sobre la mesa",
                          "Alimentos/Comestibles\nSe cocinan\nCrecen en el campo\nSon saludables(Nutritivas)/Tienen Vitaminas\nContienen fibra",
                          "Tienen cuatro patas/Tienen cola(Cualquier característica física)\nSeres vivos\nSon rápidos(fuertes)",
                          "Reproducen obras de arte\nCosas ruidosas\nAmbos se tocan con las manos",
                          "Para desplazarnos/Para moverse/Para viajar/Para ir de un lado a otro\nLlevan gente o cosas\nLos dos se mueven\nHan de ser conducidos",
                          "Idea de ropa (complementos) sin referencia a los pies\nPrenda de vestir/Ropa/Complementos\nCalzado",
                          "Sensaciones\nFormas de sentir\nEstados",
                          "Referencia vaga a la vida/Son origen de algo\nPrincipio de algo/Nace algo\nLos dos producen algo/Para crear\nLas dos dan frutos",
                          "Combustibles\nQue permiten funcionar\nComida/Alimento\nNecesidades/necesarios",
                          "Idea de agua sin la idea de estado o visceversa\nHumedad/Son húmedos/Formas gaseosas/Gaseoso\nSon del agua\nCondensación\nResultado de las condiciones ambientales",
                          "Arte\nFormas de expresión\nCreaciones propias del hombre\nObras que sirven para enriquecernos",
                          "Paran cosas/Evitan que algo se vaya/No dejan ir más allá\nContienen algo/Sujetan algo/Impiden algo\nProtegen cosas/Para protección/Elementos de protección",
                          "Noción de geometría\nFormas geométricas\nGeometría",
                          "Son relajantes (Calmantes/tranquilizantes)\nOndas sonoras\nFluyen\nAltos y bajos",
                          "Una idea de las tres siguientes: Habitat/Modo de viva/Desplazamiento",
                          "Apreciaciones (percepciones) sobre los demás\nSentimientos que tienes por alguien\nTienes relación con ambos/Relaciones entre personas",
                          "Son dos formas de tiempo/expresiones de tiempo\nCosas externas\nRelacionado con el tiempo\nTiempo/Medidas/Dimensiones",
                          "Algo que tiene que ver con la autoridad/Formas de autoridad\nMétodos de guiar el comportamiento\nReglas que orientan el comportamiento\nLimites/Limitaciones/Exclusiones\nNiveles de acceso"]

  respuestas0:String[] = ["Los dos son largos\nLos dos se cogen con la mano\nEstan hechos de metal(plastico)",
                          "Legumbres\nTienen hojas\nSon del mismo color",
                          "Los puedes ver en el zoo\nPertenecen a la misma especie(P)\nLos tigres se comen a los caballos\nSon salvajes/Viven en la naturaleza/Viven en libertad",
                          "Tienen ritmo\nPuedes golpearlos/tocarlos\nMi hermano tiene un tambor y toca el piano",
                          "Barco para navegar y coche para viajar\nTienen motor(ruedas/asientos)\nNecesitan gasolina",
                          "Van juntos/Uno complementa al otro\nLos dos son marrones",
                          "Lo que sientes cuando estás feliz\nSon opuesto/Lo contrario",
                          "Los dos están en la naturaleza\nUno se come y el otro se planta\nSe comen",
                          "Son caros/Cuestan dinero\nSe compran/Se encuentra en las tiendas\nPara viajes\nPara existir (vivir/sobrevivir)",
                          "Falta de visibilidad/No dejan ver bien\nHumo/Se parece al humo\nSon densos/Son blancos",
                          "Romántico\nDe una estatua puedes escribir un poema\nPoema para leer,estatua para observar",
                          "Sujetar/Sujeción\nHecho de metal (madera)\nBarreras\nEntan fijados en la tierra",
                          "Formas/Figuras\nRecipientes/Continentes\nMatemáticas\nRedondos",
                          "Hacen ruido/Producen sonido\nArte/Artístico\nMúsica de las ondas/Las olas suenan como la música\nMarea es un grupo de música",
                          "Estilo de vida\nAntepasados\nCaracterísticas de la vida del ser humano\nUno no se mueve y el otro si",
                          "Personas/Individuos/Humanos\nPersonas que conocer/Personas que conoces bien\nTodos tenemos de los dos",
                          "Cuando ocurren las cosas\nDecisiones y acciones que toma la gente\nCantidad de algo\nFinito",
                          "Reglas/Leyes/Normas\nFormas de disciplina\nOrdenes/Muestra de poder\nAlgo que los padres hacen/Cosas que haces a los niños"]


  constructor(private router: Router) { }

  ngOnInit() {
  }

  selectInit(num:number){
    this.indexInicial = num-1;

    if(num===4){
      this.resultados[0]=2
      this.resultados[1]=2
      this.resultados[2]=2
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
    if(this.terminacion < 3 && this.indexActual < 18){ // Verifica que no se haya cumplido la condicion de termino

      if(this.indexInicial===0){ // Si el indice inicial es 1 no se compara para verificar el retorno

        this.indexActual++;
        this.itemActual = this.items[this.indexActual];
  
      }else if(this.indexInicial===3){ // Si el indice inicial es 3 se compara para verificar el retorno
  
        //Este verificacion me dice si se cumple la condición para retornar y asi devolverse en caso de ser necesario
        if((this.indexActual === 3 || this.indexActual === 4) && this.resultados[this.indexActual]===0){
          this.retorno = true;
          this.flagRe = this.indexActual;
          this.indexActual = 3;
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
    this.router.navigateByUrl('/wais');
  }

  actualizarResultados(){
    
    for(let j = 0;j<this.resultados.length;j++){
      var x = (<HTMLInputElement>document.getElementById(""+j)).value;
      this.resultados[j] = +x;
    }
    
    this.estado = 'terminado';
  }

}
