import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comprension',
  templateUrl: './comprension.component.html',
  styleUrls: ['./comprension.component.scss']
})
export class ComprensionComponent implements OnInit {


  estado:string = 'instruccion';
  
  itemNumber:number = 0;

  initialItem:number = 0;

  consigna:String[]=["Porque la gente lleva reloj?",
                    "Porque lavamos la ropa?",
                    "Que deberia hacer usted  si se encuentra en la calle un sobre cerrado con la direccion escrita y el sello sin usar?",
                    "Porque nos interesamos, cada vez mas en las energias renovables?",
                    "Digame algunas razones por las que es importante que un pais tenga buenas relaciones con otro pais.",
                    "Que interes puede tener un inventor en patentar una idea?",
                    "Porque hay museos?",
                    "Porque se necesita receta para comprar ciertos medicamentos?",
                    "Porque fue importante, para algunas civilizaciones,la creacion  de la escritura?",
                    "Porque es importante para la mayoria de la gente, tener amigos?",
                    "Digame algunas razones por las que algunas personas piensan que deberiamos explorar el espacio.",
                    "Porque es importante el estudio de la historia?",
                    "Porque exije el estado que algunos profesionales obtengan el titulo antes de ofrecer sus servicios al publico?",
                    "Que quiere decir el proverbio \"si caes siete veces, levantate ocho\"?",
                    "Porque algunas personas piensan que es importante proteger a los animales en peligro de extincion?",
                    "Porque cuesta mas un terreno en la ciudad que en el campo?",
                    "Digame algunas razones por las que conviene  que haya un regimen de libertad condicional.",
                    "Que quiere decir el refran \"una golondrina no hace verano\"",]

  badAnswer:String[] =  ["Es un símbolo de estatus\nSon pesados (ligeros)",
                        "Hacer la colada (P)\nEs bueno\nPara tener algo que ponernos",
                        "Dejarlo donde estaba/No tocarlo\nTirarlo a la papelera\nAbrirlo",
                        "Para ahorrar (P)\nPara ahorrar energía (P)\nPor el calor (la calefacción)\nSe ha abusado de las energías naturales",
                        "Para ayudar a otros (P)\nPara compartir ideas \nPodemos necesitar algo en el futuro (P)\nPara permitir turismo e inmigración(P)",
                        "Para ser famoso\nPara solucionar algo \nPara ayudar ",
                        "Para visitarlos \nPara mirar cosas\nPara comprar cuadros \nPara la historia (P)\nPara la importancia de los objetos (P)",
                        "Por ley/El gobierno lo exige(P)\nPara estar seguros de que estamos tomando lo correcto(P)\nCualquiera podría comprarlos sin receta(P)",
                        "Para expresarse (entenderse)(P) \nPara conservar(P)",
                        "Porque es humano\nLa amistad es importante\nEs mejor que la familia\nLos elegimos",
                        "Curiosidad/Aventura/Aprendizaje(P)\nPérdida de tiempo y dinero\nDar a los astronautas trabajo",
                        "Para conocerla\nPara sentirse más completo \nPara no ser ignorantes ",
                        "Para que no se hagan negocios fraudulentos \nPara hacerlo legal",
                        "Piensa en positivo \nSi te caes, levántate\nPon la otra mejilla ",
                        "Todas las vidas son importantes \nSe merecen vivir\nNo queremos que mueran \nDebemos aprender de los animales \nEs nuestras responsabilidad (P)",
                        "Hay más cosas en la ciudad (P)\nEs más difícil vivir en la ciudad (P)\nLos edificios son más grandes, por eso cuestan más",
                        "Vaciar las cárceles (P)\nDejar que salgan antes (P)\nLos criminales no deben tener un régimen de libertad condicional ",
                        "No hay que creer todo lo que ves(P)\nPara hacer fuerza se tienen que juntar las personas\nPorque debe haber más de una"]


