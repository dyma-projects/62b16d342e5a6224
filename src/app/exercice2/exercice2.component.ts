import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css'],
})
export class Exercice2Component implements OnInit {
  @ViewChild('myInput', { static: false })
  public el: ElementRef<HTMLInputElement>;

  public valeur: string;
  inputText() {
    this.valeur = this.el.nativeElement.value;
  }
  constructor() {}

  ngOnInit() {}
}
