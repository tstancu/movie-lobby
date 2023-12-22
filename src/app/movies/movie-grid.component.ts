import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from "@angular/core";
import { IMovie } from "./movie";
import { MovieServiceMock } from "./movie.service.mock";
import { MovieService } from "./movie.service";
import { ActivatedRoute } from "@angular/router";
import { InfiniteScrollDirective } from "../utils/infinite-scroll.directive";

@Component({
    selector: 'app-movie-grid',
    templateUrl: './movie-grid.component.html',
    styleUrls: ['./movie-grid.component.css']
})
export class MovieGridComponent implements OnInit {
    private _movies: IMovie[] = [];
    filteredMovies: IMovie[] = [];
    favorites: IMovie[] = [];
    showLoadMoreButton: boolean = true;
    currentPage: number = 1;

    @Input() searchQuery: string = '';
    @Input() showFavorites: boolean = false;
    @Output() loadMore = new EventEmitter<void>();

    constructor(
        private moviesService: MovieService) {}

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['searchQuery'] && this.searchQuery !== changes['searchQuery'].previousValue) {
            this._movies = [];
            this.currentPage = 1; 
            this.loadMovies(this.searchQuery);
        }

        if (changes['showFavorites']) {
            this.viewFavorites();
        }
    }

    ngOnInit(): void {
    }

    searchMovies(query: string): void {
        this.loadMovies(query);
    }

    private loadMovies(query: string): void {
        this.moviesService.getMovies(query, this.currentPage).subscribe((movies) => {
            this._movies = movies;
            this.filteredMovies = this._movies;

            this.showLoadMoreButton = movies.length > 0;
        });
    }

    loadMoreMovies(): void {
        this.moviesService
            .getMovies(this.searchQuery, this.currentPage + 1)
            .subscribe({
                next: (newMovies) => {
                    this._movies = this._movies.concat(newMovies);
                    this.currentPage++;
    
                    this.showLoadMoreButton = newMovies.length > 0;

                    this.loadMovies(this.searchQuery);
                },
                error: (error) => {
                    console.error('Error loading more movies', error);
                },
            });
    }

    addToFavorites(movie: IMovie): void {
        this.favorites.push(movie);
    }

    removeFromFavorites(movie: IMovie): void {
        this.favorites = this.favorites.filter(favorite => favorite.id !== movie.id);

        if (this.showFavorites) {
            this.viewFavorites();
        }
    }

    toggleFavorite(movie: IMovie): void {
        if (this.isFavorite(movie)) {
            this.removeFromFavorites(movie);
        } else {
            this.addToFavorites(movie);
        }
    }

    isFavorite(movie: IMovie): boolean {
        return this.favorites.some(favorite => favorite.id === movie.id);
    }

    viewFavorites(): void {
        this.filteredMovies = this.showFavorites ? this.favorites : this._movies;
    }
}