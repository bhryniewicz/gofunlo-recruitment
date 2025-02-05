import { NextResponse } from "next/server";
import bookings from "@/data/response_bookings.json";

export type Booking = typeof bookings;
export type Participant = typeof bookings.data[0]['participants'][number];

export async function GET() {
  return NextResponse.json(bookings);
}
