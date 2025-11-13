import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss']
})
export class SidebarComponent {
  isOpen = signal(false);

  toggleSidebar() {
    this.isOpen.update(v => !v);
  }

  close() {
    this.isOpen.set(false);
  }
}

