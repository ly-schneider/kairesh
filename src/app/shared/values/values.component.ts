import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-values',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './values.component.html',
  styleUrl: './values.component.scss'
})
export class ValuesComponent {
  @Input() type: 'default' | 'verein' = 'default';
}