  mediumAnswer:string[] = ["Concepto general de estetica \nPara ir a la moda/ Por estética\nComo accesorio (complemento/joya)",
                           "Concepto general de apariencia\nPara que no huela (P)\nPara conservarla mejor (P)\nPara tener buena apariencia",
                           "Concepto general que haga referencia un método poco eficaz o inusual de hacer llegar la carta a su destinatario\nLlevarlo a esa dirección/Llevarlo a la policía\nDevolverlo al remitente \nLlevarlo a la oficina de objetos perdidos",
                           "Concepto general vago de protección del medio ambiente o agotamiento de los recursos naturales \nPara no seguir malgastando los recursos naturales de la tierra (P)\nPorque la Tierra está enferma y hay que salvarla",
                           "Una respuesta que indique uno de los conceptos generales anteriores",
                           "Concepto general que haga referencia a la protección de los derechos de propiedad del inventor\nPara evitar que copien(plagien) una idea\nPara que no roben (se apropien de) un invento",
                           "Concepto general vago de conservar o exponer el patrimonio o concepto vago de aprendizaje\nPara ver (poner) objetos antiguos (raros/de valor/huesos de dinosaurios/lo que hacen los artistas)\nPara ver que había en el pasado/para recordar la historia(P)\nPara ver que hay en otros países",
                           "Concepto general vago que haga referencia al daño personal\nLos medicamentos son peligrosos\nPuede crear el hábito(P)\nAlguno crean adicción(P) \nEl médico conoce la dosis adecuada(P)\npor seguridad(P)",
                           "Concepto general vago de transmisión del conocimiento o permanencia de la historia \nPara la comunicación/La enseñanza/El desarrollo de los conocimientos(P)\nPara escribir lo que sucede(P) \nPermite evolucionar/Permite el desarrollo de las civilizaciones(P)",
                           "Una respuesta que indique uno de los conceptos generales anteriores",
                           "Una respuesta que indique uno de los conceptos generales anteriores",
                           "Una respuesta que indique uno de los conceptos generales anteriores",
                           "Una respuesta que indique uno de los conceptos generales anteriores",
                           "Concepto general que haga referencia a la persistencia sin referencia clara al fracaso \nAprender de los errores (P)\nNo abandonar(P)\nSeguir intentándolo(P)",
                           "Concepto general que haga referencia a la importancia de los animales sin una referencia a la interdependencia de las especies\nLos animales pueden desaparecer(P)\nMantener las formas de vida (biodiversidad)(P)\nNo puedes destruir una especie \nDesaparecerían para siempre",
                           "Concepto general que haga referencia vaga a una oferta limitada sin un a clara implicación de una mayor demanda, o viceversa\nEscasea en la ciudad/Menos terreno en la ciudad/Mayor demanda del terreno de la ciudad(P)\nPorque hay más ventajas en la ciudad: teatros, tiendas, transportes, servicios…[ mencion de  más de una ventaja en la ciudad] (p)\nHay (vive) más gente en la ciudad que en el campo (P)",
                           "Una respuesta que indique uno de los conceptos generales anteriores",
                           "Concepto general que haga referencia vaga a la idea de no generalizar a partir de un único hecho \nPorque hagas una cosa bien no significa que todo lo vayas a hacer bien\nSe necesita más de una cosa para decir que se conseguido lo que se pretendía\nUna sola cosa no lo hace todo\nNo hay que generalizar (P)"]


