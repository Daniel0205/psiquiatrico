import { Component, OnInit } from '@angular/core';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-aritmeticawisc',
  templateUrl: './aritmeticawisc.component.html',
  styleUrls: ['./aritmeticawisc.component.scss']
})
export class AritmeticawiscComponent implements OnInit {

  estado:String = 'instruccion';// Esta variable me dice en que estado
  respuestaDada:String; // Variable del input de respuesta

  estimulos:String[] = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"];
  respuestas:String[] = ['3','5','10','9','2','4','5','3','6','2','7','6','15','14','25','5','7','9','20','32','24','19','7','6','8.50','20','3','60','30','3','34','48','2:00 pm','40 km'];
  //                    [1,2,3,4,5,6,7,8,9,10,11...]
  resultados:number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  respuestasDadas:String[] = ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'];
  consigna:String[] = ["Cuenta estos pájaros con tu dedo. Cuéntalos en voz alta para que yo pueda escucharte",
                       "Cuenta estos pollitos con tu dedo. Cuéntalos en voz alta para que yo pueda escucharte",
                       "Cuenta estos árboles con tu dedo. Cuéntalos en voz alta para que yo pueda escucharte",
                       "¿Cuántas mariposas y grillos hay en total?",
                       "¿Cuántas nueces quedarán si cada ardilla se come una",
                       "Roberto tiene 5 libros. Pierde 1 ¿Cuántos libros le quedan?",
                       "Cuántas son 2 crayolas más 3 crayolas",
                       "José tiene 5 galletas. Le da 1 a samuel y 1 a jimena. ¿Cuántas galletas le quedan?",
                       "Juan tenía 4 pesos y su mamá le dio 2 más. ¿Cuántos peoso tiene en total?",
                       "si corto una manzana por la mitad. ¿Cuántos pedaos tendré?",
                       "Si tienes 10 caramelos y te comes 3. ¿Cuántos caramelos te quedan?",
                       "Si tienes 3 lápices en cada mano. ¿Cuántos lápices tienes en total?",
                       "Tres bicicletas llegan a un parque donde ya hat 12 bicicletas. ¿Cuántas bicicletas hay en total en el parque?",
                       "Marcos tenía 8 pelotas y compró 6 más. ¡Cuántas pelotas tiene en total?",
                       "Francisco ganó 10 calcomanías el lunes y 15 calcomanías el martes. ¿Cuántas calcomanías ganó en total?",
                       "En un campo hay tres vacas. Otras cuatro vacas llegan al campo y después se van 2 vacas. ¿Cuántas vacas quedan en el campo?",
                       "Catalina tenía 12 globos y vendió 5. ¿Cuantos globos quedaron?",
                       "Juana compró 4 manzanas en una tienda y 2 manzanas en otra. Su mamá le dio 3 manzanas más. ¿Cuántas manzanas tiene en total?",
                       "Si compras 2 plumas a 40 pesos cada una. ¿Cuánto cambio te regresaran si pagas con 100 pesos?",
                       "Tomás anotó 17 puntos en un juego y 15 en otro juego. ¿Cuántas puntos anotó en total?",
                       "Una feria tiene 8 concursos destintos. Si cada concurso concede 3 premios. ¿Cuantos premios en total se dan en la feria?",
                       "En una clase de karate se inscribieron 30 estudiantes. Después de un mes, 11 estudiantes e van de la clase. ¿Cuántos estudiantes quedan en la clase?",
                       "Rosa compró 3 libros de caricaturas por 2 pesos cada uno y un juguete de 7 pesos. ¿Cuánto cambio le regresarán si pafa con un billete de 20 pesos?",
                       "Laura mira a 8 pájaros posados en la barda, 4 de ellos vuelan y otros 2 llegan de visita. ¿Cuántos pájaros observa Laura ahora?",
                       "Juan tuene el doble de dinero que Sergio. Juan tiene 17 pesos. ¿Cuánto dinero tiene Sergio?",
                       "Una escuela tiene 25 alumnos en cada salón de clases. Si en total hay 500 alumnos en toda la escuela. ¿Cuántos salones de clase hay?",
                       "Susana tenía 30 pesos y se gastó la mitad. Unas revistas cuestan 5 pesos cada una. ¿Cuántas revistas puede comprar Susana con el dinero que le queda?",
                       "Una familia manejó un automóvil durante 3 horas, se detuvo a descansar y luego manejó otras 2 horas más. Manejaron un total de 300 kilómetros. ¿Cuál fue la velocidad promedio a la que manejaron?",
                       "Beatriz compró una carpeta usada por 2/3 de lo que costaba nueva. Pagó 20 pesos. ¿Cuánto dinero costaba la carpeta cuando estaba nueva?",
                       "La temperatura se elevó 12 grados entre las 4 y las 8 de la mañana. Luego se elevó 9 grados más entre las 8 y las 11 de la mañana. En promedio, ¿cuántos grados se elevó la temperatura cada hora?",
                       "Un juego que normalmente cuesta 40 pesos se pone en oferta y se le rebaja 15% durante una venta especial. ¿Cuál es el precio del juego durante la venta especial?",
                       "Seis personas pueden lavar 40 automóviles en el curso de 4 días. ¿Cuántas personas se necesitarían para lavar los 40 coches en medio día?",
                       "Carlos viene de camino a casa en un vuelo que dura 2 horas. Jaime vive a 150 kilómetros del aeropuerto. Maneja a 60 kilómetros por hora (kph). Si el vuelo de Carlos sale a las 3 de la tarde, ¿a qué hora necesita salir Jaime de su casa para llegar al aeropuerto 30 minutos antes de que llegue Carlos?",
                       "Diego sale de trabajar 1 hora antes que Victoria. Diego maneja a 40 km/h y Victoria a 60 km/h. Si ambos van en la misma dirección, ¿Qué tan adelantada estará Victoria 5 horas después de que Diego sale?"
                      ];

