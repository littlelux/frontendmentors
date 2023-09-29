import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-upper-section-tablet',
  templateUrl: './upper-section-tablet.component.html',
  styleUrls: ['./upper-section-tablet.component.scss']
})
export class UpperSectionTabletComponent {
  @Input()
  mode: string = 'light' || 'dark' || 'solid' || 'flashy';
  @Input()
  device: string = 'mobile' || 'tablet';
}
