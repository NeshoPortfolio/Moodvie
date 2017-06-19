import { StaticGenre } from '../model/static-genre.model';

export class GenreService {

    private genres: StaticGenre[] = [
        new StaticGenre(35, 'Comedy', '../../assets/comedy-emoji.png'),
        new StaticGenre(27, 'Horror', '../../assets/horror-emoji.png'),
        new StaticGenre(10749, 'Romance', '../../assets/romance-emoji.png'),
        new StaticGenre(18, 'Drama', '../../assets/drama-emoji.png'),
        new StaticGenre(28, 'Action', '../../assets/action-emoji.png'),
        new StaticGenre(53, 'Thriller', '../../assets/thriller-emoji.png')
    ];

    getGenres() {
        return this.genres;
    }

    getGenre(type: string) {
        const genre = this.genres.find(
            (s) => {
                return s.type === type;
            }
        );
        return genre;
    }
}
