import { Component, Input, OnInit, SimpleChanges } from "@angular/core";
import { IMovie } from "../movies/movie";
import { MovieServiceMock } from "../movies/movie.service.mock";

@Component({
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
    private _movies: IMovie[] = [];
    filteredMovies: IMovie[] = [];
    favorites: IMovie[] = [];

    @Input() searchQuery: string = '';
    @Input() showFavorites: boolean = false;

    constructor(private moviesService: MovieServiceMock) {}

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['searchQuery'] && this.searchQuery !== changes['searchQuery'].previousValue) {
            this.loadMovies(this.searchQuery);
        }

        if (changes['showFavorites']) {
            this.toggleFavorites();
        }
    }

    ngOnInit(): void {
        this.loadMovies('');
    }

    searchMovies(query: string): void {
        this.loadMovies(query);
    }

    private loadMovies(query: string): void {
        this.moviesService.getMovies(query).subscribe((movies) => {
            this._movies = movies
            this.filteredMovies = this._movies;
        });
    }

    addToFavorites(movie: IMovie): void {       
        const favoriteAlready = this.favorites.some(favorite => favorite.id === movie.id);

        if (!favoriteAlready) {
            this.favorites.push(movie);
        }
    }

    toggleFavorites(): void {
        this.filteredMovies = this.showFavorites ? this.favorites : this._movies;
    }
}