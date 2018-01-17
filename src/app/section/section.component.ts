import { Component, Input } from '@angular/core';

@Component({
  selector: 'sam-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {

  @Input() label: string;
}
