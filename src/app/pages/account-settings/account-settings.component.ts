import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [`
    #themecolors a {
      cursor: pointer
    }
    `
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private _document) { }

  cambiarColor(tema: String, link) {
    this.aplicarCheck(link);
    let url = `assets/css/colors/${tema}.css`;
    this._document.getElementById('theme').setAttribute('href', url);
  }

  aplicarCheck( link ) {
    let selectores: any = document.getElementsByClassName('selector');

    for ( let ref of selectores ) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  ngOnInit() {
  }

}
