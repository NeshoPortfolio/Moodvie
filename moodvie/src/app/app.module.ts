import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GenreSelectionComponent } from './genre-selection/genre-selection.component';
import { HeaderComponent } from './header/header.component';
import { GenreItemComponent } from './genre-item/genre-item.component';
import { GenreService } from './shared/genre.service';
import { AppRoutingModule } from './app-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    GenreSelectionComponent,
    HeaderComponent,
    GenreItemComponent,
    MoviesComponent,
    MovieItemComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [GenreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
