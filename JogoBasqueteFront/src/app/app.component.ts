import { Component, inject } from '@angular/core';
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

  //passando ao AppComponent as possíveis opções do menu
  opcoes = Opcoes;

  //avisando ao AppComponent qual opcao está selecionada para saber qual componente mostrar ao usuário
  idOpcaoSelecionada = 0;

  componentes: { [key: number]: any } = {
    1: LancarPontosComponent,
    2: JogosComponent,
  };

  //renderizando componentes de maneira dinâmica baseando-se em qual opção do Menu foi selecionada
  get obterComponente() {
    return this.componentes[this.idOpcaoSelecionada];
  }



}
