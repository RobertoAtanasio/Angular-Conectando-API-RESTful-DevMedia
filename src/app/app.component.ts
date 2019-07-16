import { Component, ViewChild, OnInit } from '@angular/core';
import { ErrorMsgComponent } from './compartilhado/error-msg/error-msg.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'CRUD de lembrete';
  // @ViewChild : exemplicaficando a inclusão de um componente sendo chamado por outro componente
  @ViewChild(ErrorMsgComponent, {static: true}) errorMsgComponent: ErrorMsgComponent;
  constructor() { }
  ngOnInit() {
    this.errorMsgComponent.setError('Componente inicializado com sucesso!', 2000);
  }
}
