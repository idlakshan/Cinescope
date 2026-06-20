import { Button } from "@/components/ui/button";
import MoviesList, {MoviesListSkeleton} from "./movies-list";
import { Suspense } from "react";


export default function FeaturedMovies() {
  return (
    <section
      id="featured-movies"
      className="container max-w-350 mx-auto px-4 py-12 md:px-6 w-full"
    >
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Featured Movies</h2>
          <p className="text-muted-foreground">
            Explore the latest and greatest movies that are making waves in the
            cinema world.
          </p>
        </div>

        <Button variant="outline">View All</Button>
      </div>

      <div className="space-y-6">
        <div className="w-full h-30.5 bg-purple-400 rounded-lg"></div>
        <Suspense fallback={<MoviesListSkeleton />}>  
          <MoviesList/>
        </Suspense>
      </div>
    </section>
  );
}
