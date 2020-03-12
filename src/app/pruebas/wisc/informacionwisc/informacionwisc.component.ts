import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacionwisc',
  templateUrl: './informacionwisc.component.html',
  styleUrls: ['./informacionwisc.component.scss']
})
export class InformacionwiscComponent implements OnInit {

  estado:String = 'instruccion';// Esta variable me dice en que estado
  respuestaDada:String; // Variable del input de respuesta
  
  resultados:number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  respuestasDadas:String[] = ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'];
  consigna:String[] = ["† 1. Enseñame tu pie",
                       "† 2. Señalando hacia su propia nariz, pregunte: ¿Cómo se llama esto?",
                       "3. Nombra algo que comas",
                       "*4. ¿Cuántas orejas tienes?",
                       "5. ¿Cuántos años tienes?",
                       "6. ¿Cuántas patas tiene un perro?",
                       "*7. ¿Qué día le sigue al jueves?",
                       "*8. Nombra dos tipos de monedas",
                       "9. ¿Qué mes sigue después de marzo?",
                       "10. ¿Qué se debe hacer para que el agua hierva?",
                       "*11. ¿Cuántos días hay en una semana?",
                       "*12. ¿Cuántos días hay en un año?",
                       "13. ¿Quién fue Cristóbal Colón?",
                       "*14. ¿Cuáles son las cuatro estaciones del año?",
                       "15. ¿Cuántas cosas forman una docena?",
                       "*16. ¿Qué hace el estómago?",
                       "17. ¿Cuál mes tiene un día adicional cada cuatro años?",
                       "*18. ¿Qué es un fósil?",
                       "19. ¿Qué es la capa de ozono?",
                       "20. ¿Cómo regresa el oxígeno al aire?",
                       "21. ¿Qué son los jeroglíficos?",
                       "*22. ¿Cuál país en el mundo tiene la población más grande?",
                       "23. ¿Cuál es la capital de Grecia",
                       "*24. ¿Por qué se oxida el hierro?",
                       "25. ¿Qué hace que las hojas de las plantas sean verdes?",
                       "*26. ¿Quién fue Charles Darwin?",
                       "27. ¿De qué están hechos los diamantes?",
                       "28. ¿Quién fue Confucio?",
                       "29. ¿Qué es el solsticio de invierno?",
                       "30. ¿Qué es un barómetro?",
                       "*31. ¿Qué es la fisión nuclear?",
                       "*32. ¿Qué distancia hay entre la ciudad de México y la ciudad de Nueva York?",
                       "33. ¿De dónde se obtiene la resina natural?",];

