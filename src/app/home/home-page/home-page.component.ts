import { Component } from '@angular/core';
import { NavigationBarComponent } from '../../shared/components/navigation-bar/navigation-bar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavigationBarComponent, RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
