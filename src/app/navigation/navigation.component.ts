import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
    @Output() categorySelected = new EventEmitter<string>();
    @Output() favoritesSelected = new EventEmitter<void>();
    @Input() clickedFavorites: boolean = false;

    showCategoryDropdown: boolean = false;
    movieCategories: string[] = ['Action', 'Drama', 'Comedy'];
    

    constructor(private router: Router) {}

    toggleCategoryDropdown(): void {
        console.log("TOGGLE CAT");
        this.showCategoryDropdown = !this.showCategoryDropdown;
        console.log(this.showCategoryDropdown);
    }

    switchCategory(category: string) : void {
        this.showCategoryDropdown = false;
        this.categorySelected.emit(category);
    }

    onClickFavorites(): void {
        console.log("on click favorites");
        // this.router.navigate(['/favorites']);
        this.clickedFavorites = true;
        console.log(this.clickedFavorites);
        this.favoritesSelected.emit();
    }
}