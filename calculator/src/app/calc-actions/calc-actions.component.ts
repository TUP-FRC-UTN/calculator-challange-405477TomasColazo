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

  sumar() {
    const x = this.n1 + this.n2;
    this.ans.emit(x);
  }
}