  respuestaCorrecta:String[] = ["[Toca, señala o indica de cualquier otro modo su propio pie o el del examinador]",
                                "Nariz",
                                "Manzana; Carne; Cereales; Frutas [nombra cualquier cosa que constituya un alimento común de los humanos]\nDesayuno; Comida; Cena; Bocadillo",
                                "[Indica dos de manera verbal o física]",
                                "[Indica verbal o físicamente la edad correcta]",
                                "[Indica verbal o físicamente cuatro]",
                                "Viernes",
                                "$1.00; $2.00; $5.00; $10.00; $20.00; 050; 020; 010\nPesos y centavos; Dólar y penny; Chelines y peniques\n[Nombra dos monedas de cualquier denominación, incluso extranjeras]",
                                "Abril",
                                "[Describe cualquier medio para calentar agua]\nCalentarla; Exponerla al calor\nPonerla en la estufa; Ponerla en el microondas\nHacer que se caliente; Ponerla sobre algo caliente\nEncender el horno; Ponerla en una sartén caliente\nCocinarla; Calentarla con vapor; Cocerla\nHacer que la temperatura suba hasta (100° o 200°, etc.)",
                                "[Indica verbal o físicamente siete]\n[Nombra los siete días]",
                                "365, 365¼; [365 con cualquier fracción o decimal]\n365 excepto en los años bisiestos en que hay 366",
                                "El descubridor de (América, las Indias occidentales, el Nuevo Mundo)\nLo mandó la reina de España para establecer una ruta de comercio\nNavegó para probar que la tierra era redonda\nNavegó hacia América\nUn explorador; Navegó por el océano para descubrir tierra\nNavegó en (la Nina, la Pinta y la Santa María)\nUn explorador que quería encontrar una mejor ruta para la India; Un hombre que deseaba explorar las Indias",
                                "Verano, otoño, invierno, primavera (en cualquier orden)",
                                "[Verbal o físicamente indica 12]",
                                "Digiere alimentos; Es parte del sistema digestivo; Prepara la comida para la digestión Toma nutrientes de los alimentos; Convierte los alimentos en energía\n(Procesa, Descompone, Muele) la comida\n(Mantiene, Absorbe, Mezcla) la comida\nForma ácido\nConvierte la comida en líquido",
                                "Febrero",
                                "Algo orgánico que (se ha convertido en piedra, está conservado en piedra)\nAlgo que se convirtió (en piedra, roca)\nHueso (endurecido, petrificado, fosilizado)\nHueso (antiguo, prehistórico, viejo); Un hueso de hace mucho tiempo\nImagen que dejó una (hoja, huella, animal, dinosaurio) en una piedra\nUna (impresión, vestigio) de algo sobre roca\n(Impresión, marca) dejada por algo de hace mucho tiempo\nRestos de algo viejo; Residuos de algo conservado por la naturaleza\nEvidencia de algo vivo en el pasado\nUn hueso de dinosaurio; Huella de un dinosaurio\n",
                                "Parte de la atmósfera que bloquea (la radiación, los rayos UV); Parte de la atmósfera que protege a la tierra\nCapa protectora en el exterior de la tierra\nCapa que nos protege de los rayos UV\nMantiene fuera los rayos del sol; Nos protege del sol; Protege a la tierra\nCubierta de gases que cubre a la tierra; Una capa de gas\nAtmósfera; Parte de la atmósfera\nTres átomos de oxígeno; Capa de O3",
                                "Fotosíntesis\nPlantas; Árboles; Hojas; Flores",
                                "Forma antigua de (escritura, letras, alfabeto, símbolos, palabras, lenguaje)\nEscritura con figuras; Sistemas de escritura que usan dibujos; Dibujos que se usan para la comunicación\n(Caracteres, Símbolos) sagrados; Caracteres que tienen un significado oculto; Símbolos que representan palabras\nEscritura que usaban los (egipcios, chinos); Escritura que está en las pirámides\n(Escritura pictográfica, Símbolos) griegos; Símbolos (árabes, hebreos)*",
                                "China\nRepública Popular China",
                                "Atenas",
                                "Oxidación; Oxígeno\nUna reacción química; Cambios químicos\nHumedad; Aire húmedo; Humedecimiento",
                                "Clorofila; Cloroplasto\nQuímicos que absorben la luz\nLo que absorbe la luz para la fotosíntesis\nColor pigmentario",
                                "Desarrolló la teoría de (la evolución, la supervivencia del más apto)\nEstudió la selección natural\nEscribió (El Origen de las Especies, El Origen del Hombre, Selección Natural)\nEstudió a los animales en las islas Galápagos",
                                "Carbón; Carbón (cristalizado, comprimido); Carbón bajo presión\nHulla (con alguna transformación, calentada); Hulla bajo presión; Hulla comprimida\nGrafito\nCarboncillo bajo presión",
                                "(Filósofo, pensador) chino\nLíder religioso chino; Líder chino\n(Educador; Maestro; Estudioso) chino\nChino que escribió (frases sencillas, proverbios); Escritor chino\n(Líder, maestro) religioso\nDesarrolló una forma de (filosofía, religión); Filósofo; Sabio\nHombre que escribió refranes sabio",
                                "Día más corto del invierno; La noche más larga del año; El día con menos sol\nPrimer día del invierno\nCuando los días empiezan a hacerse más largos\nCuando la tierra está (con la inclinación, en el ángulo) más alejado del sol\nEl sol está más bajo en el cielo en el hemisferio norte\n20, 21, 22, 23 de diciembre",
                                "Mide la presión (atmosférica, en el arre, barométrica)\nUn indicador de la presión; Algo que mide la presión\nPredice los cambios de clima; Dice si va a llover",
                                "Átomos que se dividen y crean energía\nUna fuente de energía radioactiva\nForma de energía; Crea potencia\nCuando el núcleo se divide\nSeparación de átomos de uranio\nExplosión de un átomo",
                                "4 800 a 6 400 kilómetros\n3 000 a 4 000 milla",
                                "De las plantas; De los cortes que se hacen a las plantas; De la secreción de las plantas; De la savia de las plantas; De los fósiles; De los fósiles animales y vegetales\nDe los árboles; De los troncos; Del pino, del álamo; De los cortes que se hacen a los árboles; De los cortes que se hacen a los troncos de los árboles; De los capullos de los árboles"];

