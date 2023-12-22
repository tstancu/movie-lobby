import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'fullPosterPath'
})
export class FullPosterPathPipe implements PipeTransform {
    private baseUrl = 'https://image.tmdb.org/t/p/w200';

    transform(posterPath: string | null | undefined): string {
        return posterPath !== null && posterPath !== undefined ? this.baseUrl + posterPath : ''; 
    }

}