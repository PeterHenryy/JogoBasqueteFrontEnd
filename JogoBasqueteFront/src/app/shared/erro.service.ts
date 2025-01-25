import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErroService {
  private _erro = signal('');

  erro = this._erro.asReadonly();

  mostrarErro(mensagem: string) {
    console.log(mensagem);
    this._erro.set(mensagem);
  }

  limparError() {
    this._erro.set('');
  }
}