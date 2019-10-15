export interface Movie
{
	Title: string;
	Year: number;
	Rated: string;
	Released: string;
	Runtime: string;
	Genre: string;
	Director: string;
	Writer: string;
	Plot: string;
	Language: string;
	Country: string;
	Awards: string;
	Poster: string;
	Ratings: Array<Ratings>;
	Metascore: number;
	imdbRating: number;
	imdbVotes: string;
	imdbID: string;
	Type: string;
	DVD: string;
	BoxOffice: string;
	Production: string;
	Website: string;
	Response: boolean;
}

export interface Ratings
{
	Source: string;
	Value: string;
}