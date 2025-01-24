import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErroService {
  private _erro = signal('');

  erro = this._erro.asReadonly();

  showError(message: string) {
    console.log(message);
    this._erro.set(message);
  }

  clearError() {
    this._erro.set('');
  }
}