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
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MovieHttpService } from './http/movieHttpService.service';

@NgModule({
  declarations: [
    AppComponent,
    GenreSelectionComponent,
    HeaderComponent,
    GenreItemComponent,
    MoviesComponent,
    MovieDetailComponent,
    ProfileComponent,
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [GenreService, MovieHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
