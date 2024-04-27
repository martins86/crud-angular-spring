import { Component, Input, forwardRef } from '@angular/core';

import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

import { InputStringTypes } from '@core/types/login-response.type';

@Component({
  selector: 'app-input-string',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputStringComponent),
      multi: true,
    },
  ],
  templateUrl: './input-string.component.html',
  styleUrl: './input-string.component.scss',
})
export class InputStringComponent implements ControlValueAccessor {
  @Input() type: InputStringTypes = 'text';
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() titleLabel: string = '';
  @Input() inputName: string = '';

  value: string = '';
  onChange: (value: string) => void = () => {};
  onTouched: (value: string) => void = () => {};

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.onChange(value);
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (_: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: (_: string) => void): void {
    this.onTouched = fn;
  }
}
