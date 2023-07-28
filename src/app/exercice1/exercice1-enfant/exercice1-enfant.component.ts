import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css'],
})
export class Exercice1EnfantComponent implements OnInit {
  constructor() {}

  @Input() public result: number;

  @Output() public resultEvent: EventEmitter<number> = new EventEmitter();

  public more() {
    this.resultEvent.emit(this.result + 1);
  }

  public less() {
    this.resultEvent.emit(this.result - 1);
  }

  ngOnInit() {}
}
