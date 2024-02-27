import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'shared-navigation-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss',
})
export class NavigationBarComponent {
  public navBarElements = [
    { label: 'HOME', url: '/home' },
    { label: 'STARSHIPS', url: '/starships' },
  ];
}
