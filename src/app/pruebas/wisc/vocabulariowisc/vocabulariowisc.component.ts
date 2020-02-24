import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vocabulariowisc',
  templateUrl: './vocabulariowisc.component.html',
  styleUrls: ['./vocabulariowisc.component.scss']
})
export class VocabulariowiscComponent implements OnInit {

  estado:String = 'instrucciones';// Esta variable me dice en que estado
  respuestaDada:String; // Variable del input de respuesta

  estimulos:String[] = ["1.jpg","2.jpg","3.jpg","4.jpg"];
  //                    [ej,1,2 ,3,4,5,6,7,8,9,10,11...]
  resultados:number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  respuestasDadas:String[] = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  consigna:String[] = ["","","","","Reloj","Sombrilla/Paraguas", "Ladron", "Vaca",
                       "Sombrero", "Valiente","Obedecer","Bicicleta","Antiguo","Alfabeto/Abecedario","Remedar","Fábula", 
                        "Emigrar","Isla","Absorber","Salir","Transparente","Molestia","Raramente","Preciso", 
                        "Obligar","Rivalidad","Disparate","Previsión","Aflicción","Arduo","Unánime","Dilatorio",
                        "Enmienda","Inminente","Aberración","Locuaz"];

  consignaActual:String = null;

  respuestas2:String[] = ["",
                          "",
                          "",
                          "",
                          "Te dice la hora/(Lleva/Muestra/MMide) el tiempo\nTe (dice/muestra) las horas y minutos\nTiene manecillas que se mueven alrededor de un disco\n Tiene manecillas y hace tic-tac[Nombra dos rasgos]",
                          "Algo que usas para que no te mojes en la lluvia [Debe contener lluvia]\nImpide que te mojes cuando llueve/Te protege de la lluvia/sol\nTe tapa para que no te (mojes/asolees)\nTe protege del sol/Te hace sombra",
                          "Un ratero/Un bandido/Un asaltante\nAlguien que (roba/asalta/toma algo de otra persona)\nSe mete por la fuerza en tu casa y (se lleva las cosas/te roba)\nUn criminal/Un malhechor/Un forajido",
                          "Un animal/Un mamífero\nTe da leche y carne\nUn animal que produce (leche/carne)/Un animal de granja",
                          "Algo que (cubre/tapa) la cabeza/Una gorra\nLo usas (para protegerte de la lluvia/cuando hace frio)\n(Lo usas sobre/Prenda para) la cabeza\nTe protege la cabeza\nLo usas para hacerte sombre y que no te de el sol en los ojos",
                          "Valeroso/Audaz/Arrojado/Intrépido/Que tiene agallas\nDefender (algo en lo que crees/tu país)\nNo (tener miedo/estar asustado/ser un cobarde)\nHacer algo que nadie más se atreve a hacer\nHacer algo así estes asustado\nEnfrentar el peligro/Hacer cosas peligrosas",
                          "Cumplir/Aceptar órdenes/Hacer caso/Seguir lo que te mandan\nSeguir (instrucciones/órdenes/reglas)/Hacer lo que se te ordena (lo que alguien dice)\nSi alguien te pide algo/No decir que no, sino sólo hacerlo",
                          "Lo usas para transportarte\nTe montas en ella y vas a muchas partes\nVehículo/Es un vehículo impulsado por el hombre/Vehículo de dos ruedas con pedales\nEs una cosa que montas/ que es mejor que caminar y te ayuda a ahorrar tiempo\nTiene (ruedas y pedales/manubrio y una cadena)[Nombra dos características]",
                          "(Muy/Realmente) viejo\nArcaico/Vetusto\nUna persona que ha vivido mucho tiempo/Algo que existió hace miles de años\nUn ancestro antiguo/Vivió en los tiempos de las cavernas\nAlgo muy histórico (del pasado)\nOpuesto de moderno/Algo que sicedió hace largo tiempo",
                          "Símbolos que se usan para escribir las palabras de nuestro idioma/Letras en cierto orden con las que puedes formar palabras\nTodas las letras/29 letras/Letras de la A a la Z\nSistema basado en letras/letras de un idioma\nLos nombres de las letras\nLas letras que usas para comunicarte\nLas usas para (leer/hacer) palabras/ Las utilizas para (deletrear/escribir) palabras",
                          "Copiar/Imitar/Personificar\nRepetir lo que alguien (hace/dice)\nDecir exactamente lo que otra persona dice\nCopiar/Duplicar",
                          "Una historia que (tiene moraleja/te deja una lección)\nUna historia que usa como personajes a los animales\nUna historia de mentira/Un cuento que no es verdad\nUn cuento de hadas/Mito/Leyenda/Una historia\nUn cuento escrito por Esopo [ejemplo]",
                          "Ir de un lugar a otro/Ir a algún lugar durante un tiempo y regresar\nMovimiento de personas o animales (para satisfaces sus necesidades/para buscar condiciones más favorables cuando cambian las estaciones)\nDejar tu país para (trabajar/establecerte/vivir) en un nuevo lugar\nDesplazarse a un lugar diferente\nLas aves migran al sur durante el invierno[Ejemplo específico]",
                          "Tierra rodeada de agua/Un lugar con agua por todo el derredor\nTierra en el océano que se forma de un volcán\nTierra en mitad del agua/Un lugar en el océano\nUn terreno que surge de otras tierras/Porción de tierra que está separada del resto de la tierra\nUn pequeño terreno en el océano",
                          "Empapar/Aspirar/Beber/Atraer/Jalar/Tomar/Succionar/Chupar\nAtraer humedad\nUna esponja absorbe (agua/líquido) [Debe contener esponja]",
                          "Partir/Salir/Abandonar/Marcharse/Evacuar\nLo opuesto de quedarse aquí/No quedarse/Irse\nIr a (otro sitio/otro lugar)/No volver\nLevantarse y salir de donde estás\nAusentarse de algo",
                          "Que puedes ver a través de él\nObvio\nClaro/Cristalino\nQue permite que pase la luz\nNo opaco",
                          "Algo que (es engorroso/te incomoda)\nAlguien que (te saca de casillas/te irrita/te provoca/te desespera)\nUn fastidioso/Una incomodidad/Algo irritante\nDolor/Algo doloroso",
                          "Que no ocurre a menudo/No sucede mucho\nQue difícilmente pasa/casi nunca\nExtraño/Desacostumbrado/Desusado\nQue no ocurre generalmente/ que no se hace de manera común",
                          "Exacto\nApropiado/Medida (cantidad) exacta\nExactamente adecuado (correcto)\nJusto en el clavo\nClaramente expresado\nCien por ciento correcto/Absolutamente correcto",
                          "Mandar a alguien a hacer alguna cosa\nImpulsar a alguien/Sentirse impulsado a hacer algo\nForzar/coaccionar\nActuar sobre una persona para comprometerla a decidir\nPresionar a alguien a hacer algo",
                          "Competencia/Concurso\nDisputa frecuente/Pelea constante\nGente que compite una con otra\nDos (personas/equipos) que compiten\nComo cuando dos (equipos/escuelas) quieren tener el primer lugar",
                          "Tontería/Simpleza/Cosas simplonas\nAlgo que es estúpido y que nunca podría pasar\nQue no tiene ningún significado\nAlgo que no tiene sentido (no es razonable/no es realista/no es lógico/no es serio/es una pérdida de tiempo)",
                          "Predecir/Predicción\nPronosticar/Anticiparse/Vaticinar\nSaber que es lo que va a suceder antes de que pase/Premonición\n(Planear/pensar) de antemano\nAdelantarse/Ver al futuro",
                          "Una (carga/dificultad) que debes soportar\nAlgún tipo de perturbación\nUn (malestar/dolencia/enfermedad/incapacidad)\nAlgo que causa dolor/Sufrimiento/Pena\nQue tienes algo que está mal [Ejemplo específico]",
                          "Que necesita gran (empelo/energía/esfuerzo)\nAgotador/Esfuerzo\nAlgo que es demasiado (complicado/difícil/cansado) de hacer\nNecesitas mucha (energía/esfuerzo) para hacerlo\nEs difícil durante mucho tiempo y te hace pagar un precio alto\nFísicamente (demandante/difícil)",
                          "De completo acuerdo/Todos están de acuerdo o a favor de algo\nElegido sin duda\nSin oposición o desacuerdo\nTodos van por lo mismo/Todos votas por el mismo sentido",
                          "Lento/Una persona pausada\nTardado/Lerdo\nQue causa demoras/Que detiene las cosas\nUna persona tediosa",
                          "Modificación/Alteración/Revisión/Correción\nUna mejoría/Un cambio para mejorar\nUn cambio que se hace a (un documento/ley/legislación)\nCorregir el camino\nAlgo que se añade después de que se ha terminado una cosa",
                          "Amenzante/A punto de suceder\nQue se aproxima en el futuro/Algo que va a suceder en cualquier momento\nAlgo que (ronda/ está proximo)\nAlgo malo que está a punto de suceder",
                          "Una (desviación/cambio/modificación) de lo normal\nAlgo que se aleja de lo típico\nUna alteración anormal\nUn deterioro en el estado mental",
                          "Parlanchín e irritante (aburrido/cansado/tedioso)\nHabla tanto que (Molesta/vansa/incomoda) a los demás\nHablador y que divaga\nQue habla mucho acerca de nada"]

