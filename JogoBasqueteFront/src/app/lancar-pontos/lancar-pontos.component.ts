import { Component, inject } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { JogosService } from '../services/jogos.service';
import { ErroService } from '../shared/erro.service';
import { ErroModalComponent } from "../shared/modal/erro-modal/erro-modal.component";


@Component({
  selector: 'app-lancar-pontos',
  standalone: true,
  imports: [FormsModule, ErroModalComponent],
  templateUrl: './lancar-pontos.component.html',
  styleUrl: './lancar-pontos.component.css'
})
export class LancarPontosComponent {
  inputData = '';
  inputPontosMarcados = '';

  private jogoService = inject(JogosService);
  private erroService = inject(ErroService);

  erro = this.erroService.erro;
  lancarPontos(){
    if (!this.inputData || !this.inputPontosMarcados) {
      alert('Por favor, preencha todos os campos do formularío');
      return;
    }
  
    this.jogoService.lancarPontos(
      {
        id:'0', 
        data: this.inputData, 
        pontos: this.inputPontosMarcados 
      })
      .subscribe({
        next: (resposta) => console.log('Success:', resposta)
        
      });
    this.inputData = '';
    this.inputPontosMarcados = '';
  }
  

}
