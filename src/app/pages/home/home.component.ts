import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {DividerComponent} from '../../shared/divider/divider.component';
import {HeroSectionComponent} from '../../shared/hero-section/hero-section.component';
import {HeroSectionContent} from '../../../types/types';
import {ContainerComponent} from '../../shared/container/container.component';
import {ValuesComponent} from '../../shared/values/values.component';
import {ProjectsComponent} from '../../shared/projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    DividerComponent,
    HeroSectionComponent,
    ContainerComponent,
    ValuesComponent,
    ProjectsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  protected content: HeroSectionContent = {
    title: "Neue Perspektiven für Jugendliche in Not",
    description: "Aktiv in Kirgistan und Mosambik",
    backgroundImage: "/images/content/home.jpg",
    buttons: [
      {
        link: "/verein",
        text: "Der Verein"
      },
      {
        link: "/projekte",
        text: "Unsere Projekte"
      }
    ]
  }
}
