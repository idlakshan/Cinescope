
import { getMovies } from "../../actions/movies";
import { MovieData } from "../../actions/types";
import MovieCard from "./movie-card";

export default async function MoviesList() {
  const response = await getMovies({ limit: 8 });

  //console.log(response);
  const movies: MovieData[] = response?.data || [];

  if (!movies.length) {
    return (
      <div className="text-red-600 text-center py-12">No movies available!</div>
    );
  }

  return (
    <>
      <div className="text-muted-foreground text-sm">
        Showing {movies.length} movies
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </>
  );
}
