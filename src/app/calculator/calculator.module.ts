import { CalculatorComponent } from './calculator.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [CalculatorComponent],
  imports: [
    CommonModule
  ],
  exports: [CalculatorComponent]
})
export class CalculatorModule { }
