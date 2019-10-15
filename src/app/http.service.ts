import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, ObservableInput, throwError } from 'rxjs';
import { catchError, retry, map, tap, take } from 'rxjs/operators';

import { Movie } from './details/Movie';
import { MovieSearch } from './movies/MovieSearch';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient,) { }
  
  getMovieDetails (id:string): Observable<Movie> {
    return this.http.get<Movie>('http://www.omdbapi.com/?i='+ id)
      .pipe( 
	  map(res => <Movie>res),
        catchError(err => {
          console.error(err.message);
          console.log("Error is handled");
          return throwError("Error thrown from catchError");
        })
       );
  }
  
  /** GET heroes from the server */
  getMovies (page:number): Observable<MovieSearch> {
    return this.http.get<MovieSearch>('http://www.omdbapi.com/?s=game&type=movie&page='+ page)
      .pipe(
		map(res =>  res),
        catchError ( err => {
          console.error(err.message);
          console.log("Error is handled");
          return throwError("Error thrown from catchError");
        } )
      ); 
  }
  
}
