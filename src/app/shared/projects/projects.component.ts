import {Component} from '@angular/core';
import {NgClass} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgClass,
    RouterLink
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
}