  consignaActual:String = null;

  estimuloInicial:String = null;
  estimuloActual:String = null;
  indexInicial:number = null;
  indexActual:number = null;

  terminacion:number = 0; //Esta variable me dice cuantos ceros consecutivos tuvo el paciente

  retorno:boolean = false; // Esta variable me ayuda a controlar el uso de la regla del retorno
  countRe:number = 0; //Esta variable me dice cuando se puede salir de la condición de retorno
  flagRe:number = null;//Esta variable me ayuda a decir en que posicion quedo el paciente antes de entrar al retorno

  constructor() { }

  ngOnInit() {
  }

  imagenInit(num:number){
    this.indexInicial = num

    this.indexActual = num;
    this.consignaActual = this.consigna[this.indexActual];

    if(this.indexActual<5){
      this.estado = 'aplicacionImg';
      this.estimuloActual = "assets/estimulos/aritmeticawisc/" + this.estimulos[this.indexActual];
    }else{
      this.estado = 'aplicacion';
    }
  }

  verificarSiguienteEstimulo(){
    if((this.terminacion < 4 && this.indexActual < 34) && !(this.indexActual === 0 && this.resultados[this.indexActual]===0)){ // Verifica que no se haya cumplido la condicion de termino

      //console.log("Estado: ", this.estado);
      //console.log("index Act: ", this.indexActual);

      if(this.indexActual<5){ //Cambia el estado actual para no mostrar o mostrar la img cuando sea necesario
        this.estado = 'aplicacionImg';
      }else if(this.indexActual>=5){
        this.estado = 'aplicacion';
      }

      //Este verificacion me dice si se cumple la condición para retornar y asi devolverse en caso de ser necesario
      if((
          ((this.indexActual === 2 || this.indexActual === 3) && this.indexInicial === 2) ||
          ((this.indexActual === 8 || this.indexActual === 9) && this.indexInicial === 8) ||
          ((this.indexActual === 11 || this.indexActual === 12) && this.indexInicial === 11)
         )
          && this.resultados[this.indexActual]===0){
        this.retorno = true;
        this.flagRe = this.indexActual;
        this.indexActual = this.indexInicial;
      }

      if(!this.retorno){ //En caso de no haber fallado los items 6 0 7 sigue aumentado a partir de ahí
        this.indexActual++;
        this.consignaActual = this.consigna[this.indexActual];
        if(this.indexActual<5){
          this.estado = 'aplicacionImg';
          this.estimuloActual = "assets/estimulos/aritmeticawisc/" + this.estimulos[this.indexActual];
        }else{
          this.estado = 'aplicacion';
        }
      }else{ //En caso de que halla fallado los primeros reactivos vuelve al reactivo anterior y empieza a disminuir desde ahí        
        if(this.countRe===5){
          this.retorno = false;
          this.indexActual = this.flagRe + 1;
          if(this.indexActual<5){
            this.estado = 'aplicacionImg';
            this.estimuloActual = "assets/estimulos/aritmeticawisc/" + this.estimulos[this.indexActual];
          }else{
            this.estado = 'aplicacion';
          }
          this.consignaActual = this.consigna[this.indexActual];
          
        }else{
          this.indexActual--;
          if(this.indexActual<5){
            this.estado = 'aplicacionImg';
            this.estimuloActual = "assets/estimulos/aritmeticawisc/" + this.estimulos[this.indexActual];
          }else{
            this.estado = 'aplicacion';
          }
          this.consignaActual = this.consigna[this.indexActual];
        }
        
      }      

    }else{
      this.estado = 'terminado';
    }
  }

  verificarResultado(){
    this.respuestasDadas[this.indexActual] = this.respuestaDada;
    this.respuestaDada = null;
    console.log(this.respuestasDadas[this.indexActual])
    console.log(this.respuestas[this.indexActual])
    console.log(this.respuestasDadas[this.indexActual] === this.respuestas[this.indexActual])
    if(this.respuestasDadas[this.indexActual] === this.respuestas[this.indexActual]){
      this.cambiarPuntuacion(1);
    }else{
      this.cambiarPuntuacion(0);
    }
  }

  cambiarPuntuacion(punt:number){
    if(punt === 0){
      if(this.indexActual === 0){
        this.resultados[this.indexActual] = punt;
      }else{
        this.resultados[this.indexActual] = punt;
        this.terminacion++
      }

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
    for(var i=1;i<this.resultados.length;i++){
      total = total + this.resultados[i];
    }
    return total;
  }

  //En caso de que el estado sea revision

  aRevisar(){
    this.estado = 'revision';
  }

  actualizarResultados(){
    
    for(let j = 1;j<this.resultados.length;j++){
      var x = (<HTMLInputElement>document.getElementById(""+j)).value;
      this.resultados[j] = +x;
    }
    
    this.estado = 'terminado';
  }

  regresarAct(){
    this.estado = 'terminado';
  }

}