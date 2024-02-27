import { Component, OnInit, inject } from '@angular/core';
import { NavigationBarComponent } from '../../../shared/components/navigation-bar/navigation-bar.component';
import { StarshipsService } from '../../services/starships.service';
import { HttpClientModule } from '@angular/common/http';
import { Starship } from '../../interfaces/starship.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [
    NavigationBarComponent,
    CommonModule
  ],
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.scss',
})
export default class LayoutPageComponent implements OnInit {
  public starships: Starship[] = [];

  getStarships() {}

  constructor(private starshipsService: StarshipsService) {}

  ngOnInit(): void {
    this.starshipsService.getStarships().subscribe((data) => {
      this.starships = data.results;
    });
  }
}
