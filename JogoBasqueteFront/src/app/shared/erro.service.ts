import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErroService {
  
  //service para mostrar erro do back end no modal
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