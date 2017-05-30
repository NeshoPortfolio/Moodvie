import { Component, OnInit } from '@angular/core';
import { GenreService } from '../shared/genre.service';
import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-genre-selection',
  templateUrl: './genre-selection.component.html',
  styleUrls: ['./genre-selection.component.css']
})
export class GenreSelectionComponent implements OnInit {

  genres: Genre[] = [];

  constructor(private genreService: GenreService) { }

  ngOnInit() {
    this.genres = this.genreService.getGenres();
  }

}
