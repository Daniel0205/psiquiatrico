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
                       "22. ",
                       "23. ",
                       "24. ",
                       "25. ",
                       "26. ",
                       "27. ",
                       "28. ",
                       "29. ",
                       "30. ",
                       "31. ",
                       "32. ",
                       "33. ",];

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
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                ""];

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
                               "",
                               "",
                               "",
                               "",
                               "",
                               "",
                               "",
                               "",
                               "",
                               "",
                               "",
                               ""];

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
                         "(I) ¿Qué quieres decir? o dime más acerca de ello\n*Si el niño definefosos en lugar de fósil, se le pregunta: ¿Qué es un fósil? Enfatizando la palabra fósil",
                         "(I) ¿Qué quieres decir? o dime más acerca de ello",
                         "",
                         "(I) ¿Qué quieres decir? o dime más acerca de ello\n* Si el niño identifica correctamente los jeroglíficos como escritura con dibujos o símbolos, pero lo asocia de manera incorrecta con los griegos o con otro grupo incorrecto, se le concede crédito",
                         "",
                         "",
                         "",
                         "",
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
