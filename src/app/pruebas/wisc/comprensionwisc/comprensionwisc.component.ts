import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comprensionwisc',
  templateUrl: './comprensionwisc.component.html',
  styleUrls: ['./comprensionwisc.component.scss']
})
export class ComprensionwiscComponent implements OnInit {

  estado:String = 'instruccion';// Esta variable me dice en que estado
  respuestaDada:String; // Variable del input de respuesta
  
  resultados:number[] = new Array(21).fill(0);
  respuestasDadas:String[] = new Array(21).fill("");
  consigna:String[] = ["1. ¿Por qué la gente se cepilla los dientes?",
                       "2. ¿Por qué las personas deben comer verduras?",
                       "3. ¿Por qué los coches tienen cinturones en los asientos?",
                       "4. ¿Por qué es importante que los policías usen uniforme?",
                       "5. ¿Qué se supone que deberías hacer si te encuentras la cartera o bolsa de una persona en una tienda?",
                       "*6. ¿Qué deberías hacer si ves que está saliendo mucho humo por la ventana de la casa de tu vecino?",
                       "7. ¿Qué debes hacer si un niño o niña mucho más pequeño que tú empieza a pelear contigo?",
                       "*8. ¿Cuáles son algunas ventajas de tener bibliotecas públicas?",
                       "9. ¿Por qué es importante que el gobierno inspeccione la carne antes de que la vendan?",
                       "10. ¿CUáles son las ventajas de hacer ejercicio y mantenerse activo?",
                       "11. ¿Por qué es importante disculparse cuando sabes que heriste o lastimaste a alguien?",
                       "*12. Dime algunas razones por las que debes apagar las luces cuando nadie las está usando",
                       "13. ",
                       "14. ",
                       "15. ",
                       "16. ",
                       "17. ",
                       "18. ",
                       "19. ",
                       "20. ",
                       "21. "];

