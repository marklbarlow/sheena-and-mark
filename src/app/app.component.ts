import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

export interface Route {
  label: string;
  routerLink: string;
}

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
  selector: 'sam-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  public routes: Route[] = [
    { label: 'RSVP', routerLink: 'rsvp' },
    { label: 'Gift List', routerLink: 'rsvp' },
    { label: 'Transport', routerLink: 'rsvp' },
    { label: 'Accomodation', routerLink: 'rsvp' },
    { label: 'Friday', routerLink: 'rsvp' },
    { label: 'Saturday', routerLink: 'rsvp' },
    { label: 'Venue', routerLink: 'rsvp' },
  ];
}
