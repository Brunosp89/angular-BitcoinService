import { Injectable } from '@angular/core';
import { BitcoinService } from './bitcoin.service';

@Injectable()
export class TimerService {
  private timer: any;
  private counter = 60;

  constructor(public bitcoinService: BitcoinService) {}
  start(ms: number) {
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.counter--;
        if (this.counter == 0) {
          this.bitcoinService.update();
          this.counter = 60;
        }
      }, ms);
    }
  }

  getCount() {
    return this.counter;
  }
}
