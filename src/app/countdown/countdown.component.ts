import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

@Component({
  selector: 'sam-countdown',
  styleUrls: ['./countdown.component.css'],
  templateUrl: './countdown.component.html',
})
export class CountdownComponent {

  public timer$: Observable<string>;
  public wedding = new Date(2018, 4, 20, 11);

  constructor() {

    this.timer$ = Observable.timer(0, 1000)
      .map(() => {
        const diff = moment.utc(this.wedding).diff(new Date());

        const duration = moment.duration(diff);
        return `${duration.months()} ${duration.days()} ${duration.hours()} ${duration.minutes()} ${duration.seconds()}`;
      });

  }
}
