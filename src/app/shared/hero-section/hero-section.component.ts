import {Component, Input} from '@angular/core';
import {DividerComponent} from '../divider/divider.component';
import {RouterLink} from '@angular/router';
import {HeroSectionContent} from '../../../types/types';
import {NgClass, NgForOf, NgIf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [
    DividerComponent,
    RouterLink,
    NgIf,
    NgForOf,
    NgStyle,
    NgClass
  ],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  @Input() content: HeroSectionContent;
}
