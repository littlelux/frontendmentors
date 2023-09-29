import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills-card',
  templateUrl: './skills-card.component.html',
  styleUrls: ['./skills-card.component.scss']
})
export class SkillsCardComponent {
  @Input()
  innerText?: string;
  @Input()
  class?: string[];
  @Input()
  imgPath?: string;
  @Input()
  imgAlt?: string;
  @Input()
  h2?: string;
}
