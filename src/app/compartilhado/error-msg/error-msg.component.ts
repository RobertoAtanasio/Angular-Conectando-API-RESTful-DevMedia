import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css']
})
export class ErrorMsgComponent implements OnInit {

  public error: string;

  constructor() { }

  ngOnInit() {
  }

  setError(error: string, tempo: number = 5000) {
    this.error = error;
    console.log('>> Mensagem:' , error);
    setTimeout(() => {
      this.error = null;
    }, tempo);
  }
}
