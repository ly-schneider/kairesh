import {Component} from '@angular/core';
import {ContainerComponent} from "../../shared/container/container.component";
import {HeroSectionComponent} from "../../shared/hero-section/hero-section.component";
import {ProjectsComponent} from "../../shared/projects/projects.component";
import {RouterLink} from "@angular/router";
import {ValuesComponent} from "../../shared/values/values.component";
import {HeroSectionContent} from '../../../types/types';

@Component({
  selector: 'app-verein',
  standalone: true,
  imports: [
    ContainerComponent,
    HeroSectionComponent,
    ProjectsComponent,
    RouterLink,
    ValuesComponent
  ],
  templateUrl: './verein.component.html',
  styleUrl: './verein.component.scss'
})
export class VereinComponent {
  protected content: HeroSectionContent = {
    title: "Creating new perspectives",
    backgroundImage: "/images/content/verein.jpg",
    buttons: []
  }
}
