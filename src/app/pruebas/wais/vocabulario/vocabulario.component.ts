import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vocabulario',
  templateUrl: './vocabulario.component.html',
  styleUrls: ['./vocabulario.component.scss']
})
export class VocabularioComponent implements OnInit {

  estado:String = 'instrucciones';// Esta variable me dice en que estado
  respuestaDada:String; // Variable del input de respuesta

  estimulos:String[] = ["01.jpg","02.jpg","03.jpg"];
  //                    [ej,1,2 ,3,4,5,6,7,8,9,10,11...]
  resultados:number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  respuestasDadas:String[] = ['','','','','','','','','','','','','','','','','','','','','','',''];
  consigna:String[] = ["","","","Guante","Manzana", "Desayuno", "Cama",
                       "Espejo", "Silencioso","Generar","Compasión","Remordimiento","Meditar","Confiar","Esquivar", 
                      "Valiente","Fortaleza","Evolucionar","Distinción","Opaco","Peculiar","Contrastar","Plagiar", 
                    "Tangible","Reacio","Iniciativa","Audaz","Paliar","Solidario","Pragmatico"];

  consignaActual:String = null;

  respuestas2:String[] = ["",
                          "",
                          "",
                          "Prenda para las manos\nCubren(protegen) las manos\nTe las pones en las manos/Te los quitas de las manos\nAlgo que llevas en las manos\nProtegen las manos del frio",
                          "Futa/Piza de fruta",
                          "Primera comida (alimento) del día\nComida a primera hora\nAlimento que ayuda a emprender el día con fuerza",
                          "Mueble para dormir (descansar)\nEn (sobre) lo que dormimos\nLugar para dormir/Donde duermes",
                          "Idea de objeto e idea de reflejo\nLo que devuelve la imagen (reflejo) de algo\nLo que refleja nuestra imagen\nUn objeto para reflejarse",
                          "Que no hay ruido/Ausencia de ruido/Que no se oye nada\nQue no hace ruido\nEstar callado",
                          "Procrear/Engendrar/Reproducir\nCrear/Producir\nCausar alguna cosa/Hacer que algo suceda/Causar la existencia de algo",
                          "Idea de pena que surge por el malestar de otro\nPiedad\nSentimiento de pena (pesar/lástima/tristeza) por una persona\nQue alguien te de pena",
                          "Idea de inquietud interna e idea de una mala acción\nPesar(Arrepentimiento/arrepentirse) por algo malo que has hecho\n Pena por no haber hecho lo que debías",
                          "Recapacitar/Cavilar/Reflexionar\nPensar profundamente en algo (en si mismo)",
                          "Creer en (fiarse de) alguien\nEsperar con firmeza y seguridad\nContar a alguien tus secretos\nCustodiar\nTner certeza de que algo o alguien no nos va a defraudar",
                          "Idea de evitar algo con destreza\nConseguir no hacer algo molesto hábilmente (con rapidez)\nEludir/Librarse de algo\nEvitarse una pregunta (un obstaculo/a una  persona) para no hacerle frente",
                          "Persona que actúa con firmeza (determinación) ante el peligro o cualquier situación díficil\nPersonas con fuerza de carácter (coraje/heroísmo)\nAlguien que actúa con valor\nA pesar de los miedos se enfrentan a ellos",
                          "Fuerza y vigor\nResistencia (coraje/fuerza moral) en la adversidad\nRecinto fortificado/Defensa natural que tiene un lugar por su propia situación\nAlgo inexpugnable",
                          "Idea de cambio en el tiempo e idea de mejora\nCambiar y crecer a lo largo del tiempo\nMadurar\nAvanzar en la especie/Adaptarse cada vez más a las circunstancias",
                          "Elegancia\nHacer que algo se diferencie de algo\nVer un objeto diferenciado de los demás\nConocer la diferencia/diferenciar de algo",
                          "Que no deja atravesar (pasar) la luz\nSombrío/Sin Luz/Tenebroso/Oscuro\nPersona triste y melancólica\nPersona mediocre",
                          "Idea de propio o privativo de cada persona (cosa)\nDiferente de lo corriente u ordinario\nCaracteristico/Distintivo/Especial/Original/Especifico/Singular/Típico",
                          "Comprobar la exactitud de las cosas\nMostrar notable diferencia o condiciones opuestas",
                          "Idea de robar o copiar una obra literaria (artística) de otro y hacerla pasar por propia\nPresentarse como el autor de los escritos de otro",
                          "Tocable/Palpable/Perceptible\nQue se puede tocar\nQue se puede percibir de manera precisa\nEn real/Comprobable",
                          "Idea de mostrar resistencia a hacer algo o contrario a algo\nQue se resiste/Está poco dispuesto a hacer algo\nContrario a algo\nQue no permite que una acción se ejerza sobre él",
                          "Idea de hacer o actuar e idea de que procede de uno mismo\nUna persona que actúa sin que nadie se la haya dicho\nAcción de adelantarse a otros en algo",
                          "Que muestra arrebatamiento (osadia/conducta imprudente)\nAtrevido/Temerario/Arriesgado\nCapaz de acometer empresas arriesgadas o peligrosas\nValor y osadía",
                          "Aliviar (aminorar/atenuar) el sufrimiento\nDisminuir la enfermedad (el dolor físico/dolor moral) de un acontecimiento perjudicial",
                          "Idea de vinculación o unión con algo\nVinculado/Relacionado/Unido\nQue se identifica con una causa común\nSe dice de las personas que responden jurídicamente las unas de las otras",
                          "Que se busca en los hechos (en la acción/práctica/experiencia)\nPráctico\nSe adapta a las circunstancias\nRelacionado con la lingüística"]
  respuestas1:String[] = ["",
                          "",
                          "",
                          "Para las manos\nPrenda de vestir\nSe ponen/Para proteger cuando hace frio\nSe ponen para hacer ejercicio(limpiar/trabajar)",
                          "Comida/Algo que comes\nTiene piel(semilla/corazon)\nCrece en los arboles\nEs saludable(nutritiva/buena para ti)",
                          "Comida/Lo que comemos\nMomento del día en el que se toma café y galletas\nLo primero del día/La comida más importante del día",
                          "Tiene colchón, mantas y sábanas\nLugar de descando\nMueble/Cosa de metal (madera)\nPara dormir",
                          "Idea de objeto o idea de reflejo\nPara verse (mirarse) en el\nRefleja tu imagen\nVidrio/Cristal/Objeto",
                          "Contrario de ruidoso\nReservado/Ser callado/Calmado",
                          "Inventar\nHacer/Construir",
                          "Idea de pena o idea de preocupación por el otro\nPena/Lástima/Preocupación/Cuidado\nEmpatía\nPerdón hacia alguien\nComprensión/Consideración/Sentimiento humanitario",
                          "Idea de inquietud interna o idea de una mala acción\nSentimiento de pena (culpa) que te entra\nArrepentirse de haber hecho algo\nPena/Dolor\nQue te pesa la conciencia/Cargo de conciencia",
                          "Pensar\nPensarse algo mucho/Pensar la forma de realizar algo/Pensar en algo que hiciste antes\nAsimilar (comprender) una idea",
                          "Compartir/Hacer participes\nContar algo solo a un amigo íntimo\nContar con alguien",
                          "Evitar/Evitar un golpe (ataque)/Evitar algo por poco\nApartarse/Desviar\nNo dejarse atrapar",
                          "Voluntad/Determinación/Superación personal\nAtrevido/temerario/Fuerte/Resistente\nCuando no se tiene miedo\nContrario de debilidad (cobardía)\nAfrontar la realidad sea la que sea",
                          "Fuerza/Tener mucha fuerza/Ser fuerte\nMuralla/Muros/Algo que te protege de los peligros que te rodean\nDureza de carácter/Persistencia\nValor/Coraje/Resistencia",
                          "Idea de cambio en el tiempo o idea de mejora\nCambiar/Crecer/Progresar/Transformarse\nIr de un estado a otro\nCambiar a mejor/Mejorar\nAvanzar con el tiempo",
                          "Premiar/Homenajear/Dar un premio\nDiferente de algo o alguien\nComparar/Separar\nAlgo que sobresale (que tiene algo especial)",
                          "Que no se puede ver a través de el\nContrario de transparente/Que no es transparente\nQue no se puede entender/Incompresible",
                          "Diferente\nCaracteristico de una persona[Limito el concepto a las personas]\nFuera de lo normal/Que se ve poco\nQue pertenece a una persona",
                          "Comparar/Distinguirse/Comprobar/Verificar\nVer si es verdad",
                          "Robar algo, como un escrito a otra persona\nCopiar/Copiar algo que ha sido patentado",
                          "Evidente\nPuede verse/Visible\nAlgo que puedes tener\nAlgo concreto\nQue se toca en un punto",
                          "Retricente\nNo querer decir\nDudoso (temeroso) de hacer o decir algo",
                          "Pasar a la acción\nDar el primer paso/Emprender/Proponerse algo\nHacer algo de forma espontánea",
                          "Valiente\nQue no tiene miedo\nCapaz de realizar cualquier acción\nSin freno/Sin control",
                          "Moderar/Mitigar/Calmar\nFrenar algo malo",
                          "Hacer algo con alguien/Compartir\nDefender una causa común con otras personas\nApoyarse mutuamente\nUna unión para algo\nContrario de egoista",
                          "Real/Realista\nConcreto/Racional/Lógico\nQue presta atención a la realidad\nOperativo\nDirecto"]
  respuestas0:String[] = ["",
                          "",
                          "",
                          "Para el invierno\nVienen por pares\nEncajan\nEstan hechos de piel(algodón)\nSeñala la mano",
                          "Va a tu boca\nEstá buena/Es dulce",
                          "Por las mañanas/Un buen momento del día",
                          "Lugar para relajarse (sentirse bien)\nDormir",
                          "Mueble\nMirarse/Verse",
                          "Estar silencio\nSin palabras\nTranquilidad/Calma",
                          "Empezar/Fomentar\nMotivar/Desarrollar\nGnerar electricidad (energía)",
                          "Tolerancia/Amor/Apasionado\nSentimiento/Emoción\nAfecto por alguien\nTernura/Bondad",
                          "Rabia/Lástima/Compasión/Piedad\nCuando alguien te da pena\nHacer algo malo (algo que no estuvo bien)",
                          "Estar solo\nComportarse bien/Estar callado\nEstado de relajación",
                          "Esconder (guardar) un secreto\nNo tener miedo de alguien",
                          "No decir nada/No responder\nHuir\nConseguir no hacer algo\nQue no quiere hacerse",
                          "Calidad humana\nEntusíasmo\nContrario de pereza\nSeguir adelante\nQue no se deja llevar por las emociones",
                          "Capacidad para parecer fuerte\nAlgo grande\nVirtud",
                          "Aprender\nPasar el tiempo\nAdaptarse a lo malo",
                          "Lujoso/Ostentoso/Clase\nPersona que se sale de lo normal\nDiferente",
                          "Transparente/Translúcido/Borroso/Vidrioso\nPerdidad de visibilidad\nQue no da una visión neta de las cosas",
                          "Extraordinario/Unico/Raro\nSimple\nPopular",
                          "Analizar opiniones\nVer más allá\nDar veracidad a las cosas",
                          "Robar/Engañar\nBeneficiarse de la obra de otro\nFalsear",
                          "Tarea fácil de realizar/Viable\nNo cambiable\nEstá tan claro que no se ve",
                          "Timido\nApartarse de/No seguro de\nNo estar de acuerdo con alguien\nSentirse rechazado/Que sufre rechazo",
                          "Empezar algo\nHacerse cargo de algo\nHacer algo nuevo\nHacer algo solo",
                          "Rápido/Listo/Inteligente/Extravertido\nExtravagante/Que va llamando la atención\nCapaz de hacer cosas",
                          "Quitar/Erradicar/Ayudar/Proteger/Frenar",
                          "Ayudar a alguien/Mantener a alguien/Hacer algo por alguien\nAsociación caritativa/Comportamiento altruista\nGFormar un grupo/Tener espíritu de grupo",
                          "Persona que no opina de religión\nProblemático"]

