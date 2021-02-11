import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { CalculatorModule } from './calculator/calculator.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    CalculatorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
