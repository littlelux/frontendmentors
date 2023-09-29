import { Component, Input } from '@angular/core';
import { ButtonComponent } from './atoms/button/button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '03-skilled-elearning-landing-page';
  @Input()
  mode: string = 'light' || 'dark' || 'solid' || 'flashy';
  @Input()
  textType?: string = 'standard' || 'xstandard' || 'medium' || 'heavy';
  @Input()
  innerText?: string;
  @Input()
  imgPath?: string;
  @Input()
  imgAlt?: string;
}