  general:String[] = ["Reconocimiento de que cepillarse los dientes los limpia; previene el deterioro, enfermedad, caries y otros problemas dentales; o mejora la apariencia",
                      "Reconocimiento de que las verduras son parte de una dieta nutritiva y son necesarias para la salud apropiada, la energía, la fortaleza o el crecimiento",
                      "Reconocimiento de que los cinturones sirven como precaución de seguridad, para proteger a las personas o para detenerlas en su asiento durante un accidente",
                      "Indicación clara de que el uniforme es un medio para identificar con facilidad y rápidamente a una persona como oficial de policía. Para mostrar quién tiene la autoridad de imponer la ley",
                      "Intentar regresarla a su dueño, ya sea buscando una identificación del propietario y regresandola o, entregandola  al dueño de la tienda o a un policía",
                      "Notificar al departamento de bomberos o de policía\nLlamar a la policía; Reportarlo (al departamento de bomberos, a la policía)\nPedirle a un adulto que llame (al departamento de bomberos, a la policía)\nPrender la alarma incendios; Tirar la manija de la alarma de incendios\nLlamar y (contestar las preguntas del despachador, decir dónde está el incendio)\nIr a la (estación de bomberos, policía) y decirles\n\nGeneral: Ejecutar una acción hasta que lleguen los bomberos\nPedir ayuda; Obtener ayuda\nLlamar (una ambulancia, al hospital)\nDecirle a mi (mamá papá); Pedirle a mis padres que (ayuden; vayan a ver qué pasa)[notificar a un adulto]\nAdvertir a los vecinos; Tocar en la puerta y decirles que su casa se está incendiando\nIr a ver si están bien; Revisar cómo están los vecinos [verificar la seguridad de los vecinos]\nLograr que salgan de la casa; Ver que todo el mundo haya salido [evacuar a los vecinos]\nAveriguar qué está pasando; Verificar que en realidad sea un incendio; asegurarse de que no están haciendo un asado en el jardín\nIr a ayudar; Ayudarles\nHacer que todos salgan de la casa porque se podría incendiar [Evacuar la propia casa]\nQuedarse lejos para no salir lastimado\nConseguir un extintor; Conseguir una manguera",
                      "Tomar la iniciativa de no pelear con él o ella (autocontrol)",
                      "Reconocimiento de que las bibliotecas públicas permiten el acceso libre y público a la información\nPermite que todas las personas tengan acceso a los libros y a la información; Las personas que no tienen dinero pueden (leer, aprender) gratis; Puedes ver un libro en lugar de comprarlo\nPuedes usar gratis las computadoras\nTodo mundo puede usarlas\n\nGeneral: reconocimiento de que las bibliotecas públicas son un lugar donde se puede consultar información sobre temas relacionados con la escuela, el trabajo, la investigación; Aumentar tu conocimiento personal; Para congregarle como comunidad;\nPuedes (revisar, pedir prestados) libros; Puedes solicitar los libros para llevártelos a casa\nEs un buen lugar para (hacer investigación, estudiar, leer, trabajar); Puedes encontrar información para una tarea\nPuedes averiguar más que con los libros que tienes en (la escuela, casa); Hay varios ejemplares del mismo libro\nPara aprender; Puedes (leer y aprender más, obtener más educación)\nPuedes (aprender más sobre alguna cosa que te agrade, leer algo interesante, encontrar información que quieres)\nPuedes ir a cualquier hora y leer; Es cómodo\nPara que leas mejor; Te ayuda a leer más; Puedes aprender a leer\nPuedes emplear las computadoras de allí; Utilizar las computadoras para investigar\nLas bibliotecas ayudan a la comunidad a reunirse; Puedes (participar en las actividades de la biblioteca, unirte a clubes de lectura)\nEs un lugar para conocer personas",
                      "Refleja una conciencia sobre la importancia de los inspectores de carne para el público en general (es decir, que mucha gente está protegida por ellos o se vería afectada de manera adversa si no existiera)",
                      "Reconocimiento de que el ejercicio es bueno para el cuerpo al aumentar la salud, la capacidad física y cardiovascular",
                      "Para conservar una amistad al admitir tu cula e intentar que la otra persona se sienta mejor al tener consciencia de tu pena y de que buscas perdón",
                      "Reconocimiento de la conservación de los recursos energéticos\nPara que no desperdicies la electricidad; Para ahorrar (electricidad, energía, luz, combustible)\nPorque podrías necesitar la electricidad en el futuro y ya no tendrías;\nPara que no nos quedemos sin energía; Para que no se acabe la energía\nDisminuir la contaminación que generan las plantas de energía; Maltratas el ambiente si no lo haces\n\nGeneral: reconocimiento de la conservación de los recursos económicos\nPara que no aumente la cuenta de electricidad; Porque de otra manera la cuenta sería alta\nPara ahorrar dinero; Para que no tengas que pagar tanto; Porque desperdicias dinero\nCuesta mucho dinero tenerlas prendidas; Cuesta dinero\nSe gastarían los focos; Se pueden fundir los focos\nPara que la luz no (se vaya, se apague)",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      ""];