  estimuloInicial:String = null;
  estimuloActual:String = null;
  indexInicial:number = null;
  indexActual:number = null;

  terminacion:number = 0; //Esta variable me dice cuantos ceros consecutivos tuvo el paciente

  retorno:boolean = false; // Esta variable me ayuda a controlar el uso de la regla del retorno
  countRe:number = 0; //Esta variable me dice cuando se puede salir de la condición de retorno
  flagRe:number = null;//Esta variable me ayuda a decir en que posicion quedo el paciente antes de entrar al retorno

  constructor(private router: Router) { }

  ngOnInit() {
  }

  imagenInit(num:number){
    this.indexInicial = num-1
    this.estimuloInicial = this.estimulos[this.indexInicial];

    if(num===5){
      this.resultados[0]=2
      this.resultados[1]=2
      this.resultados[2]=2
      this.resultados[3]=2
    }

    if(this.indexInicial === 0){

      this.indexActual = this.indexInicial;
      this.estimuloActual = "assets/estimulos/vocabulario/" + this.estimulos[this.indexActual];
      this.consignaActual = this.consigna[this.indexActual];

      this.estado = "aplicacionImg"

    }else if(this.indexInicial === 4){

      this.indexActual = this.indexInicial;
      this.estimuloActual = "assets/estimulos/vocabulario/" + this.estimulos[this.indexActual];
      this.consignaActual = this.consigna[this.indexActual];

      this.estado = "aplicacion"

    }
  }

