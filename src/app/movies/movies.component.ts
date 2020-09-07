import { Component, OnInit, ElementRef  } from '@angular/core';
import { HttpService } from '../http.service';
import { DataService } from "../data.service";
import { MovieSearch } from './MovieSearch';
import { BehaviorSubject, pipe } from 'rxjs';
import { catchError, retry, map, tap, take } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  
  batch = 2;        // size of each query
  lastKey = '';     // key to offset next query from
  finished = false;  // boolean when end of database is reached
  page = 1;
  
  movies:MovieSearch = <MovieSearch>{};
  moviesBS: any;
  title = 'Movies List';
  constructor
  (
	private httpService:HttpService,
	private data:DataService,
	private myElement: ElementRef,
	private router:Router,
	private titleService:Title,
  )
  { }
	
 
  ngOnInit() {
    this.getMovies();
	this.titleService.setTitle( this.title );
	this.page = (this.data.searchSource.getValue()) ? this.data.searchSource.getValue().length/10 : 1;
	setTimeout(()=>{
		this.scrollTo()
	}, 500 );	
	
  }
  
  scrollTo(){
	let idName = this.data.movieSource.getValue();
	if(idName){
		let el = this.myElement.nativeElement.querySelector('#' + idName);
		el.scrollIntoView();
	}

  }
	  
  getMovies(): void {
    this.httpService.getMovies(this.page)
      .subscribe(
		  (movies) => {
			 if(this.data.searchSource.getValue().length>0) {
				 this.data.changeSearch( this.data.searchSource.getValue() );
			 }else{
				  console.log(' movies.Search!!',  movies.Search)
				 this.data.changeSearch( movies.Search );
			 }
		  }
	  );
  }
  
  movieClick(imdbID:string){
	this.data.changeMovie(imdbID);
	console.log(imdbID);
	this.router.navigate(['/movies-details']);
  }

  onScroll () {
	this.page = this.data.searchSource.getValue().length/10;
	this.page = this.page+1;
    console.log('scrolled!!', this.page)
    this.httpService.getMovies(this.page)
    
    .subscribe((movies) => {
		const newMovies = movies;
		const currentMovies = this.data.searchSource.getValue();
		this.data.changeSearch([...currentMovies, ...newMovies.Search]);
	})
  } 
}
 