  respuestaCorrecta:String[] = ["Para mantener su higiene; es higiénico\nMata los microbios; elimina los microbios de los dientes\nPara mantenerlos limpios; para que no se ensucien\nPara impedir que salgan (caries, enfermedades de las encías)\nPara que tus (dientes, encías) sean sanos\nPara que los dientes no ( se echen a perder, se pudran)\nPara que no se forme (placa, sarro)\nPara que no te salgan (llagas, enfermedades)\nPara proteger tus dientes\nPara que los dientes ( sean más fuertes, estar en mejor condición)\nPara que (permanezcan blancos, no se pongan amarillos)\nPara tener un buen aliento",
                                "Para una dieta balanceada; Para comer algo de cada grupo de alimentos\nContienen vitaminas (minerales, nutrientes, fibra, proteínas); Incluyen elementos que tu cuerpo necesita\nEs sano; Te mantienen sano\nPrevienen enfermedades (ataques cardíacos, cáncer, males o enfermedades)\nPara tener (fuerza, energía); Para volverte (más fuerte, más activo)\nTe ayuda a (la digestión, la vista, los huesos, la memoria) [Nombra una parte o función específica del cuerpo]\nPara (crecer, volverte grande)",
                                "Para impedir que la gente se lastime en un accidente de coche; Para reducir las lesiones en un choque\nPara que no salgas volando por el parabrisas; Para que no te caigas durante un accidente\nPara mantener seguras a las personas en un accidente de coche; Para estar seguro; Como precaución de seguridad\nPara proteger a la gente de un choque; Como precaución\nPara que no te golpees (con el tablero, con el volante, la cabeza); Para detenerte en un accidente\nTe mantiene fijo en un punto; Te mantiene adentro; Previene que salgas volando hacia delante\nPueden salvar tu vida en un accidente",
                                "Para que sepas quienes son; Para identificarlos en caso de una urgencia\nPara que la gente sepa que son (genuinos, reales); Para probar que son policias\nLes proporciona honor y respeto; Para que la gente no le falte respeto\nPara que las personas puedan saber que son quienes imponen la ley; Para demostrar su autoridad",
                                "Verificar si trae identificación y (regresarla, hablarle al propietario) [Debe contener ambas partes]\nTratar de descubrir a quién le pertenece y regresarla; Encontrar al dueño y devolverla [Debe contener ambas partes]\nLlevarla a la policía\nEnviarla por correo si existe una identificación\nDevolverla; Entragarla al (cajero, dependiente, guardia de seguridad, oficina de objetos perdidos)\nInformar en el sistema de sonido de la tienda",
                                "Una respuesta que refleje ambas ideas generales",
                                "No pelear( golpearla, pegarle, devolverle el golpe)\nLa violencia no resuelve nada; pelearnos bueno\nHablar con ella de manera sensata; Averiguar Qué le sucede; Ver cuál es el problema;Tratar de parar la pelea\nDecirle que no quieres pelear; Enseñarle a no pelear, Tranquilizarlo(a)\nDejarlo en paz; Ignorarlo\nEvitar la pelea; alejarse (voltearse, irse)",
                                "Respuesta que refleje cuando menos dos de las ideas generales",
                                "Para asegurarse de la calidad de la carne; Porque la mala calidad podría poner en peligro la vida de las personas\nPara prevenir una epidemia; Porque se podrían trasmitir enfermedades infecciosas\nPara garantizar que la gente obtenga carne buena; Para que las personas no le vendan carne podrida a la gente; Porque no pueden dejar que haya carne en mal estado en la tienda\nPara que la gente no sufra (enfermedades, envenenamientos por alimentos, salmonela, el mal de las vacas locas); Para que la gente no se enferme por carne en mal estado",
                                "Te mantiene sano\nPara tu capacidad cardiovascular, Reduce tu frecuencia cardiaca\nReduce el tiesgo de un ataque cardiaco; Mantiene tu presión sanguínea baja\nEs bueno para (tu corazón, pulmones, circulación)",
                                "Para hacerle sentir mejor; Para que la persona se sienta aliviada; Para que no se sienta (mal, herida)\nPara hacer las paces; Para que no haya sentimientos negativos\nPorque es bueno para los dos aclarar las cosas\nPara que no pierdas a un amigo; Para que vuelvan a ser amigos\nPara que (te sientas mejor, no te sientas culpable)\nPara que la persona te perdone; Para recuperar su confianza",
                                "Una respuesta que refleje ambas ideas generales",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                ""];

