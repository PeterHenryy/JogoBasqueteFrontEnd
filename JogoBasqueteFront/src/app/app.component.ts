import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JogosComponent } from "./jogos/jogos.component";
import { HeaderComponent } from "./header/header.component";
import { Opcoes } from './opcao/opcoes';
import { OpcaoComponent } from "./opcao/opcao.component";
import { LancarPontosComponent } from "./lancar-pontos/lancar-pontos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, OpcaoComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  opcoes = Opcoes;
  idOpcaoSelecionada = 0;

  componentes: { [key: number]: any } = {
    1: LancarPontosComponent,
    2: JogosComponent,
  };

  get obterComponente() {
    return this.componentes[this.idOpcaoSelecionada];
  }
}
