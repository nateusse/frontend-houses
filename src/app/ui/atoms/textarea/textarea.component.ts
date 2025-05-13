import { Component, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class TextareaComponent {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() maxLength: number = 90; 
  @Input() required = false;
  @Input() id = '';
  @Input() formControlName = '';

  constructor(private controlContainer: ControlContainer) {}

  get controlValue(): string {
    const control = this.controlContainer.control?.get(this.formControlName);
    return control?.value || '';
  }
}