  respuestaErronea:String[] = ["[Cualquier otra respuesta]",
                               "[Cualquier otra respuesta]",
                               "Alimentos; Plantas; Animales (I)\nPasto; Paja\nTierra; Piedras [nombra atgo no comestible]",
                               "[Indica verbal o físicamente cualquier otro número que no es dos]\n[Señala a sus propias orejas o a las del examinador] (I)",
                               "[Indica verbal o físicamente la edad incorrecta]",
                               "[Indica verbal o físicamente cualquier otro número]",
                               "Ayer; Hoy; Mañana (I)*\n[Nombra cualquier otro día]",
                               "Peso; Centavo; Dólar [Nombra una moneda de curso legal, incluso extranjera](I)*\nFicha [nombra cualquier moneda que no sea de curso legal]\nOro; Plata; Monedas de oro y plata\nMexicana; Águila y sol; Estadounidense\nBillete; Cheque",
                               "[Nombra cualquier otro mes]",
                               "Prenderla; Ponerla en una olla (I)\nEstufa; Horno; Fuego (I)\nPonerla en agua caliente\nHervir huevos",
                               "[Indica verbal o físicamente cinco] (I)*\n[Indica verbal o físicamente cualquier otro número]\n[Nombra menos de siete días]\nUn montón; Muchos",
                               "366 (I)*\n[Nombra cualquier otro número]",
                               "Descubrió que la tierra era redonda (I)\nUn (marino, capitán); Navegó en 1492 (I)\nViajero; Un hombre que viajó por el mundo (I)\nEl hombre que descubrió la electricidad; Científico\nUn Europeo/Italiano\nDescubridor (de Asia, Veracruz); Fundador de Estados Unidos; Navegó por toda América\nHombre; Tipo; Persona\nConoció a los indígenas de América",
                               "[Nombra menos de las cuatro estaciones] (I)*\nDe ferrocarril, autobuses, metro\nDe policía, bomberos, de servicio\nDe radio, televisión, telecomunicaciones\nDel vía crucis",
                               "Una docena de tortillas (I)\n[Verbal o físicamente indica cualquier otro número]",
                               "Es un órgano; Parte de tu cuerpo (I)*\nEs donde va la comida; Para lo que comes (I)\n(Gruñe, hace ruidos, te dice) cuando tienes hambre\nTe ayuda a comer\nDa dolor de estómago; Duele",
                               "[Nombra cualquier otro mes]\nEl año bisiesto",
                               "Hueso; Diente; Hueso en el suelo (I)\nRestos de un animal muerto (I)\nHuella (de la mano, de una pata) (I)\nArtefacto; Un artefacto animal (I)\nDinosaurio (I)\nPiedra; Roca; Minerales (I)\nPrehistórico; Del pasado; Una cosa vieja (I)\nAlgo (conservado, subterráneo, comprimido)\n(I) Pinturas en piedra; Algo que está labrado en las rocas (I)\n Marca de (ropa, relojes) (I)\nAlgo que cavas en la tierra; Está alrededor de un castillo (I)*\nUna pintura",
                               "Una capa; una de las capas de la tierra; Está alrededor de (la tierra, el planeta) (I)\nNos protege de no calentarnos demasiado (I)\nTiene agujeros por causa de la contaminación; Cosa que la contaminación destruye (I)\nConserva dentro el aire (I)\nSepara a la tierra del espacio (I)\nCorteza terrestre; En la tierra; Parte de la tierra\nNos protege de (meteoritos, cometas, asteroides)\nGases que mantienen la tierra caliente; Atrapa los rayos del sol [describe el efecto invernadero]\nEstá en el espacio",
                               "Evaporación\nRespirar; Exhalar; A través de tus pulmones\nPersonas; Nuestros cuerpos; Tu corazón\nLluvia; Nube; Agua\nDióxido de carbono\nBomba de aire",
                               "Escritura (griega, árabe, hebrea) (I)\nSímbolos; Figuras; Dibujos antiguos (I)\nForma de escritura; Escritura (I)\nLetras; Alfabeto (I)\nPinturas en las cuevas; Grabados en piedra\nCosas de Egipto",
                               "Asia (I)\n[Nombra otro país o continente]",
                               "[Nombra cualquier otra ciudad]",
                               "Aire (I)*\nAgua (I)*\nLluvia; Que se moje (I)*\Ácido; Lluvia acida\nClima; Sol; Contaminación\nEdad; Tiemp",
                               "Sustancias químicas (I)\nCitoplasma (I)\nFotosíntesis\nAlimento; Glucosa; Nutrientes\nDióxido de carbono; Oxígeno; Agua; Sol\nÁrbol; Semillas; Tallos; Raíces\nClima; Estaciones; Ambiente; Temperatura\nSus genes",
                               "Desarrolló una teoría; Clasificó a los animales (I)\nUn (biólogo, científico, escritor, autor) (I)*\nPresidente [nombra cualquier otra ocupación]\nUn hombre",
                               "Hulla; Coque (I)\nRoca comprimida (I)\nCalor; Presión (I)\nRoca; Piedra; Cuarzo; Gemas (I)\nCristal; Vidrio (I)\nLava que se comprime y enfría; Lava derretida (I)\nMetal; Acero\nTierra; Suelo\nGemas; Algo precioso",
                               "(Hombre, dirigente) chino (I)\nEscritor (I)\nUn dios; Dios chino\nCientífico; Explorador; Rey\nHombre de (Grecia, la Biblia)\nUn hombre antiguo; Un hombre; Persona\nPersona confundida",
                               "Fiesta; Celebración del invierno (I)\nInvierno; Mitad del invierno (I)\nCambio de estación (I)\nPosición del sol (I)\nÁngulo de la tierra (I)\nCuando el sol está más cerca de nosotros\nEl día y la noche tienen la misma duración\nLos días se van haciendo más cortos; El día más largo del año\nEl sol se pone detrás de la luna; El sol y la luna se alinean [describe eclipse]\nEs el día en que regresamos los relojes",
                               "Instrumento de medición (I)\nMide algo en el aire; Para medición (I)\nMide (el clima, humedad, cantidad de lluvia, temperatura, velocidad del viento) Brújula",
                               "Bombardeo de átomos con (neutrones, electrones) (I)\nSe obtiene electricidad de ella (I)\nHace que las bombas atómicas exploten (I)\nUna explosión (I)\nDivisión celular\nLa fricción causada entre partículas atómicas\nHace que las cosas se vuelvan radioactivas; Es (peligrosa, mala, venenosa)\nCuando se funden dos átomos; Como en el sol [describe la fusión]",
                               "Unas cuantas horas en avión [cualquier número de horas] (I)*\nUnos cuantos miles de kilómetros (I)\n[Nombra una distancia fuera de los rangos aceptables]\nMuy lejos; Realmente lejos; Un montón de kilómetro",
                               "Se obtiene de animales y vegetales (I)\nSe obtiene de las abejas; De la miel (I)\nDe las sustancias sólidas; Dejos sólidos (I)\nDe los aceites esenciales (I)\nDe la polimerización (I)\nSe obtiene de la cera (I)\nLa resina arde en contacto con el aire\nSe obtiene por destilación\nDe las piedras\nProviene del latín resina\nSe obtiene de los metales\nSe usa para el tratamiento de los dientes; Se usa para hacer cosméticos; Para hacer ungüentos; Para hacer cremas"];

