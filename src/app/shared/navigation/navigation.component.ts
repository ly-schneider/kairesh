import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterLink} from '@angular/router';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    RouterLink,
    NgClass,
    NgIf
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit {
  currentRoute: string = '';
  navigationOpen: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }
}