  respuestas1:String[] = ["",
                          "",
                          "",
                          "",
                          "Hace tic-tac/Tiene (manecillas/un disco/números) [Nombra un rasgo]\nEs para el tiempo/¿Qué hora es?\nTe dice cuando (ir a la escuela/regresar a casa/es de noche o de día)\nUn despertador/Un cronómetro",
                          "Te mantiene seco/Para la lluvia\nLa llevas cuando llueve\nTe la pones sobre la cabeza\nLa colocas en la playa/Te mantiene fresco\nLa sostienes[Hace demosytración apropiada]",
                          "Roba/Toma las cosas\nPersona que (hace cosas ilegales/viola la ley)\nAlguien que se mete por la fuerza",
                          "(Hace/Produce) leche/carne\nAlgo que hace mú\nComo un toro pero más pequeña\n[Nombra razas ej. Angus,Brahma]",
                          "Lo usas/Te lo pones\nTe quita (el sol/la lluvia)/Te mantiene la cabeza caliente\nVa en tu cabeza\nTe cubre el pelo/Te quita el son del pelo\nEs circular y tiene una parte más alta",
                          "Salvar a alguien que está en peligro/Proteger a las personas\nHacer algo desafiante\nArriesgarse/Hacer cosas arriesgadas\nHacer frente a/Le haces frente a un bravucón\nComo cuando me ponen una inyección y me porto valiente[Ejemplo específico\nUn heroe/Alguien que hace algo heroíco]",
                          "Portarse bien/Cooperar\nPrestar atencion/Escuchar/Acatar\nHacer lo que tus (papás/maestros) te dicen\nAlgo que te mandan a hacer\nRespeto/No faltar al respeto/Honrar\n[Ejemplos de uso]",
                          "Tiene (ruedas/pedales/cadena)[Nombra una característica]\nVas a diferentes lugares en ella/Viajas con ella\nLa pedaleas\nImpulsada por el hombre\nEs como (una moto con pedales/un carro para niños)\nAlgo que montas para hacer ejercicio",
                          "Histórico/Prehistórico\nDe hace mucho tiempo\nAlgo hecho hace mucho tiempo/Antigüedad\nPasado de moda/Antes de nuestros tiempos\nPunta de flecha/Momia\nQue ha estado aquí hace mucho",
                          "ABC/De la A a la Z\nTienes que saber el abecedario para (leer/escribir)\nDeletreas/escribes con él\nLetras/Letras en un cierto (orden/secuencia)\nUna canción con las letras\n[Recita o canta todo o parte del abecedario]",
                          "Actuar como alguien\nHcaer mímica/Repetir\nFingir\nRetar/Burlarse de\nAlguien que te copia\nAlguien que te imita fingiendo tu voz\nCuando alguien dice Hola y otra persona dice lo mismo",
                          "Ficción/No es real/Algo inventado\nTu lees una fábula\nAlgo que leiste\nUna lección/Un refrán\n[Ejemplos específicos]",
                          "Mudarse\nIr a algún lado (debido al clima/cuando hace frio)\nVolar al sur/Las aves van al sur\nCuando las personas viven de otras partes a nuestro país/Dejar tu país\nCuando los animales van de caceria a un nuevo lugar\nNo quedarte en un lugar por mucho tiempo",
                          "Está en mitad del (mar/océano)/ Está rodeada de agua\nLugar en el océano/Tierra en el agua\nUn lugar en mitad del océano\nHecho de un volcán\nSuperficie de tierra\nComo Hawai/Cuba [Ejemplo particular]",
                          "Absorber humedad/Si absorbes algo en la escuela en que lo aprendes [Ejemplo de uso sin esponja]\nIntroducir [sin indicación de humedad]\nRecolectar/Reunir\nLlevarse\nComo una esponja\nRecoger/Secar\nSe lleva el agua\nConsumir/Volverse parte de",
                          "Marcharte\nIrte/Huir/Escapar\nDejar el lugar donde estas/Ir a algún lado\n (Dejar/Salir de) la casa\nDespedir/Dispersar\nMudarse\nDejar (el ejercito/la universidad)",
                          "Como cristal/Vidrio\nVes hacia afuera\nComo una ventana/Ventana transparente\nQue se puede ver a lo lejos\nVisible",
                          "Latoso/Desesperante/Engorroso/Distractor\nUn buscapleitos\nAlguien (que te cae mal/a quien no soportas)\nMosquitos/Moscar/Termitas/Roedores[Ejemplo específico]\nAlguien (malcriado/grosero)\nMi hermanito",
                          "Escaso/Poco común\nA veces/En ocasiones\nQue no pasa con regularidad\nNo mucho/Difícilmente/Apenas\nDe vez en cuando/Una que otra vez/No todo el tiempo\nQue no es probable",
                          "Exactamente/Al grano\nBien detallado\nPerfecto\nAcertado/Correcto\nEspecífico",
                          "Instar/Incitar/Estimular\nPersuadir/Convencer/Influir\nAlentar/Motivar/Inspirar\nTratar de lograr que alguien haga algo\nCuando logras que algo suceda\nEn el ejercito cuando te dan una orden\nTe ves impulsado a ello/Tentado",
                          "Pelea/Conflicto/Opositores que están uno contra otro\nCompetir\nOpositor/Competidor/Adversario\nRiñas entre hermanos o hermanas\nUn duelo\nDos paises que juegan uno contra otro\nCuando desafias a alguien\nPeleas entre dos familias/Enemistad",
                          "Tonto/Bobo/Estúpido/Loco/Ridículo/Gracioso/Simple\nAlguien que trata de ser gracioso\nNo es realmente verdadero/Es una mentira\nHacer (tonterias/bobadas/juguetear)\nActuar de manera tonta\nDifícil de creer",
                          "Ver en el tiempo\nAnticipar\nAnunciar\nVer previamente",
                          "Algo que está mal (contigo/con alguien)\nUna (herida/cortada/lastimadura)\nDesgracia\nComo una parálisis/Un brazo roto\nAlgo malo que es terrible/Algo que hiere\nQue te lastimas/Alguien te hace daño",
                          "Duro/Complicado/Difícil(Laborioso\nDura mucho tiempo/Una y otra vez/Mucha presión\nCansado/Desgastante\nTensionante/Que te destroza los nervios\nUn esfuerzo\nTe lleva hasta el límite",
                          "Todo el grupo tiene una idea\nTodos deciden sobre una cosa\nSin objeción\nTodos\nEstar de acuerdo con algo\nUn voto unánime",
                          "Que no puedes decidir\nNo puedes empezar\nNo puede decidirse a hacer algo",
                          "Revisar/Cambiar/Adaptar\nUna adición\nAñadir algo adicional/Adicionar\nAtrreglar algo",
                          "Inevitable/Irremediable\nQue va a suceder\nPronto/Apremiante\nQue esta muy cerca\nDefinitivo/certero/Peligroso\nProbable/Viable",
                          "Un (alejamiento/desviación)\nAnormal\nAlgo (diferente/inusual/inesperado)\nCambio/Defecto de carácter",
                          "Hablador/Parlanchín/Platicador\nMolesto/Irritante/Fastidioso\nQue (habla/dice) demasiado\nAburrido/Agotador"]

