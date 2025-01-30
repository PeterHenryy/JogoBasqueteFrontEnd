import { Component, inject, input, Output, EventEmitter} from '@angular/core';
import { ModalComponent } from "../modal.component";
import { ErroService } from '../../erro.service';

@Component({
    selector: 'app-erro-modal',
    standalone: true,
    templateUrl: './erro-modal.component.html',
    styleUrl: './erro-modal.component.css',
    imports: [ModalComponent]
})

//componente modal para mostrar ao usuário possíveis erros da aplicação
export class ErroModalComponent {

  titulo = input<string>();
  mensagem = input<string>();
  private erroService = inject(ErroService);
  @Output() eventoErro = new EventEmitter<void>();

  limparErro() {
    this.erroService.limparError();
    this.eventoErro.emit();
  }
}
