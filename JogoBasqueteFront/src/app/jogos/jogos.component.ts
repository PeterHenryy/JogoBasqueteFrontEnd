import { Component, signal, inject, DestroyRef, OnInit } from '@angular/core';
import { Jogo } from './jogo.model';
import { JogosService } from '../services/jogos.service';

@Component({
  selector: 'app-jogos',
  standalone: true,
  imports: [],
  templateUrl: './jogos.component.html',
  styleUrl: './jogos.component.css'
})
export class JogosComponent implements OnInit{
  jogos = signal<Jogo[] | undefined>(undefined);
  buscandoJogos = signal(false);
  erro = signal('');

  private jogosService = inject(JogosService);
  private destroyRef = inject(DestroyRef);;
  
  ngOnInit() {
    this.buscandoJogos.set(true);

    const inscricao = this.jogosService.buscarJogos().subscribe({
      next: (jogos) => {
        this.jogos.set(jogos)
      },
      error: (erro: Error) => {
        console.log(erro);
        this.erro.set('Algo deu errado ao tentar buscar os jogos');
      },
      complete: () => {
        this.buscandoJogos.set(false);
      }
    })

    this.destroyRef.onDestroy(() => {
      inscricao.unsubscribe();
    });
  }
}
