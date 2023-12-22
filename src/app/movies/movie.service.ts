import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IMovie } from './movie';

@Injectable({
    providedIn: 'root',
  })
export class MovieService {
    private token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzhjMjYxZjVhYzZiMDEyYTc5OGJiYjliYTQ3M2ZiYSIsInN1YiI6IjYyOTBkY2JlN2Q1ZGI1MTBhNzJjYjA5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mR_XFgDVTEdtj5QKaUn7_-mUeFugESste2bMkksEPsU';
    private apiUrl = 'https://api.themoviedb.org/3/';

    constructor(private http: HttpClient) {}

    getMovies(query: string, page: number = 1): Observable<IMovie[]> {

        const url = `${this.apiUrl}/search/movie`;

        const headers = new HttpHeaders({
            'Authorization': `Bearer ${this.token}`,
            'Content-Type': 'application/json',
        });

        const params = new HttpParams()
                .set('query', query)
                .set('page', page.toString());

        return this.http
            .get<{ results: IMovie[]}>(url, { headers, params})
            .pipe(map((response) => this.filterMovies(response.results, query)));
    }

    private filterMovies(movies: IMovie[], query: string): IMovie[] {
        return movies.filter(
            (movie) => 
                movie.title.toLowerCase().includes(query.toLowerCase()) &&
                movie.poster_path !== null &&
                movie.poster_path !== undefined 
        );
    }
}