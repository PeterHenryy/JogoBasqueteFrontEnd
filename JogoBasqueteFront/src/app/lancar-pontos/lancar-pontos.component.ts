import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lancar-pontos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lancar-pontos.component.html',
  styleUrl: './lancar-pontos.component.css'
})
export class LancarPontosComponent {
  inputData = '';
  inputPontosMarcados = '';


}
