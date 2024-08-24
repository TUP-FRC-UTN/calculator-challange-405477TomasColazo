import { Component } from '@angular/core';
import { CalcActionsComponent } from '../calc-actions/calc-actions.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calc-view',
  standalone: true,
  imports: [CalcActionsComponent, FormsModule],
  templateUrl: './calc-view.component.html',
  styleUrl: './calc-view.component.css',
})
export class CalcViewComponent {
  hayRespuesta: string = 'none';
  n1: number = 0;
  n2: number = 0;
  resultado: number = 0;
  /*  operacion: string = ''; */
  private _operacion: string = '';

  set operacion(value: string) {
    this._operacion = value;
    this.mostrar();
  }
  get operacion(): string {
    return this._operacion;
  }

  updateValue1(value: string) {
    this.n1 = +value;
  }

  updateValue2(value: string) {
    this.n2 = +value;
  }

  mostrar() {
    if (this.operacion == '') {
      this.hayRespuesta = 'none';
    } else {
      this.hayRespuesta = 'block';
    }
  }
  borrar() {
    this.n1 = 0;
    this.n2 = 0;
    this.resultado = 0;
    this.operacion = '';
  }
}
