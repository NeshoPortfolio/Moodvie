import { Component, OnInit } from '@angular/core';
import { GenreService } from '../shared/genre.service';
import { StaticGenre } from '../model/static-genre.model';

@Component({
  selector: 'app-genre-selection',
  templateUrl: './genre-selection.component.html',
  styleUrls: ['./genre-selection.component.css']
})
export class GenreSelectionComponent implements OnInit {

  genres: StaticGenre[] = [];

  constructor(private genreService: GenreService) { }

  ngOnInit() {
    this.genres = this.genreService.getGenres();
  }

}
