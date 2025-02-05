import { NextResponse } from "next/server";
import bookings from "@/data/response_bookings.json";

export async function GET() {
  return NextResponse.json(bookings);
}
