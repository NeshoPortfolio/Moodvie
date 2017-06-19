import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GenreService } from '../shared/genre.service';
import { StaticGenre } from '../model/static-genre.model';
import { MovieHttpService } from '../http/movieHttpService.service';
import { Subscription } from 'rxjs/Rx';
import { Movie } from '../model/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy {

  private movies: Movie[] = [];

  private currentPage: number = 1;
  private selectedGenre: StaticGenre;
  private movieSubscription: Subscription;

  constructor (
    private genreService: GenreService,
    private route: ActivatedRoute,
    private movieHttpService: MovieHttpService
  ) {}

  ngOnInit() {
    const genre = this.route.snapshot.params['genre'];
    this.selectedGenre = this.genreService.getGenre(genre);

    this.movieSubscription = this.movieHttpService.getMovies(this.selectedGenre.id, this.currentPage).subscribe(
      (data) => {
        this.movies = data.results;
        console.log(this.movies);
      },
      (error) => console.log(error),
      () => console.log('Request Completed!')
    );
  }

  ngOnDestroy() {
    this.movieSubscription.unsubscribe();
  }

  onNextPageClicked() {
    this.currentPage++;
    this.movieHttpService.getMovies(this.selectedGenre.id, this.currentPage).subscribe(
      (data) => this.movies = data.results,
      (error) => console.log(error),
      () => console.log('Request Completed')
    );
  }

}
