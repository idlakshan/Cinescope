import { MOVIES } from "@/lib/data";
import { NextResponse } from "next/server";
import type { MoviesActionResponse } from "../../../../actions/types";

export async function GET() {
  try {
    const response: MoviesActionResponse = {
      message: "Successfully retrieved all movies",
      success: true,
      data: MOVIES,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("GET /movies error:", error);

    return NextResponse.json(
      {
        message: "Failed to retrieve movies",
        success: false,
        data: [],
      },
      { status: 500 },
    );
  }
}
