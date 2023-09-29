import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
 @Input()
 mode: string = 'light' || 'dark' || 'solid' || 'flashy';
 @Input()
  innerText?: string;
 @Input()
  title?: string;
 @Input()
  class?: string[];
}
