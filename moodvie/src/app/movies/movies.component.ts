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

  // The movies that we fetch from the API.
  private movies: Movie[] = [];

  // URL to the movie poster
  private moviePosterUrl: string;

  // Represents the current page we load movies from. In the query param you can specify pages.
  private currentDataPage = 1;

  // Represents the total amount of pages you can specify in the query param.
  private totalMoviePages = 0;

  // Represents the current displayed movie in our movies array.
  private currentMovieIndex = 0;

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

    this.movieSubscription = this.movieHttpService.getMovies(this.selectedGenre.id, this.currentDataPage).subscribe(
      (data) => {
        this.movies = data.results;
        this.totalMoviePages = data.total_pages;

        const posterPath = this.movies[this.currentMovieIndex].poster_path;
        this.moviePosterUrl = this.movieHttpService.getPosterUrl('original', posterPath);
        console.log(this.movies);
        console.log(this.moviePosterUrl);
      },
      (error) => console.log(error),
      () => console.log('Request Completed!')
    );
  }

  ngOnDestroy() {
    this.movieSubscription.unsubscribe();
  }

  onNextClicked() {
    if (this.currentMovieIndex < this.movies.length - 1) {
      this.currentMovieIndex++;
      console.log('Movie: ' + this.currentMovieIndex + ' of: ' + this.movies.length);

      const posterPath = this.movies[this.currentMovieIndex].poster_path;
      this.moviePosterUrl = this.movieHttpService.getPosterUrl('original', posterPath);
      console.log(this.moviePosterUrl);
    } else {
      this.currentDataPage++;

      this.movieHttpService.getMovies(this.selectedGenre.id, this.currentDataPage).subscribe(
        (data) => {
          this.currentMovieIndex = 0;
          this.movies = data.results;

          const posterPath = this.movies[this.currentMovieIndex].poster_path;
          this.moviePosterUrl = this.movieHttpService.getPosterUrl('original', posterPath);
          console.log(this.moviePosterUrl);
        },
        (error) => console.log(error),
        () => console.log('Request Completed')
      );
    }
  }

}
