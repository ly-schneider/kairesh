import { Component } from '@angular/core';
import {ContainerComponent} from '../../shared/container/container.component';
import {ContainerSize} from '../../../enums/enums';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [
    ContainerComponent
  ],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent {

  protected readonly ContainerSize = ContainerSize;
}