  respuestas0:String[] = ["",
                          "",
                          "",
                          "",
                          "Tiempo\nHace un sonido/Timbra/Te despierta\nDa vueltas\nCuelga de la pared\nUn juguete/Es redondo/Un circulo",
                          "La (sostienes/llevas/abres/cierras)\nSe llena de lluvia\nTiene un mango y es circular/Es una cosa (grande/circular/que puedes doblar)\n[Demuestra el uso de una sombrilla]",
                          "Alguien que la policía intenta atrapar\nAlguien que usa máscara sobre la cara\nUn tipo malo/Un villano\nVan a la carcel",
                          "Tienen (cuernos/cuatro patas/manchas/ubres)/[Nombra una cracterística]\nVive en (una granja/una finca/un granero)\nUna ternera\nMascota/Camina/Corre",
                          "Para los vaqueros/Un sombrero de vaquero\n[Hace una demostración de ponerse un sombrero en la cabeza]",
                          "Cuando te obligas a hacer algo\nFuerte/Recio/Bueno/Listo\nCuando harías cualquier cosa que alguien te pidiera\nSimplemente hazlo/siempre intentas hacerlo\nConfiado/Que no siente panico\nNo ser (llorón/ganllina)",
                          "Hacer algo/Hacer un buen trabajo\nHacer allgo que no deberias haber hecho/Rezongar\nObedecer a (tus padres/la ley)/Si no obedeces, te metes en problemas\nNo seguir las reglas/Que alguien te pida hacer algo y no hacerlo",
                          "Bici/De diez velocidades\nUn juguete/para jugar con ella\nSe maneja\nTiene (asiento/canasta/corneta)",
                          "Historia/Escritos antiguos\nValioso\nComo de los (egipcios/romanos)\nUna persona vieja/Una leyenda\nMisterioso/Secreto\nLegado/Raro/Que no está en cualquier parte",
                          "Palabras para hacer palabras/Palabras en orden\nAlgo que está en tu nombre\nLo puedes aprender en la escuela\nTodas las mayúsculas\nHay una canción de eso\nSopa de letras",
                          "Es una persona que habla con sus manos\nMolestas a alguien/Algo irritante\nAlguien que habla mucho\nTartamudear o balbucear",
                          "Es como las canciones de cri-cri\nComo un caballero que pelea con un dragón\nUna historia verdadera/Una pelicula",
                          "Estación/Estacional\nLo hacen las aves o algunos animales\nComo un trabajador migratrorio/Marcharse/Ir a álgun lado\n[Describe hibernar]",
                          "Está en el (agua/mar/océano)\nTierra/Lugar\nLugar al que si vas se hunde tu barco\nDonde quedas abandonado/Algo que está desierto\nAlgo que asle del agua\nUna playa\nUn lugar con (arena/árbles/volcanes)",
                          "Empapar\nConservar/Retener\nAprender/Obtener conocimiento\nMirar/Contemplar/Observar/Examinar/Investigar\n[Describe la evaporación]\nDejar entrar/Meterse/Llenar/\nQue se va/Desaparece/Mezclar/Combinar/Juntar",
                          "Decir adiós\nLas personas se van de casa\nPerder\nIr a (tienda/parque/zoológico)\nReprimir",
                          "Invisible/Alguien que desaparece\nQue lo puedes ver/manera de ver\nQue puedes pasar a través de el\nComo un espejo/Reflejo\nCopia/Exactamente igual\nPoco claro/Que es difícil ver a través de él",
                          "Alguien que es (ruin/malo) contigo\nUna mascota\nSer (malo/ruin)\nActuar tontamente",
                          "Muy poco/Pequeña cantidad\nSolo/Solitario\nQue pasa con frecuencia/Común\nTranquilo/pacífico/calmado",
                          "Breve/Sucinto\nCasi (exacto/perfecto)\nSeguro de algo\nQuiere decir que sí/Estás de acuerdo con alguien\nUna suposición/un tanteo",
                          "Amenazar\nEsperar hacer algo\nObligación\nImpedir que se haga algo\nQue te (afecta/conmueve emocionalmente)",
                          "Entre dos equipos/pasa en las escuelas\nTensión entre dos personan\nEnemigo\nEquipo/Grupo\nEnojado/Celosos/Desalmado\nRepresalia contra alguien/Venganza",
                          "Engañado/No real/De mentiras/Incorrecto\nAlgo que no se debe hacer/Inútil\nSin importancia\nSer malo/Portarse mal\nDisparado/No lo crees/",
                          "Futuro\n Ves (Algo que sucede/que está pasando)\nConsiderar\nUna manera diferente de ver algo\nQue tiene astigmatismo/Relacionado con los ojos",
                          "Tener algo que te está molestand\nUn problema/Un reto/Conflicto/Desacuerdo/Discusión\nAlgo que está mal con la mente\nCausar dolor/Lastimar a alguien [Descrcibe afectar o afección]",
                          "Recio/Pesado/Fuerte/Vigoroso\nConstante/Continuo/Sigue y sigue\nTedioso/Abrumador/Doloroso para tus músculos",
                          "Completo\nClaramente decidido/Resultado obvio\nQue casi todo el mundo está de acuerdo\nUna mayoría/Más de la mitad/Obvio/Bien sabido\nVotar/Un buen voto/Enorme/Una gran cantidad",
                          "Flojo\nObligatorio\nDiligente/Trabajador/Determinado\nTiene que ver con los ojos/Dilatar los ojos",
                          "Regla escrita\nDerechos/Libertad/ Libertad de (prensa/expresión)\nUna ley/Un decreto/Una regla/Un documento",
                          "Cercano\n[Describe eminente o inminente]\nQue puede suceder/Obvio/Que siempre está presente\nFamoso/Importante",
                          "Extraño/Raro\nAlgo tonto\nUn fantasma",
                          "Que discute demasiado\nQue habla demasiado rápido"]

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