  rightAnswer:string[] = ["Concepto general de tiempo\nPara decir (saber) la hora\nSaber lo tarde (temprano) que es \nPara llegar o estar a tiempo/ Para no llegar tarde (antes)\nPara mantener la noción del tiempo",
                          "Concepto general de higiene \nIdea de limpieza (de quitar la suciedad)\nHigiene\nPorque se ensucian ",
                          "Concepto general de envío de postal \nEcharlo a uno buzón\nMandarlo por correo ",
                          "Concepto general de protección del medio ambiente o agotamiento de los recursos naturales\nPara proteger el medio ambiente (el planeta)\nPorque las energías tradicionales se agotan ( son contaminantes)\nPorque el petróleo escasea\nPara evitar el calentamiento del planeta",
                          "Una respuesta que indique al menos dos de los conceptos generales anteriores",
                          "Concepto general que haga referencia a los motivos económicos o simple notoriedad \nPara obtener beneficios/Para hacerse rico \nPara ser reconocido por su trabajo/ para ser reconocido ",
                          "concepto general de conservar o exponer el patrimonio o concepto de aprendizaje \nPara exponer (preservar/mostrar/conservar/presentar) las piezas \nPara exponer pinturas (estatuas/cuadros/piezas arqueológicas/cualquier otro objeto más específico)\nPara conservar el patrimonio \nPara cultivarse/aprender/instruirse/informarse/educarse",
                          "concepto general que haga referencia al daño personal asociado al uso de medicamentos sin prescripción\nPara controlar el uso \nPorque pueden hacerte daño \nPara no enfermar o intoxicarse\nPorque puedes tomar una dosis inadecuada\nPorque pueden tener efectos secundarios perjudiciales ",
                          "Permite transcribir el saber\nHa permitido conservar los vestigios y la memoria \nPara dejar una prueba tangible de su existencia\nPrueba escrita de lo que ha existido \nPara poder escribir la historia/Para recuperar la historia",
                          "Una respuesta que indique al menos dos de los conceptos generales anteriores",
                          "Una respuesta que indique al menos dos de los conceptos generales anteriores",
                          "Una respuesta que indique al menos dos de los conceptos generales anteriores",
                          "Una respuesta que indique al menos dos de los conceptos generales anteriores",
                          "Concepto general de no abandonar ante el fracaso \nSeguir intentándolo a pesar de los errores\nNo defraudarse o venirse abajo tras un fallo\nIncluso si las cosas van mal continúa hacia delante",
                          "Concepto general que haga referencia a la idea de la interdependencia de las especies (cadena trófica)\nMantener el balance natural (el ciclo de vida/ la cadena alimentaria)\nCuando unas especies mueren afectan a otras\nTodos los animales contribuyen al ecosistema",
                          "Concepto general que haga referencia a la mayor demanda con la implicación de una oferta  limitada \nLey de la oferta y la demanda \nPorque hay menos terreno y la gente lo quiere más \nHay más gente que lo quiere y, al ser más valorado, sube el precio",
                          "Una respuesta que indique al menos dos de los conceptos generales anteriores",
                          "Concepto general que haga referencia a la idea de no generalizar a partir de un único hecho\nNo conviene sacar conclusiones generales de un hecho aislado\nNo se puede predecir por una simple apariencia\nUn caso no hace la regla\nDe un caso concreto no puede deducirse la generalidad"]


