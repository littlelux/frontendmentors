import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-upper-section-mobile',
  templateUrl: './upper-section-mobile.component.html',
  styleUrls: ['./upper-section-mobile.component.scss']
})
export class UpperSectionMobileComponent {
  @Input()
  mode: string = 'light' || 'dark' || 'solid' || 'flashy';
  @Input()
  device: string = 'mobile' || 'tablet';
}
