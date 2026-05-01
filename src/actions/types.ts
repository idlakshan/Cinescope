export interface MovieData {
  id: number;
  title: string;
  genre: string;
  releaseYear: number;
  runtime: number;
  rating: number;
  poster?: string;
}

export interface MoviesActionResponse {
  message: string;
  success: boolean;
  data: MovieData[];
}