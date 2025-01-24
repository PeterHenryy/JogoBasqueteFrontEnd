import { Injectable, signal, inject } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';


import { HttpClient } from '@angular/common/http';
import { type Jogo } from '../jogos/jogo.model';

@Injectable({
  providedIn: 'root'
})
export class JogosService {
  private httpClient = inject(HttpClient);
  private jogosRegistrados = signal<Jogo[]>([]);
  jogosCarregados = this.jogosRegistrados.asReadonly();

  buscarJogos(): Observable<Jogo[]> {
    return this.httpClient.get<Jogo[]>('https://localhost:44369/jogo/jogos').pipe(
      catchError((error) => {
        console.log(error);
        return throwError (() => new Error('Um erro ocorreu ao tentar buscar por jogos.'));
      })
    );
  }
}
