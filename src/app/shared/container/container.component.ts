import {Component, Input} from '@angular/core';
import {ContainerSize} from '../../../enums/enums';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {
  @Input() size: ContainerSize = ContainerSize.DEFAULT;
  protected readonly ContainerSize = ContainerSize;
}