  concepts:string[] = ["","","","",
                      "-Mantener o formar alianzas/Mantener la paz/Prevenir la guerra \nPara que te ayude si recibes el ataque de otro\nPara no volver a la situación de guerras del pasado  \n\n-Facilitar el intercambio de ideas culturales, información o costumbres\nPara compartir conocimientos\nPara conocer la forma de vida y cultura de otros países\n\n-Proporcionar asistencia en tiempos de crisis o desastres naturales \nPara que te ayuden si hay un terremoto un incendio mandando equipos de rescate o acogiendo a la población\npara que te ayuden económicamente en caso de necesidad \n\n-Facilitar el comercio/Compartir recursos, tecnología o información científica\nPara poder exportar los productos de un país\NPara conocer los avances de investigación o científicos de otro país",
                      "","","","",
                      "-Por la intimidad, la cercanía, el apoyo emocional\nPara ser feliz se necesita intimidad (cercanía) \nPara nuestro bienestar emocional \nPara tener un punto de apoyo (ánimo/consuelo)\nPorque se tiene a alguien con quien contar (en quien apoyarse)\n\n-Para tener compañía, relaciones sociales, vida social\nLas personas son seres sociales\nEs una necesidad humana/Propia de nuestra naturaleza\nLa vida sería triste (solitaria) sin los amigos\nPara ser feliz se necesita compañia\n\n-Para compartir actividades sociales de intereses\nPara tener a alguien con quien salir (hacer cosas/divertirse)\nPara estar con personas que tienen los mismos gustos (intereses)",
                      "-Para buscar recursos naturales u otros lugares de la vida para el ser humano \nBuscar otras alternativas de vida\nPara saber si es posible vivir fuera de la Tierra\nPara buscar otros planetas en los que vivir \n\n-Para hacer avanzar o promover la ciencia y la tecnología \nPara descubrir lo que hay afuera\nPara estudiar las condiciones gravitatorias en el espacio\n\nPara buscar otras formas de vida o amenazas para nuestro planeta \nPara saber si existen extraterrestres \nPara conocer si estamos solos en el universo \n\n-Explorar lo desconocido es la naturaleza humana\nPorque el ser humano es curioso por naturaleza\nPorque nos gusta saber (explorar)",
                      "-Para aprender del pasado para entender el presente y el futuro\nPara no repetir los errores/Aprender de los errores\nAplicar lo que se aprende del pasado, al presente y al futuro\nLo que ocurrió en el pasado influye en el presente y el futuro \n\nPara el conocimiento y la comprensión de nosotros mismos, de lo que somos \nPara saber de dónde venimos \nPara saber cómo hemos llegado a lo que somos actualmente\nConocer tus ancestros\n\n-Para el conocimiento y la comprensión de la sociedad \nPara entender la cultura de las sociedades\nPara conocer la evolución política de tu país",
                      "-Para la protección al público\nPara no hacer daño a las personas\nPara que no te hagan daño\nPara estar seguro de que haran bien su trabajo \n\n-Para asegurar la cualificación profesional  \nPara estar seguro de que poseen los conocimientos necesarios\nPara estar seguro de que saben hacer su trabajo \nPara evitar el intrusismo profesional",
                      "","","",
                      "-Para recompensar la buena conducta de los presos \nPorque han demostrado buena conducta \nPorque se portan bien \n\n-Reinserción de los de los presos en la sociedad, “segunda oportunidad”\nPara darles la oportunidad de empezar de nuevo \nPorque cada uno tiene derecho a una nueva oportunidad \n\n-No hay suficientes plazas en las cárceles, masificación.\nPorque hay demasiada gente en las cárceles \nPara poder encarcelar nuevos delincuentes\n\n-Para realizar un control (seguimiento) de los delincuentes.\nPara que no le pierdan las piesta\nPara intentar evitar que vuelvan a cometer un delito",""]

  respuestaDada:string='';

  retornoHecho:boolean = true; // Esta variable me ayuda a controlar el uso de la regla del retorno
  retorno:boolean = false; // Esta variable me ayuda a controlar el uso de la regla del retorno
  countRe:number = 0; //Esta variable me dice cuando se puede salir de la condición de retorno

  fallo:number = 0;

  resultados:number[] = new Array(18).fill(0);

  respuestas:string[] = new Array(18).fill("");

  cambiarPrueba(key){

    console.log(this.itemNumber)
    if(this.estado==='test' && this.itemNumber<17 && this.itemNumber!==0){

      if(this.retorno){
        if(key===2){
          this.countRe++;
          if(this.countRe===2){
            this.retorno=false;
            this.retornoHecho=false;
            this.itemNumber=this.initialItem
          }
        }
        else {
          this.countRe=0
          this.resultados[this.itemNumber]=key
        }        
      }
      else{
        if(key===2){
          this.resultados[this.itemNumber]=key
          this.fallo=0
        }
        else{

       
          if((this.itemNumber===3 || this.itemNumber===4) && this.retornoHecho){
            this.retorno=true;
            this.initialItem=this.itemNumber;
            this.itemNumber=2;
          }
          else if(key==0) this.fallo++;

          this.resultados[this.itemNumber]=key

          if(this.fallo===3)this.estado='resultados';
        }
        
      }

      if(this.retorno)this.itemNumber--;
      else this.itemNumber++;

      this.respuestas[this.itemNumber-1]=this.respuestaDada

      this.respuestaDada=''

    }
    else {
      this.estado='resultados'
      this.resultados[this.itemNumber]=key
    }

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

  imagenInit(item){
    
    
    if(item===2){
      this.resultados[0]=2
      this.resultados[1]=2

    }
    this.initialItem=item
    this.itemNumber=item

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


