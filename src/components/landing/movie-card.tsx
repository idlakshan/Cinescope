"use client";

import Image from "next/image";
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MovieData } from "../../actions/types";
import { Star } from "lucide-react";
import { Skeleton } from "../ui/skeleton";

interface MovieCardProps {
  movie: MovieData;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const [posterUrl, setPosterUrl] = useState(
    movie.poster || "/placeholder.svg",
  );

  return (
    <Card className="overflow-hidden">
      <div className="aspect-2/3 w-full overflow-hidden">
        <Image
          src={posterUrl}
          alt={movie.title}
          width={300}
          height={450}
          className="h-full w-full object-cover"
          onError={() => setPosterUrl("/placeholder.svg")}
        />
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold">{movie.title}</h3>

        <p className="text-muted-foreground text-sm">
          {movie.year} • {movie.runtime} min
        </p>

        <div className="mt-2">
          <Badge variant="outline">{movie.genres}</Badge>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between p-4 pt-0">
        <span className="text-sm font-medium">
          <Star className="w-4 h-4 text-yellow-500" />
          {movie?.imdb?.rating}/10
        </span>

        <Button variant="ghost" size="sm">
          Details
        </Button>
      </CardFooter>
    </Card>
  );
}

export function MovieCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-lg border border-primary/20 animate-pulse">
      <Skeleton className="aspect-2/3 w-full" />
      <div className="p-4">
        <div className="space-y-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>

        <div className="flex mt-3 gap-1">
          <Skeleton className="h-5 w-1/5" />
          <Skeleton className="h-5 w-1/5" />
        </div>

        <div className="flex justify-between gap-2 mt-6">
          <Skeleton className="h-8 w-18 rounded-full" />
          <Skeleton className="h-8 w-18 rounded-full" />
        </div>
      </div>
    </div>
  );
}
