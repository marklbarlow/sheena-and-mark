import { animate, style, transition, trigger } from '@angular/animations';
import { Component, AfterViewInit } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';

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
export class AppComponent implements AfterViewInit {

  public lat = 51.5762077;
  public lng = 0.0670857;

  ngAfterViewInit(): void {
    new WOW().init();
  }
}