    for(var i=num-1;i>=0;i--){
      this.resultados[i]=2
    }

    if(this.indexInicial === 4 || this.indexInicial === 6 || this.indexInicial === 8){

      this.indexActual = this.indexInicial;
      this.estimuloActual = "assets/estimulos/vocabulario-wisc/" + this.estimulos[this.indexActual];
      this.consignaActual = this.consigna[this.indexActual];

      this.estado = "aplicacion"

    }
  }

  verificarSiguienteEstimulo(){
    if(this.terminacion < 3 && this.indexActual < 22){ // Verifica que no se haya cumplido la condicion de termino

      if(this.indexActual>=0 && this.indexActual<3){ //Cambia el estado actual para no mostrar o mostrar la img cuando sea necesario
        this.estado = 'aplicacionImg';
      }else if(this.indexActual>=3){
        this.estado = 'aplicacion';
      }
      
      if(this.indexInicial===4){ // Si el indice inicial es 4 se compara para verificar el retorno
  
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
          
          if(this.countRe===2){
            this.retorno = false;
            this.indexActual = this.flagRe + 1;
            if(this.indexActual<4){
              this.estimuloActual = "assets/estimulos/vocabulario-wisc/" + this.estimulos[this.indexActual];
            }
            this.consignaActual = this.consigna[this.indexActual];
            this.estado = 'aplicacion';
            
          }else{
            this.indexActual--;
            if(this.indexActual<4){
              this.estado = 'aplicacionImg';
              this.estimuloActual = "assets/estimulos/vocabulario-wisc/" + this.estimulos[this.indexActual];
            }
            this.consignaActual = this.consigna[this.indexActual];
          }
          
        }
      }else if(this.indexInicial===6){ // Si el indice inicial es 4 se compara para verificar el retorno
  
        //Este verificacion me dice si se cumple la condición para retornar y asi devolverse en caso de ser necesario
        if((this.indexActual === 6 || this.indexActual === 7) && this.resultados[this.indexActual]===0){
          this.retorno = true;
          this.flagRe = this.indexActual;
          this.indexActual = 6;
        }
  
        if(!this.retorno){ //En caso de no haber fallado los items 6 0 7 sigue aumentado a partir de ahí
          this.indexActual++;
          this.consignaActual = this.consigna[this.indexActual];
        }else{ //En caso de que halla fallado el item 6 o el 7 vuelve al item 5 y empieza a disminuir desde ahí
          
          if(this.countRe===2){
            this.retorno = false;
            this.indexActual = this.flagRe + 1;
            if(this.indexActual<4){
              this.estimuloActual = "assets/estimulos/vocabulario-wisc/" + this.estimulos[this.indexActual];
            }
            this.consignaActual = this.consigna[this.indexActual];
            this.estado = 'aplicacion';
            
          }else{
            this.indexActual--;
            if(this.indexActual<4){
              this.estado = 'aplicacionImg';
              this.estimuloActual = "assets/estimulos/vocabulario-wisc/" + this.estimulos[this.indexActual];
            }
            this.consignaActual = this.consigna[this.indexActual];
          }
          
        }
      }else if(this.indexInicial===8){ // Si el indice inicial es 4 se compara para verificar el retorno
  
        //Este verificacion me dice si se cumple la condición para retornar y asi devolverse en caso de ser necesario
        if((this.indexActual === 8 || this.indexActual === 9) && this.resultados[this.indexActual]===0){
          this.retorno = true;
          this.flagRe = this.indexActual;
          this.indexActual = 8;
        }
  
        if(!this.retorno){ //En caso de no haber fallado los items 6 0 7 sigue aumentado a partir de ahí
          this.indexActual++;
          this.consignaActual = this.consigna[this.indexActual];
        }else{ //En caso de que halla fallado el item 6 o el 7 vuelve al item 5 y empieza a disminuir desde ahí
          
          if(this.countRe===2){
            this.retorno = false;
            this.indexActual = this.flagRe + 1;
            if(this.indexActual<4){
              this.estimuloActual = "assets/estimulos/vocabulario-wisc/" + this.estimulos[this.indexActual];
            }
            this.consignaActual = this.consigna[this.indexActual];
            this.estado = 'aplicacion';
            
          }else{
            this.indexActual--;
            if(this.indexActual<4){
              this.estado = 'aplicacionImg';
              this.estimuloActual = "assets/estimulos/vocabulario-wisc/" + this.estimulos[this.indexActual];
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
    this.router.navigateByUrl('/wisc');
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
