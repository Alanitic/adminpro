import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {

    this.regresaObservable().subscribe(
      numero => console.log('Subs', numero),
      error => console.error('Error en el obs', error),
      () => console.log('El observador terminó')
      );
   }

  ngOnInit() {
  }

  regresaObservable(): Observable<any> {
    return new Observable( observer => {
      let contador = 0;
      let intervalo = setInterval( () => {
        contador += 1;

        const salida = {
          valor: contador
        };

        observer.next(salida);

        if (contador === 5) {
          clearInterval(intervalo);
          observer.complete();
        }
        // if (contador === 2) {
        //   clearInterval(intervalo);
        //   observer.error('Este es un error');
        // }
      }, 1000);
    }).pipe( map( resp => resp.valor),
    filter( ( valor, index ) => {
      // console.log('Filter', valor, index);
      if ( (valor % 2) === 1 ) {
        return true;
      } else {
        return false;
      }
    })
    );

  }

}
