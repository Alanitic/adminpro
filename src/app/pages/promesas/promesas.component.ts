import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.contarHastaTres().then(
      mensaje => console.log('Terminó', mensaje)
    ).catch( error => console.error('Error en la promesa', error));
   }

  ngOnInit() {
  }

  contarHastaTres() {
    return new Promise( (resolve, reject) => {
      let contador = 0;
      let intervalo = setInterval( () => {
        contador += 1;
        console.log(contador);
        if (contador === 3) {
          resolve('Todo bien');
          clearInterval(intervalo);
        }
      }, 1000);
    });
  }

}
