import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Constants } from '../shared/constants';

@Injectable()
export class MovieHttpService {

    constructor(private http: Http) {
        console.log(Constants.prototype.API_BASE_URL);
    }

    getMovies(genreId: number, page: number) {
        return this.http.get(
            Constants.prototype.API_BASE_URL + 'genre/' + genreId + '/movies' + '?api_key=' + Constants.prototype.API_KEY
            + '&language=en-US&include_adult=false&page=' + page
        ).map((response: Response) => {
                return response.json();
            });
    }
}
