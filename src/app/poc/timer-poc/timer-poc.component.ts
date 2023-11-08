import { Component } from '@angular/core';

@Component({
  selector: 'app-timer-poc',
  templateUrl: './timer-poc.component.html',
  styleUrls: ['./timer-poc.component.scss'],
})
export class TimerPocComponent {
  minutes: number = 1;
  seconds: number = 0;
  timer: any;

  constructor() {}

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown() {
    this.timer = setInterval(() => {
      if (this.minutes === 0 && this.seconds === 0) {
        clearInterval(this.timer);
      } else {
        if (this.seconds === 0) {
          this.minutes--;
          this.seconds = 59;
        } else {
          this.seconds--;
        }
      }
    }, 1000);
  }
}
