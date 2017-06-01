import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenreSelectionComponent } from './genre-selection/genre-selection.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    {path: '', component: GenreSelectionComponent},
    {path: 'movies/:genre', component: MoviesComponent, children: [
        {path: ':movie', component: MovieDetailComponent}
    ]},
    {path: 'profile', component: ProfileComponent},
    {path: 'login', component: LoginComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
