import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() idBtn: string = '';
  @Input() classBtn: string = '';
  @Input() typeBtn: string = 'button';
  @Input() ariaLabelBtn: string = '';
  @Input() textBtn: string = '';
  @Input() disableBtn: boolean = false;
}