  comentario:String[] = ["† Respuesta incorrecta: señale el pie del niño y diga: Este es tu pie",
                         "† Respuesta incorrecta: señale de nuevo a su propia nariz y diga: Esto se llama nariz",
                         "(I) ¿Qué quieres decir? o dime más acerca de ello",
                         "(I) ¿Qué quieres decir? o dime más acerca de ello\n*Si la respuesta sugiere que el niño escuchó ¿Cuántas ovejas tienes? repita la pregunta, enfatizando la palabra oreja",
                         "",
                         "",
                         "(I) ¿Qué quieres decir? o dime más acerca de ello\n*Si el niño dice 'ayer', 'hoy' o 'mañana', se le pregunta: ¿Qué día es ese?",
                         "*Si el niño responde sólo con una moneda, se le pide: Nombra dos tipos de monedas",
                         "",
                         "(I) ¿Qué quieres decir? o dime más acerca de ello",
                         "(I) ¿Qué quieres decir? o dime más acerca de ello\n*Si el niño dice 'cinco', diga: ¿Cuántos días incluyendo el fin de semana?",
                         "(I) ¿Qué quieres decir? o dime más acerca de ello\n*Si el niño responde '366', se le pregunta: ¿Cuántos días hay en un año normal?",
                         "(I) ¿Qué quieres decir? o dime más acerca de ello",
                         "(I) ¿Qué quieres decir? o dime más acerca de ello\n*Si el niño nombra menos de cuatro estaciones, diga: Dime más estaciones del año, hasta que haya mencionado las cuatro",
                         "(I) ¿Qué quieres decir? o dime más acerca de ello",
                         "(I) ¿Qué quieres decir? o dime más acerca de ello\n*Si el niño contesta, 'Es un órgano' o 'Es parte de tu cuerpo', diga: Sí, pero ¿qué hace?",
                         "",
                         "(I) ¿Qué quieres decir? o dime más acerca de ello\n*Si el niño definefosos en lugar de fósil, se le pregunta: ¿Qué es un fósil? Enfatizando la palabra fósil",
                         "(I) ¿Qué quieres decir? o dime más acerca de ello",
                         "",
                         "(I) ¿Qué quieres decir? o dime más acerca de ello\n* Si el niño identifica correctamente los jeroglíficos como escritura con dibujos o símbolos, pero lo asocia de manera incorrecta con los griegos o con otro grupo incorrecto, se le concede crédito",
                         "(I) ¿Qué quieres decir? o dime más acerca de ello\n*Si el niño no comprende la palabra población, se le puede decir: ¿Cuál país en el mundo tiene la mayor cantidad de gente?",
                         "",
                         "(I) ¿Qué quieres decir? o dime más acerca de ello\n*Si el niño contesta 'Aire' o 'Agua', se le dice: Sí, pero ¿qué está en [inserte la respuesta del niño] que causa que el hierro se oxide?",
                         "(I) ¿Qué quieres decir? o dime más acerca de ello",
                         "(I) ¿Qué quieres decir? o dime más acerca de ello\n*Si el niño contesta 'Un (científico, biólogo, escritor, autor)', se le dice: ¿Qué lo hizo famoso?",
                         "(I) ¿Qué quieres decir? o dime más acerca de ello",
                         "(I) ¿Qué quieres decir? o dime más acerca de ello",
                         "(I) ¿Qué quieres decir? o dime más acerca de ello",
                         "(I) ¿Qué quieres decir? o dime más acerca de ello",
                         "(I) ¿Qué quieres decir? o dime más acerca de ello",
                         "(I) ¿Qué quieres decir? o dime más acerca de ello\n *Si el niño contesta 'A unas cuantas horas en avión' o da una cantidad de horas, se le dice: ¿Qué tan lejos está en kilómetros o millas?",
                         "(I) ¿Qué quieres decir? o dime más acerca de ello"];

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

