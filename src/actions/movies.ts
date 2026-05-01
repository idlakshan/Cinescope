"use server";

import type { MoviesActionResponse } from "./types";

export async function getMovies(): Promise<MoviesActionResponse> {
  try {
    const response = await fetch(`${process.env.API_BASE_URL}/v1/movies`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const movieResponse: MoviesActionResponse = await response.json();

    return movieResponse;
  } catch (error) {
    console.log(error);

    return {
      message: "Failed to fetch movies",
      success: false,
      data: [],
    };
  }
}