  respuestaIntermedia:String[] = ["Para que no tengas que ir al dentista; para que la cuenta del dentista no sea alta (I)\nEs bueno para (ellos, los dientes, encías, tu boca) (I)\nPara que los dientes no se (dañen, lastimen) (I)\nPara que los dientes no tengan bichos (I)\nPara que no se te caigan los dientes; para que no pierdas los dientes",
                                  "Son buenas para ti; Ayudan a tu cuerpo (I)\nPara perder perder peso; Para estar delgado: para control del peso\nTe ayudan a ver mejor; Para que puedas ver en la oscuridad\nPrevienen problemas de (calambres, estómago)\nSi solo comieran (dulces, comida chatarra) se enfermarian",
                                  "Para salvar la vida de las personas [sin mención de accidente](I)\nEn caso de un accidente (I)\nEs la ley; Para que no te multen; Porque te detendría una patrulla",
                                  "Para que sepas que están (de guardia, trabajando)(I)\nPara que la gente no haga nada malo; Para disuadir la conducta (mala, criminal)(I)\nPara que las personas cooperen\nPara que sepas que estas seguro; Para sentirte seguro",
                                  "Verificar si trae (identificación, nombre, dirección, número telefónico)(I)\nBuscar a quien le pertenece (I)\nTratar de regresarla (I)\nPreguntar a la gente alrededor si ellos la perdieron; Dársela si se le cayó (I)\nDársela a mi mamá y que ella encuentre al dueño\nLlevarsela a su casa; Hablarles por teléfono\nInformar de ello en un cartel (volante); Poner un anuncio en el periódico",
                                  "Una respuesta que refleje una de las ideas generales",
                                  "Decirle que no lo quieres lastimar (I)\nTranquilizarme; Convencerme de no pelear (I)\nDecirle que ( se vaya, me deje en paz, lo olvide)\nDecirle que (se detenga, le pare, se calme, no  pelee, sea un niño agradable)\nPedirle a (mi maestra,mamá, papá) que la detenga",
                                  "Respuesta que refleje una de las ideas generales",
                                  "Para que la gente no (se enferme, muera) (I)\nPorque de otro modo se pondría en peligro la vida de las personas (I)\nPor seguridad; Para hacerla segura (I)\nPodría tener (microbios, enfermedades); La carne podría estar (echada a perder, podrida, envenenada) (I)\nPara asegurarse de que (no tiene nada malo, la carne es buena); La carne podría estar mala (I)\nPodría tener (bichos, pelo, navajas) dentro de ella\nPara asegurarse de que es (comestible, fresca, no está caducada)",
                                  "Te mantiene en forma; Conserva la buena condición (I)\nEs bueno para (ti, tu cuerpo); Puedes dañar tu cuerpo si no lo haces (I)\nPara (perder, subir de) peso; Para (adelgazar, quemar grasa); Conservar el peso (I)\nAumenta tu metabolismo (I)\nTe ves mejor; Mejora como te ves(I)\nTe sientes mejor acerca de ti mismo; Vivirás más tiempo (I)\nPara obtener (energía, resistencia)(I)\nEs bueno para tus (huesos, musculos, piernas, articulaciones)\nTe ayuda a (dormir, relajarte); Reduce el estrés\nTe hace más fuerte; Los musculos se hacen (más grandes, más fuertes)\nMejora la flexibilidad; Te ayuda a aflojarte\nTe ayuda a jugar mejor en los deportes; Haces mejor las cosas que la gente que no hace ejercicio\nPara que no te vuelvas (flojo, te la pases sentado en una sillón); Para que hagas más cosas",
                                  "Para que (no se enojen contigo; no se queden enojados para siempre; no piensen que eres malo)(I)\nPara evitar que el problema se empeore; Para arreglar la situación; Para hacer más chico el problema (I)\nPorque fue tu culpa; porque estuvo mal lo que hiciste (I)\nPorque los (molestaste, hiciste llorar); Para no lastimar sus sentimientos\nPorque debes respetar sus sentimientos; Una muestra de respeto\nPorque es (amable, de buena educación); Es grosería no hacerlo",
                                  "Una respuesta que refleje una de las ideas generales",
                                  "",
                                  "",
                                  "",
                                  "",
                                  "",
                                  "",
                                  "",
                                  "",
                                  ""];                                

