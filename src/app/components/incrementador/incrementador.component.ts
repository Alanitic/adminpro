import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input() leyenda = 'leyenda';
  @Input() porcentaje = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  cambiarValor( valor ) {
    this.porcentaje += valor;
    if (this.porcentaje > 100) {
      this.porcentaje = 100;
    } else if ( this.porcentaje < 0 ) {
      this.porcentaje = 0;
    }
    this.cambioValor.emit( this.porcentaje );

    this.txtProgress.nativeElement.focus();
  }

  onChanges( newValue: number ) {


    if (newValue > 100) {
      newValue = 100;
    } else if ( newValue < 0 ) {
      newValue = 0;
    }

    this.txtProgress.nativeElement.value = newValue;

    this.cambioValor.emit( newValue );

  }

  ngOnInit() {
  }

}
