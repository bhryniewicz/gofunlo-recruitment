import bookings from "@/data/response_bookings.json";

export type Bookings = typeof bookings;
export type Participant = (typeof bookings.data)[0]["participants"][number];