  respuestaErronea:String[] = ["Es bueno (I)\nSi comes dulces o bebes refrescos\nTe lavas los dientes para ir al dentista\nPorque la gente piensa que eres sucio si lo haces\nSe supone que debes hacerlo; tus padres te obligan",
                               "Previene la muerte; para seguir vivos(I)\nPara que no te de hambre; Porque saben bien\nPara subir de peso; Para no ponerse demasiado delgados\nPorque te lo dicen tus papás\nPara verte bien (bonito)\nPara que te toque postre",
                               "Para amarrarte (I)\nEvitan que la bolsa de aire te lastimen (I)\nPara que no tengas un accidente de tránsito (I)\nAtraviesa tu pecho o regazo\nPorque mis papas me hacen ponermelo\nPara que los puedas usar",
                               "Para asumir su papel como oficiales de policía; Porque es parte de su trabajo (I)\nPara que puedan (ayudar a la gente, dar infracciones, llevar personas a la cárcel (I)\nPara que nos portemos bien con ellos (I)\nPara que se vean bien vestidos (I)\nPara que se tengan(metal, chalecos) debajo de su uniforme y que no los lastime una bala\nPara que puedan cargar todas sus cosas\nPara que puedan llevar un arma; Para que puedan disparar cuando les disparan\nPara que no se ensucien su ropa\n[Cualquier respuesta que haga referencia a bomberos]",
                               "No quedarte con ella (I)\nRecogerla (I)\nDársela a mi (mamá, papá) (I)\nPreguntarle al personal de la tienda si es suya(I)\nDejarla en el mismo lugar; Regresarla a donde la encontré [No realizar ninguna acción]\nEntregarla al cartero; Echarla en un buzón de correo\nGritar; Decirles\nTirarla\nConservarla; Ver cuánto dinero tiene",
                               "Llamar a la operadora(I)\nIr a la casa de junto(I)\nAlejarse del fuego (I)\nGritar “fuego” (I)\nApagar el fuego (I)\nRomper la ventana y dejar salir el humo\nEsperar a los bomberos\nDetenerse, dejarse caer al suelo y rodar\nEntrar en pánico",
                               "Nada; No hacer nada (I)\nDetenerlos (I)\nSimplemente dejaría que peleará(I)\nDecir lo que sientes; Disculparte; Darles lo que quieren (I)\nDecirle a mi (maestra, mamá, papá) (I)\nPedir ayuda\nDecir “te voy a acusar”\nTe meterias en problemas si te pelearas\nSujetarlo; Pegarle levemente; Empujarlo\nDecirle que me deje en paz o se las verá conmigo\nHacer como si pelearas; Cansarlos sin lastimarlos\nGolpearlos; Pelear con ellos; Castigarlos; Pegarles",
                               "(Obtienes, ves) los libros; Libros (I)\nMás personas pueden ir a una biblioteca pública (I)\nEs un lugar tranquilo para pensar; Nadie te molesta (I)\nAyudan a satisfacer las necesidades de las personas (I)\nPor diversión; Por entretenimiento (I)\nImpide que te metas en problemas; Te dan algo bueno por hacer\nTienen (bibliotecario, a alguien) que te ayuda",
                               "Para inspeccionar la carne (I)\nPorque es posible que algunas de las personas que trabajan allí no sepan cómo envolver la carne (I)\nPara que no demanden a las compañías\nPara asegurarse de que es carne\nPorque podría (estar cruda, tener sangre, tener huesos)\nPara que esté fría\nPara asegurarse de que ya se les acabó y necesitan conseguir más",
                               "Para tener una vida más feliz; Te hace sentir feliz (I)\nPara (crecer, volverte grande)(I)\nTe da algo que hacer (I)\nSe supone que debes hacerlo\nEs divertido; Agradable",
                               "Porque es (bueno, amable)(I)\nEs lo correcto; Está mal no hacerlo (I)\nTú querrias que sse disculparan; Los tratas bien para que te traten bien; Es una regla de oro (I)\nPorque lo heriste\nPara que no lo hagas de nuevo; Para impedir que lo vuelvas a hacer\nPara que tu vida sea mejor\nPorque (tienes, deberías, necesitas) hacerlo\nPara que no (sigas enojado, quedes mal)\nPorque después podrías querer algo\nSi fueras su amigo no se enojarían\nPorque los (maestros, padres) se enojan\nPara que no te metas en problemas. para que no te acusen",
                               "Para que no te corten la luz (I)\nPara que no (comiences un incendio, quemes la casa)\nEs más seguro\nSe podría volar un fusible; Un foco podría explotar\nPara que no exploten los cables de luz; Para que no te caiga un rayo\nPorque tus padres se enojan si no lo haces\nAlguien podría robar tu casa",
                               "",
                               "",
                               "",
                               "",
                               "",
                               "",
                               "",
                               "",
                               ""];

