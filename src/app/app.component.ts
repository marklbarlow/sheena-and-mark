import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  animations: [
    trigger('titleAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2.0s 0.5s ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('subtitleAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('6.0s 2.5s ease-out', style({ opacity: 1 }))
      ])
    ])
  ],
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'app';
}
