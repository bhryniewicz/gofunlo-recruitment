import { BookingsScreen } from "@/screens/Bookings";
import { Bookings } from "@/types/bookings";

const getBookings = async (): Promise<Bookings> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bookings`);
  if (!res.ok) throw new Error("Failed to fetch products");

  return res.json();
};

export const dynamic = "force-dynamic";

export default async function BookingPage() {
  const productBookings = await getBookings();

  return <BookingsScreen productBookings={productBookings} />;
}
