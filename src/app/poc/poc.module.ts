import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerPocComponent } from './timer-poc/timer-poc.component';



@NgModule({
  declarations: [
    TimerPocComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TimerPocComponent
  ]
})
export class PocModule { }
