import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  pAzul = 50;
  pVerde = 30;

  constructor() { }


  ngOnInit() {
  }

}
