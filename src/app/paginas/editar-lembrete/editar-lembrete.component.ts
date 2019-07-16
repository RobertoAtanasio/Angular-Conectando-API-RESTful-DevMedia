import { Component, OnInit, ViewChild } from '@angular/core';
import { Lembrete } from './../../interfaces/lembrete';
import { ErrorMsgComponent } from './../../compartilhado/error-msg/error-msg.component';
import { LembretesService } from 'src/app/services/lembretes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-lembrete',
  templateUrl: './editar-lembrete.component.html',
  styleUrls: ['./editar-lembrete.component.css']
})
export class EditarLembreteComponent implements OnInit {

  public lembrete: Lembrete;
  @ViewChild(ErrorMsgComponent, {static: true}) errorMsgComponent: ErrorMsgComponent;

  constructor(
    private lembreteService: LembretesService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
      this.getLembrete(this.activatedRoute.snapshot.params.id);
    }

  ngOnInit() {
  }

  getLembrete(id: number) {
    this.lembreteService.getLembrete(id)
      .subscribe((lembrete: Lembrete) => {
        this.lembrete = lembrete;
      }, () => { this.errorMsgComponent.setError('Falha ao buscar lembrete.'); });
  }

  atualizaLembrete(lembrete: Lembrete) {
    this.lembreteService.atualizaLembrete(lembrete)
      .subscribe(
        () => { this.router.navigateByUrl('/'); },
        () => { this.errorMsgComponent.setError('Falha ao atualizar lembrete.'); });
  }

}
