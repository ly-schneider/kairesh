import { Component } from '@angular/core';
import {ContainerComponent} from '../../shared/container/container.component';
import {HeroSectionComponent} from '../../shared/hero-section/hero-section.component';
import {ProjectsComponent} from '../../shared/projects/projects.component';
import {HeroSectionContent} from '../../../types/types';
import {ContainerSize} from '../../../enums/enums';
import {RouterLink} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-kontakt',
  standalone: true,
  imports: [
    ContainerComponent,
    HeroSectionComponent,
    ProjectsComponent,
    RouterLink,
    NgIf
  ],
  templateUrl: './kontakt.component.html',
  styleUrl: './kontakt.component.scss'
})
export class KontaktComponent {
  protected content: HeroSectionContent = {
    title: "Kontakt",
    backgroundImage: "/images/content/kontakt.jpg",
    buttons: []
  }
  protected readonly ContainerSize = ContainerSize;
  protected formSubmitted: boolean = false;

  constructor() {}

  submitForm(event: SubmitEvent): void {
    event.preventDefault();
    this.formSubmitted = true;
  }
}
