import { Component, Input, OnInit, inject } from '@angular/core';
import { StarWarsInfoService } from '../../services/star-wars-info.service';
import { PeopleDTO } from '../../starships/interfaces/dtos/people-dto.interface';
import { tap } from 'rxjs';

@Component({
  selector: 'people-card',
  standalone: true,
  imports: [ ],
  templateUrl: './people-card.component.html',
  styleUrl: './people-card.component.scss',
})
export class PeopleCardComponent implements OnInit{

  private starwarsInfoService = inject(StarWarsInfoService);

  @Input( {required : true}) 
  public people!: string [];
  
  public pilots!: PeopleDTO [];

  ngOnInit(): void {
    this.people?.forEach( url => {
      this.starwarsInfoService.getPeople(url).subscribe( dto => this.pilots.push( dto));
    })
  }

}