  verificarSiguienteEstimulo(){
    if(this.terminacion < 3 && this.indexActual < 22){ // Verifica que no se haya cumplido la condicion de termino

      if(this.indexActual>=0 && this.indexActual<2){ //Cambia el estado actual para no mostrar o mostrar la img cuando sea necesario
        this.estado = 'aplicacionImg';
      }else if(this.indexActual>=2){
        this.estado = 'aplicacion';
      }
      
      if(this.indexInicial===0){ // Si el indice inicial es 0 no se compara para verificar el retorno
        
        this.indexActual++;
        if(this.indexActual<3){
          this.estimuloActual = "assets/estimulos/vocabulario/" + this.estimulos[this.indexActual];
        }
        this.consignaActual = this.consigna[this.indexActual];
  
      }else if(this.indexInicial===4){ // Si el indice inicial es 4 se compara para verificar el retorno
  
        //Este verificacion me dice si se cumple la condición para retornar y asi devolverse en caso de ser necesario
        if((this.indexActual === 4 || this.indexActual === 5) && this.resultados[this.indexActual]===0){
          this.retorno = true;
          this.flagRe = this.indexActual;
          this.indexActual = 4;
        }
  
        if(!this.retorno){ //En caso de no haber fallado los items 6 0 7 sigue aumentado a partir de ahí
          this.indexActual++;
          this.consignaActual = this.consigna[this.indexActual];
        }else{ //En caso de que halla fallado el item 6 o el 7 vuelve al item 5 y empieza a disminuir desde ahí
          
          if(this.countRe===3){
            this.retorno = false;
            this.indexActual = this.flagRe + 1;
            if(this.indexActual<4){
              this.estimuloActual = "assets/estimulos/vocabulario/" + this.estimulos[this.indexActual];
            }
            this.consignaActual = this.consigna[this.indexActual];
            
          }else{
            this.indexActual--;
            if(this.indexActual<4){
              this.estimuloActual = "assets/estimulos/vocabulario/" + this.estimulos[this.indexActual];
            }
            this.consignaActual = this.consigna[this.indexActual];
          }
          
        }
      }

    }else{
      this.estado = 'terminado';
    }
  }

  guardarRespuesta(){
    var element = (<HTMLInputElement>document.getElementById("res"));
    var x = element.value;
    this.respuestasDadas[this.indexActual] = x;
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

    this.verificarSiguienteEstimulo()

  }

  getResultado():number {
    var total = 0;
    for(var i=1;i<this.resultados.length;i++){
      total = total + this.resultados[i];
    }
    return total;
  }

  //En caso de que el estado sea revision

  aRevisar(){
    this.estado = 'revision';
  }

  changeState(){
    this.estado = 'seleccion'
  }
  
  aceptar(){
    this.router.navigateByUrl('/wais');
  }

  regresarAct(){
    this.estado = 'terminado';
  }

  actualizarResultados(){
    
    for(let j = 1;j<this.resultados.length;j++){
      var x = (<HTMLInputElement>document.getElementById(""+j)).value;
      this.resultados[j] = +x;
    }
    
    this.estado = 'terminado';
  }
}
