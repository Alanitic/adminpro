import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  porcentaje = 50;

  constructor() { }

  cambiarValor( valor ) {
    this.porcentaje += valor;
    if (this.porcentaje > 100) {
      this.porcentaje = 100;
      return;
    } else if ( this.porcentaje < 0 ) {
      this.porcentaje = 0;
      return;
    }
  }

  ngOnInit() {
  }

}
