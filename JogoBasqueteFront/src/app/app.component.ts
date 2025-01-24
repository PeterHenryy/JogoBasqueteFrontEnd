import { Component } from '@angular/core';
import { JogosComponent } from "./jogos/jogos.component";
import { HeaderComponent } from "./header/header.component";
import { Opcoes } from './opcao/opcoes';
import { OpcaoComponent } from "./opcao/opcao.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JogosComponent, HeaderComponent, OpcaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  opcoes = Opcoes;
  idOpcaoSelecionada = '';


}
