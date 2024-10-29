import { Component } from '@angular/core';
import {HeroSectionContent} from '../../../types/types';
import { ContainerSize } from '../../../enums/enums';
import {ContainerComponent} from '../../shared/container/container.component';
import {HeroSectionComponent} from '../../shared/hero-section/hero-section.component';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Pending' | 'Inactive';
}

@Component({
  selector: 'app-hidden',
  standalone: true,
  imports: [
    ContainerComponent,
    HeroSectionComponent,
    NgIf,
    RouterLink,
    NgForOf,
    NgClass
  ],
  templateUrl: './hidden.component.html',
  styleUrl: './hidden.component.scss'
})
export class HiddenComponent {
  protected content: HeroSectionContent = {
    title: "Versteckte Seite",
    backgroundImage: "/images/content/kontakt.jpg",
    buttons: []
  }

  users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Administrator', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Pending' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer', status: 'Inactive' }
  ];

  protected readonly ContainerSize = ContainerSize;
}
