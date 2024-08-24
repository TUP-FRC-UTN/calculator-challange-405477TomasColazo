import { Component } from '@angular/core';
import { CalcActionsComponent } from '../calc-actions/calc-actions.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calc-view',
  standalone: true,
  imports: [CalcActionsComponent],
  templateUrl: './calc-view.component.html',
  styleUrl: './calc-view.component.css',
})
export class CalcViewComponent {
  n1: number = 0;
  n2: number = 0;
  resultado: number = 0;
  updateValue1(value: string) {
    this.n1 = +value;
  }

  updateValue2(value: string) {
    this.n2 = +value;
  }
}
