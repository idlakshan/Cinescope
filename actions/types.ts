export interface MovieData {
  _id: number;
  title: string;
  plot: string;
  poster: string;
  genres: string[];
  year: number;
  imdb: { rating: number };
  runtime: number;
  type: string;
  directors: string[];
}

export interface MoviesActionResponse {
  data: MovieData[];
  message: string;
  success: boolean;
}
