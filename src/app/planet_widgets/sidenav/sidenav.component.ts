import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  isSidenavOpen: boolean = true; // Set initial state of sidenav

  constructor() {}

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen; // Toggle the state of sidenav
  }
}
