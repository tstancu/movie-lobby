import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMovie } from './movie';

@Component({
    selector: 'app-movie-item',
    templateUrl: './movie-item.component.html',
    styleUrl: './movie-item.component.css'
})
export class MovieItemComponent {
    @Input() movie: IMovie | undefined;
    @Input() isFavorite: boolean = false;
    @Output() toggleFavorite = new EventEmitter<IMovie>();

    onToggleFavorite(): void {
        this.toggleFavorite.emit(this.movie);
    }
}
