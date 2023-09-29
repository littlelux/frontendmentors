import { Component, Input } from '@angular/core';
import { ButtonComponent } from 'src/app/atoms/button/button.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input()
  mode: string = 'light' || 'dark' || 'solid' || 'flashy';
}
