import { Component, OnInit, ViewChild } from '@angular/core';
import { LembretesService } from './../../services/lembretes.service';
import { Router } from '@angular/router';
import { ErrorMsgComponent } from './../../compartilhado/error-msg/error-msg.component';
import { Lembrete } from './../../interfaces/lembrete';

@Component({
  selector: 'app-criar-lembrete',
  templateUrl: './criar-lembrete.component.html',
  styleUrls: ['./criar-lembrete.component.css']
})
export class CriarLembreteComponent implements OnInit {

  @ViewChild(ErrorMsgComponent, {static: true}) errorMsgComponent: ErrorMsgComponent;

  constructor(
    private lembreteService: LembretesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addLembrete(lembrete: Lembrete) {
    this.lembreteService.addLembrete(lembrete)
      .subscribe(
        () => { this.router.navigateByUrl('/'); },
        () => { this.errorMsgComponent.setError('Falha ao adicionar lembrete.'); });
  }

}
