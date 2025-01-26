import { Injectable, signal, inject } from '@angular/core';
import { catchError, Observable, throwError, tap } from 'rxjs';
import { ErroService } from '../shared/erro.service';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { type Jogo } from '../jogos/jogo.model';
import { type ResultadoJogos } from '../resultados/resultado-jogos.model';

@Injectable({
  providedIn: 'root'
})

export class JogosService {
  private httpClient = inject(HttpClient);
  private jogosRegistrados = signal<Jogo[]>([]);
  private urlAPI = 'https://localhost:44369/jogo';
  jogosCarregados = this.jogosRegistrados.asReadonly();
  private erroService = inject(ErroService);

  buscarJogos(): Observable<ResultadoJogos> {
    return this.httpClient.get<ResultadoJogos>(this.urlAPI + '/resultados-jogos').pipe(
      catchError((erro:HttpErrorResponse) => {
        const mensagemErro = erro.error?.message || 'Algo deu errado ao tentar buscar por jogos.';
        this.erroService.mostrarErro(mensagemErro); 
        return throwError(() => new Error(mensagemErro)); 
      })
    );
  }

  lancarPontos(jogo: Jogo): Observable<Jogo> {
    return this.httpClient.post<Jogo>(this.urlAPI, jogo).pipe(
      tap(() => {
        alert('Jogo registrado com sucesso! Clique em Ver Resultados');
      }),
      catchError((erro: HttpErrorResponse) => {
        const mensagemErro = erro.error?.message || 'Erro ao tentar registrar jogo.';
        this.erroService.mostrarErro(mensagemErro); 
        return throwError(() => new Error(mensagemErro)); 
      })
    );
  }
}
