import { Injectable, signal, inject } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ErroService } from '../shared/erro.service';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { type Jogo } from '../jogos/jogo.model';

@Injectable({
  providedIn: 'root'
})
export class JogosService {
  private httpClient = inject(HttpClient);
  private jogosRegistrados = signal<Jogo[]>([]);
  private urlAPI = 'https://localhost:44369/jogo';
  jogosCarregados = this.jogosRegistrados.asReadonly();
  private erroService = inject(ErroService);

  buscarJogos(): Observable<Jogo[]> {
    return this.httpClient.get<Jogo[]>(this.urlAPI + '/jogos').pipe(
      catchError((error) => {
        console.log(error);
        return throwError (() => new Error('Um erro ocorreu ao tentar buscar por jogos.'));
      })
    );
  }

  lancarPontos(jogo: Jogo): Observable<Jogo> {
    return this.httpClient.post<Jogo>(this.urlAPI, jogo).pipe(
      catchError((erro: HttpErrorResponse) => {
        const mensagemErro = erro.error?.message || 'Erro ao tentar registrar jogo';
        this.erroService.mostrarErro(mensagemErro); 
        return throwError(() => new Error(mensagemErro)); 
      })
    );
  }
}
