import { Component, Input} from '@angular/core';
import { type Opcao } from './opcao.model';

@Component({
  selector: 'app-opcao',
  standalone: true,
  imports: [],
  templateUrl: './opcao.component.html',
  styleUrl: './opcao.component.css'
})
export class OpcaoComponent {
  @Input({required:true}) opcao!:Opcao;

  //estabelecendo qual opçao está selecionada para saber qual componente mostrar ao usuário
  @Input({required:true}) opcaoSelecionada!:boolean;

  
}