  comentario:String[] = ["(I) ¿Qué quieres decir? o dime más acerca de ello\n† Si el niño no proporciona una respuesta de 2 puntos, diga: Las personas se lavan los dientes para mantenerlos limpios y prevenir la caries. Cepillarte los dientes también puede hacer que tu sonrisa se vea mejor y ayuda a mantener tu aliento fresco",
                         "(I) ¿Qué quieres decir? o dime más acerca de ello",
                         "(I) ¿Qué quieres decir? o dime más acerca de ello",
                         "(I) ¿Qué quieres decir? o dime más acerca de ello",
                         "(I) ¿Qué quieres decir? o dime más acerca de ello",
                         "(I) ¿Qué quieres decir? o dime más acerca de ello\n* Si la respuesta del niño refleja sólo una idea general, pedir una segunda respuesta diciendo: Dime otra cosa que debes hacer si ves que está saliendo humo espeso por la ventana de la casa de tu vecino",
                         "(I) ¿Qué quieres decir? o dime más acerca de ello",
                         "(I) ¿Qué quieres decir? o dime más acerca de ello\n*Si la respuesta del niño refleja sólo una idea general, se le pide una segunda respuesta planteando: Dime algunas otras ventajas de tener bibliotecas públicas",
                         "(I) ¿Qué quieres decir? o dime más acerca de ello",
                         "(I) ¿Qué quieres decir? o dime más acerca de ello",
                         "(I) ¿Qué quieres decir? o dime más acerca de ello",
                         "(I) ¿Qué quieres decir? o dime más acerca de ello\n*Si la respuesta del niño refleja sólo una idea general, se le pide una segunda respuesta planteando: Dime algunas otras razones por las que deberías apagar las luces cuando nadie las está a utilizando",
                         "",
                         "",
                         "",
                         "",
                         "",
                         "",
                         "",
                         "",
                         ""];

  consignaActual:String = null;
  respuestaCorrectaAct:String = null;
  respuestaErroneaAct:String = null;
  comentarioAct:String = null;
  
  indexInicial:number = null;
  indexActual:number = null;

  terminacion:number = 0; //Esta variable me dice cuantos ceros consecutivos tuvo el paciente

  retorno:boolean = false; // Esta variable me ayuda a controlar el uso de la regla del retorno
  countRe:number = 0; //Esta variable me dice cuando se puede salir de la condición de retorno
  flagRe:number = null;//Esta variable me ayuda a decir en que posicion quedo el paciente antes de entrar al retorno

  constructor() { }

  ngOnInit() {
  }

