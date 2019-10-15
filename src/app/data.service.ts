import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  public searchSource = new BehaviorSubject([]);
  public movieSource  =  new BehaviorSubject('');
  
  currentSearch = this.searchSource.asObservable();
  currentMovie = this.movieSource.asObservable();

  constructor() { }

  changeSearch(message: any) {
    this.searchSource.next(message)
  }

  changeMovie(message: any) {
    this.movieSource.next(message)
  }
} 