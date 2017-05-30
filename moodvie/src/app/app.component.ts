import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  n: number;

  ngOnInit() {
    this.n = Math.floor(Math.random() * 3) + 1;

    switch (this.n) {
      case 1:
        console.log('Barcelona');
        break;
      case 2:
        console.log('Rhodos');
        break;
      case 3:
      console.log('Makarska');
    }
  }
}
