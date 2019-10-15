import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpService } from '../http.service';
import { Movie } from './Movie';
import { DataService } from "../data.service";
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor
  (
	private httpService:HttpService,
	private data:DataService,
	private myElement: ElementRef,
  )
  { }
  
  movie:Movie = <Movie>{};
	
  ngOnInit() { 
	 
    this.getMovieDetails();
	 
	window.scroll(0,0);
	 
  }

  getMovieDetails(): void {
	let id = this.data.movieSource.getValue();
    this.httpService.getMovieDetails(id)
      .subscribe(movie => (this.movie = movie));
  }

}
