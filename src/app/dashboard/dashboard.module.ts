import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { KnobModule } from "primeng/knob";

import { RatingModule } from 'primeng/rating';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RatingModule,
    FormsModule,
    BrowserAnimationsModule,
    KnobModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
