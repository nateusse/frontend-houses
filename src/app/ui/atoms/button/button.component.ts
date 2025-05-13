import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text = 'Enviar';
  @Input() disabled = false;
  @Input() type: 'button' | 'submit' = 'button';
}