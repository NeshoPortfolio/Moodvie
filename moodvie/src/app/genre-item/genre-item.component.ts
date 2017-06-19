import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { StaticGenre } from '../model/static-genre.model';

@Component({
  selector: 'app-genre-item',
  templateUrl: './genre-item.component.html',
  styleUrls: ['./genre-item.component.css']
})
export class GenreItemComponent implements OnInit {

  @Input()
  genre: StaticGenre;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onGenreClicked(type: string) {
    this.router.navigate(['/movies', type]);
  }

}
