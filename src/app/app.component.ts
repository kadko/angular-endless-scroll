import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Movie App';
  
  constructor
  (
	private titleService:Title,
  ){
	 
  }
  
  setTitle(){
	this.titleService.setTitle(this.title);
  }
  
  homeClick(){
	this.setTitle();
  }

}