import { Component, signal, inject, DestroyRef, OnInit } from '@angular/core';

import { type ResultadoJogos } from '../resultados/resultado-jogos.model';
import { JogosService } from '../services/jogos.service';
import { ErroModalComponent } from "../shared/modal/erro-modal/erro-modal.component";
import { obterResultados } from '../resultados/resultados-jogos';
import { DatePipe} from '@angular/common';
import { ErroService } from '../shared/erro.service';

@Component({
  selector: 'app-jogos',
  standalone: true,
  imports: [ErroModalComponent, DatePipe],
  templateUrl: './jogos.component.html',
  styleUrl: './jogos.component.css' ,
})

export class JogosComponent implements OnInit{
  resultadoJogos = signal<ResultadoJogos | undefined>(undefined);
  buscandoJogos = signal(false);
  erro = signal('');
  

  private jogosService = inject(JogosService);
  private destroyRef = inject(DestroyRef);;
  private erroService = inject(ErroService)

  ngOnInit() {
    this.buscandoJogos.set(true);

    const inscricao = this.jogosService.buscarJogos().subscribe({
      next: (resultadoJogos) => {
        this.resultadoJogos.set(resultadoJogos)
      },
      error: (erro: Error) => {
        this.erro.set(this.erroService.erro());
      },
      complete: () => {
        this.buscandoJogos.set(false);
        
      }
    })
    

    this.destroyRef.onDestroy(() => {
      inscricao.unsubscribe();
    });
  }

  removerModalErro(){
    this.erro.set('');
  }

  get resultados(){
    return obterResultados(this.resultadoJogos());
  }
}
