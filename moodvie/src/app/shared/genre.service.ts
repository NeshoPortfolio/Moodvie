import { Genre } from '../model/genre.model';

export class GenreService {

    private genres: Genre[] = [
        new Genre('Comedy', '../../assets/comedy-emoji.png'),
        new Genre('Horror', '../../assets/horror-emoji.png'),
        new Genre('Romance', '../../assets/romance-emoji.png'),
        new Genre('Drama', '../../assets/drama-emoji.png')
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
