import { Booking } from "../api/bookings/route";
import { Bookings as BookingsScreen } from "@/screens/Bookings";

const getBookings = async (): Promise<Booking> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bookings`);
  if (!res.ok) throw new Error("Failed to fetch products");

  return res.json();
};

export const dynamic = "force-dynamic";

export default async function BookingPage() {
  const productBookings = await getBookings();

  return <BookingsScreen productBookings={productBookings} />;
}
