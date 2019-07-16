import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Lembrete } from './../../interfaces/lembrete';

@Component({
  selector: 'app-form-lembrete',
  templateUrl: './form-lembrete.component.html',
  styleUrls: ['./form-lembrete.component.css']
})
export class FormLembreteComponent implements OnInit {

  // @Input() lembrete: Lembrete  = <Lembrete>{};
  @Input() lembrete: Lembrete = new Lembrete();
  @Output() outputLembrete: EventEmitter<Lembrete> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    // if (!this.lembrete) {
    //   this.lembrete = new Lembrete();
    // }
  }

  onSubmit() {
    this.outputLembrete.emit(this.lembrete);
  }

}
