import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-genre-item',
  templateUrl: './genre-item.component.html',
  styleUrls: ['./genre-item.component.css']
})
export class GenreItemComponent implements OnInit {

  @Input()
  genre: Genre;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onGenreClicked(type: string) {
    console.log(type);
    this.router.navigate(['/movies', type]);
  }

}
