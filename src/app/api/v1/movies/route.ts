import { db } from "@/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const {searchParams} = new URL(request.url);
    const limit = searchParams.get("limit") || "50";
    const movies = await db
      .collection("movies")
      .find()
      .limit(parseInt(limit))
      .sort({ released : -1 })
      .toArray()
   
    return NextResponse.json(
      {
        message: "Movies retrieved successfully",
        success: true,
        data: movies,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error retrieving movies:", (error as Error).message);
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
