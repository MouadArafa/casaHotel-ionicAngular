import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Acceuil', url: '/home', icon: 'home' },
    { title: 'Etages', url: '/etages', icon: 'bed' },
    { title: 'Favorite', url: '/favorite', icon: 'star' },
    { title: 'About', url: '/about', icon: 'alert-circle' },
  ];

  constructor() {}
}