  testInit(num:number){
    this.indexInicial = num
    this.indexActual = 0;

    this.consignaActual = this.consigna[this.indexActual];
    this.respuestaCorrectaAct = this.respuestaCorrecta[this.indexActual];
    this.respuestaErroneaAct = this.respuestaErronea[this.indexActual];
    //this.respuestaErroneaAct = this.respuestaErroneaAct.replace(/\n/g, "<br />");
    var newline = String.fromCharCode(13, 10);
    //this.respuestaErroneaAct = this.respuestaErroneaAct.replace(/\\n/g, String.fromCharCode(13, 10) )
    this.comentarioAct = this.comentario[this.indexActual];

    this.estado = 'aplicacion';
  }

  verificarSiguienteEstimulo(){
    if(this.terminacion < 5 && this.indexActual < 32){ // Verifica que no se haya cumplido la condicion de termino      
      
      //Este verificacion me dice si se cumple la condición para retornar y asi devolverse en caso de ser necesario
      if((
          ((this.indexActual === 4 || this.indexActual === 5) && this.indexInicial === 2) ||
          ((this.indexActual === 9 || this.indexActual === 10) && this.indexInicial === 8) ||
          ((this.indexActual === 11 || this.indexActual === 12) && this.indexInicial === 11)
         )
          && this.resultados[this.indexActual]===0){
        this.retorno = true;
        this.flagRe = this.indexActual;
        this.indexActual = 2;
      }

      if(!this.retorno){ //En caso de no haber fallado los dos primeros reactivos por cada caso
        this.indexActual++;
        this.consignaActual = this.consigna[this.indexActual];
        this.respuestaCorrectaAct = this.respuestaCorrecta[this.indexActual];
        this.respuestaErroneaAct = this.respuestaErronea[this.indexActual];
        this.comentarioAct = this.comentario[this.indexActual];

        //this.radioPunto = true;
        //this.radioPunto = false;

      }else{ //En caso de que halla fallado los dos primeros reactivos por cada caso
        
        if(this.countRe===2){
          this.retorno = false;
          this.indexActual = this.flagRe + 1;
          this.consignaActual = this.consigna[this.indexActual];
          this.respuestaCorrectaAct = this.respuestaCorrecta[this.indexActual];
          this.respuestaErroneaAct = this.respuestaErronea[this.indexActual];
          this.comentarioAct = this.comentario[this.indexActual];

          //this.radioPunto = true;
          //this.radioPunto1 = false;
          
        }else{
          this.indexActual--;
          this.consignaActual = this.consigna[this.indexActual];
          this.respuestaCorrectaAct = this.respuestaCorrecta[this.indexActual];
          this.respuestaErroneaAct = this.respuestaErronea[this.indexActual];
          this.comentarioAct = this.comentario[this.indexActual];

          //this.radioPunto = true;
          //this.radioPunto = false;
        }
        
      }

    }else{
      this.estado = 'terminado';
    }
  }

  verificarResultado(){
    this.respuestasDadas[this.indexActual] = this.respuestaDada;
    this.respuestaDada = null;
    //console.log("Respuesta: ", this.respuestasDadas[this.indexActual], " Punt", this.radioPunto);

    /*if(this.radioPunto){
      this.cambiarPuntuacion(1);
    }else{
      this.cambiarPuntuacion(0);
    }*/
  }

  cambiarPuntuacion(punt:number){
    if(punt === 0){
        this.resultados[this.indexActual] = punt;
        this.terminacion++;

        if(this.countRe>0){
          this.countRe=0;
        }
    }else{
      if(this.retorno){
        if(punt===1){
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
    for(var i=0;i<this.resultados.length;i++){
      total = total + this.resultados[i];
    }
    return total;
  }

  //En caso de que el estado sea revision

  aRevisar(){
    this.estado = 'revision';
  }
  
  regresarAct(){
    this.estado = 'terminado';
  }

  actualizarResultados(){
    
    for(let j = 0;j<this.resultados.length;j++){
      var x = (<HTMLInputElement>document.getElementById(""+j)).value;
      this.resultados[j] = +x;
    }
    
    this.estado = 'terminado';
  }

}
