export interface MovieSearch {
  Search: Array<MovieShort>;
}

export interface MovieShort {
  Title: string;
  Year: number;
  imdbID: string;
  Type: string;
  Poster: string;
}
 