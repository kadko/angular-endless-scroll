import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpService } from '../http.service';
import { Movie } from './Movie';
import { DataService } from "../data.service";
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';


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
	private router:Router,
	private titleService:Title,
  )
  { }
  
  movie:Movie = <Movie>{};
	
  ngOnInit() { 
	window.scroll(0,0); 
    this.getMovieDetails();
  }

  getMovieDetails(): void {
	let id = this.data.movieSource.getValue();
	if(!id) this.router.navigate(['/']);
    this.httpService.getMovieDetails(id)
      .subscribe(movie => {
		   this.titleService.setTitle( movie.Title );
		   this.movie = movie;
	  });
  }

}
