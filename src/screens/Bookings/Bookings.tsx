import { TripParticipantCard } from "@/components/TripParticipantCard";
import Image from "next/image";
import { formatDate } from "date-fns";
import { Bookings } from "@/types/bookings";

export const BookingsScreen = ({
  productBookings,
}: {
  productBookings: Bookings;
}) => {
  const {
    product_data: {
      name,
      type,
      description,
      main_photo,
      location,
      country_name,
      company,
    },
    trip_data: {
      bookings,
      name: tripName,
      start_date,
      end_date,
      min_age,
      max_age,
    },
    status_label,
  } = productBookings.data[0];

  const { participants, parent, total_price } = bookings[0];

  return (
    <div className="px-4 md:px-32 py-16">
      <div className="flex flex-col md:flex-row gap-8 mb-4">
        <div className="w-full md:w-[800px] h-[200px] md:h-[500px] relative">
          <Image src={main_photo?.url} alt={name} fill />
        </div>
        <div className="flex flex-col gap-2 text-lg">
          <p className="px-4 py-2 bg-green-600 text-white font-bold w-max mb-2">
            {status_label}
          </p>
          <p className="text-primary text-4xl font-medium">{name}</p>
          <p className="text-gray-600 font-light mb-2">{type}</p>
          <p className="mb-2">{description}</p>
          <p>
            Zapłacono:{" "}
            <span className="text-primary mb-12 text-3xl">
              {total_price} zł
            </span>
          </p>
        </div>
      </div>
      <p className="text-primary text-4xl font-semibold mb-4">{tripName}</p>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col md:flex-row gap-2 md:gap-12">
          <p>
            Lokalizacja:{" "}
            <strong>
              {location.city}, {location.province}, {country_name}
            </strong>
          </p>
          <p>
            Organizator: <strong>{company.name}</strong>
          </p>
        </div>
        <p>
          Termin wycieczki:{" "}
          <strong>
            {formatDate(start_date, "dd-MM-yyyy")} -{" "}
            {formatDate(end_date, "dd-MM-yyyy")}
          </strong>
        </p>
        <p>
          Wiek:{" "}
          <strong>
            {min_age} - {max_age} lat
          </strong>
        </p>
      </div>
      <h3 className="text-3xl font-bold my-4">Opiekun</h3>
      <div className="bg-primary text-white shadow-md rounded-2xl p-8 border border-gray-200">
        <p className="text-lg font-semibold text-white mb-2">
          {parent?.first_name} {parent?.last_name}
        </p>
        <p>
          Email: <strong>{parent?.email}</strong>
        </p>
        <p>
          Phone: <strong>{parent?.phone}</strong>
        </p>
        <p>
          Address:{" "}
          <strong>
            {parent?.street}, {parent?.city}, {parent?.province}
          </strong>
        </p>
      </div>

      <h3 className="text-3xl font-bold my-4">Uczestnicy</h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {participants?.map((participant) => (
          <TripParticipantCard participant={participant} key={participant.id} />
        ))}
      </ul>
    </div>
  );
};
