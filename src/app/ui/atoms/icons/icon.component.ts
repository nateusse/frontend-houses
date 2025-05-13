import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent {
  @Input() name: string = '';
  @Input() style: 'solid' | 'regular' | 'brands' = 'solid';

  get iconClass(): string {
    const stylePrefix = {
      solid: 'fa-solid',
      regular: 'fa-regular',
      brands: 'fa-brands'
    }[this.style];

    return `${stylePrefix} fa-${this.name}`;
  }
}
