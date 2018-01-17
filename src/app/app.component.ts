import { AfterViewInit, Component } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';

@Component({
  selector: 'sam-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {

  public links = [
    { label: 'Home', link: '#' },
    { label: 'Wedding', link: '#wedding' },
    { label: 'Accommodation', link: '#accommodation' },
    { label: 'Transport', link: '#transport' },
    { label: 'Gift List', link: '#giftlist' },
  ];

  ngAfterViewInit(): void {
    new WOW().init();
  }
}
