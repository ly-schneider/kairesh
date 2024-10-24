import { Component } from '@angular/core';
import {ContainerComponent} from '../../shared/container/container.component';
import {HeroSectionComponent} from '../../shared/hero-section/hero-section.component';
import {ProjectsComponent} from '../../shared/projects/projects.component';
import {ValuesComponent} from '../../shared/values/values.component';
import {HeroSectionContent} from '../../../types/types';

@Component({
  selector: 'app-projekte',
  standalone: true,
  imports: [
    ContainerComponent,
    HeroSectionComponent,
    ProjectsComponent,
    ValuesComponent
  ],
  templateUrl: './projekte.component.html',
  styleUrl: './projekte.component.scss'
})
export class ProjekteComponent {
  protected content: HeroSectionContent = {
    title: "Projekte",
    backgroundImage: "/images/content/projekte.jpg",
    buttons: []
  }
}
