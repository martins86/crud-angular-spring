import { Component, input } from '@angular/core';

@Component({
  selector: 'input[app-input]',
  standalone: true,
  host: {
    '[placeholder]': 'valuePlaceholder()',
    '(input)': 'onInput($event)',
  },
  template: ` <ng-content /> `,
  styleUrl: 'input.component.scss',
})
export class InputComponent {
  valuePlaceholder = input('', {
    transform: (value: string | null) => (value || '').toUpperCase(),
  });

  onInput(value: string | null): void {}
}
