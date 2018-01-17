import { Component } from '@angular/core';

@Component({
  selector: 'sam-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.scss']
})
export class TransportComponent {

  public taxis = [
    { name: 'AAA Taxis, Quendon', number: '01799 668166' },
    { name: 'Elsenham Taxis, Stansted Mountfitchet', number: '01279 815303' },
    { name: 'Walden Cabs, Saffron Waldon', number: '01799 500500' },
    { name: 'Associated Taxis', number: '01279 655666' },
    { name: 'Kwick Cars', number: '01279 654321' },
  ];
}
