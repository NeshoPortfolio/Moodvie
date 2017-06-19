import { Genre } from './genre.model';

export class Movie {
    constructor(
        public adult: string,
        public backdrop_path: string,
        public genres: Genre[],
        public homepage: string,
        public id: number,
        public original_language: string,
        public original_title: string,
        public overview: string,
        public release_date: string,
        public poster_path: string,
        public popularity: number,
        public title: string,
        public video: boolean,
        public vote_average: number,
        public vote_count: number
    ) {}
}
