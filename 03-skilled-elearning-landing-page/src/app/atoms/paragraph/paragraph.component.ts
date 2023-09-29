import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent {
  @Input()
  innerText?: string;
   @Input()
  class?: string[];
  @Input()
  textType?: string = 'standard' || 'xstandard' || 'medium' || 'heavy';
  @Input()
  color: string = 'white' || 'black';
}
