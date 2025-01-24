import { Component, inject, input } from '@angular/core';
import { ModalComponent } from "../modal.component";
import { ErroService } from '../../erro.service';

@Component({
    selector: 'app-error-modal',
    standalone: true,
    templateUrl: './erro-modal.component.html',
    styleUrl: './erro-modal.component.css',
    imports: [ModalComponent]
})
export class ErrorModalComponent {
  titulo = input<string>();
  mensagem = input<string>();
  private erroService = inject(ErroService);

  onClearError() {
    this.erroService.clearError();
  }
}