  radioPunto:boolean = true;
  defRadioPunto0:boolean = false;
  //radioPunto1 = false;
  defRadioPunto1:boolean = true;

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

    this.radioPunto = true;
    //this.radioPunto1 = false;

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

        this.radioPunto = true;
        //this.radioPunto = false;

      }else{ //En caso de que halla fallado los dos primeros reactivos por cada caso
        
        if(this.countRe===2){
          this.retorno = false;
          this.indexActual = this.flagRe + 1;
          this.consignaActual = this.consigna[this.indexActual];
          this.respuestaCorrectaAct = this.respuestaCorrecta[this.indexActual];
          this.respuestaErroneaAct = this.respuestaErronea[this.indexActual];
          this.comentarioAct = this.comentario[this.indexActual];

          this.radioPunto = true;
          //this.radioPunto1 = false;
          
        }else{
          this.indexActual--;
          this.consignaActual = this.consigna[this.indexActual];
          this.respuestaCorrectaAct = this.respuestaCorrecta[this.indexActual];
          this.respuestaErroneaAct = this.respuestaErronea[this.indexActual];
          this.comentarioAct = this.comentario[this.indexActual];

          this.radioPunto = true;
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

    if(this.radioPunto){
      this.cambiarPuntuacion(1);
    }else{
      this.cambiarPuntuacion(0);
    }
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
