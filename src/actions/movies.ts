"use server";

export async function getMovies({ limit = 8 }: { limit?: number } = {}) {
  try {
    const parameters = new URLSearchParams();

    parameters.append("limit", limit.toString());

    const moviesResponse = await fetch(
      `${process.env.API_BASE_URL}/v1/movies?${parameters.toString()}`,
      {
        cache: "no-store",
      },
    );

    if (!moviesResponse.ok) {
      throw new Error(`Failed to fetch movies: ${moviesResponse.status}`);
    }

    return await moviesResponse.json();
  } catch (error) {
    console.error("Error fetching movies:", error);

    return {
      message: "Failed to fetch movies",
      success: false,
      data: [],
    };
  }
}
