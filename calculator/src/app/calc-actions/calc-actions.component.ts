import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calc-actions',
  standalone: true,
  imports: [],
  templateUrl: './calc-actions.component.html',
  styleUrl: './calc-actions.component.css',
})
export class CalcActionsComponent {
  @Input() n1: number = 0;
  @Input() n2: number = 0;
  @Output() ans = new EventEmitter<number>();
  @Output() op = new EventEmitter<string>();
  @Output() borrarEvent = new EventEmitter<void>();

  borrar() {
    this.borrarEvent.emit();
  }
  sumar() {
    const x = this.n1 + this.n2;
    this.ans.emit(x);
    const operacion = `${this.n1} + ${this.n2} = ${x}`;
    this.op.emit(operacion);
  }
  restar() {
    const x = this.n1 - this.n2;
    this.ans.emit(x);
    const operacion = `${this.n1} - ${this.n2} = ${x}`;
    this.op.emit(operacion);
  }
  potenciar() {
    const x = this.n1 ** this.n2;
    this.ans.emit(x);
    const operacion = `${this.n1} ^ ${this.n2} = ${x}`;
    this.op.emit(operacion);
  }
  multiplicar() {
    const x = this.n1 * this.n2;
    this.ans.emit(x);
    const operacion = `${this.n1} * ${this.n2} = ${x}`;
    this.op.emit(operacion);
  }
  dividir() {
    const x = this.n1 / this.n2;
    this.ans.emit(x);
    const operacion = `${this.n1} / ${this.n2} = ${x}`;
    this.op.emit(operacion);
  }
}
