import { Component } from '@angular/core';
import {ContainerComponent} from '../../shared/container/container.component';
import {ContainerSize} from '../../../enums/enums';

@Component({
  selector: 'app-datenschutz',
  standalone: true,
  imports: [
    ContainerComponent
  ],
  templateUrl: './datenschutz.component.html',
  styleUrl: './datenschutz.component.scss'
})
export class DatenschutzComponent {

  protected readonly ContainerSize = ContainerSize;
}
